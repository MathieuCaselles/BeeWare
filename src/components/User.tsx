import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonRow, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import AppContext from "../data/app-context";
import { Riddle } from "../models/Riddle";

const User: React.FC = () => {
  const appCtx = useContext(AppContext);

  return (
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
                <IonImg src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" />
                <IonCardTitle>Pseudo</IonCardTitle>
              </IonCardHeader>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonCardContent>
          <IonGrid>
            {
              appCtx.riddles.map((riddle: Riddle) => (
                <IonRow>
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
  );
}

export default User;