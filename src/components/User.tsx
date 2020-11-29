import { IonAlert, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonPage, IonRow, IonToolbar } from "@ionic/react";
import React, { useContext, useState } from "react";
import AppContext from "../data/app-context";
import { Riddle } from "../models/Riddle";

const User: React.FC = () => {
  const appCtx = useContext(AppContext);
  const [showAlert, setShowAlert] = useState(false);

  const updateUsername = (newUsername: string) => {
    let updatedProfile = { ...appCtx.profile }
    updatedProfile.username = newUsername;
    appCtx.updateProfile(updatedProfile);
  }

  return (
    <IonPage>
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home" text="Back" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonCard >
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonCardHeader >
                <IonImg src={appCtx.profile.picture ? appCtx.profile.picture : 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png'} />
                <IonCardTitle onClick={() => setShowAlert(true)}>{appCtx.profile.username}</IonCardTitle>
              </IonCardHeader>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCardContent>
          <IonGrid>
            {
              appCtx.riddles.map((riddle: Riddle) => (
                <IonRow key={riddle.id}>
                  <IonCol>
                    <IonItem color={riddle.isSuccess ? "primary" : "secondary"}>
                      <IonLabel>
                        {riddle.name} : {riddle.timeSec} seconds
                  </IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              ))
            }
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonContent>
    <IonAlert
    isOpen={showAlert}
    onDidDismiss={() => setShowAlert(false)}
    header={'Username'}
    inputs={[
      {
        name: 'usernameInput',
        type: 'text',
        id: 'profile-username',
        value: appCtx.profile.username,
        placeholder: 'Your username'
      }
    ]}
    buttons={[
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
      {
        text: 'Ok',
        handler: (alertData) => updateUsername(alertData.usernameInput)
      }
    ]}
  />
    </IonPage>
  );
}

export default User;