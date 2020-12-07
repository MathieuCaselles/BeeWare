import { IonButton, IonCard, IonCardHeader, IonCol, IonContent, IonGrid, IonImg, IonInput, IonItem, IonList, IonRow, IonTitle } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { Contacts } from '@ionic-native/contacts';
import { ContactName, ContactField } from '@ionic-native/contacts';
import { Riddle } from '../../models/Riddle';
import { checkCode } from '../../utils/utils';
import AppContext from '../../data/app-context';
import { useHistory } from "react-router-dom";

const ContactRiddle: React.FC<{ riddle: Riddle }> = (props) => {

  const [inputCode, setInputCode] = useState('');
  const appCtx = useContext(AppContext);
  const [timeStart] = useState(new Date())
  const history = useHistory();

  const saveContact = async () => {
    let contacts = new Contacts()
    let contact = contacts.create()


    contact.name = new ContactName(undefined, "Ware", "Bee")
    contact.phoneNumbers = [new ContactField("mobile", "8647291483")]
    try {
      await contacts.find(["*"], undefined,)
    } catch (error) {
      console.log(error)
    }
    try {
      await contact.save().then(
        () => console.log('Contact saved')
      )
    } catch (error) {
      console.log(error.message)
    }

  }
  const successfulRiddle = () => {
    if (!props.riddle || !checkCode('8647291483', inputCode)) return;
    let updateRiddle = { ...props.riddle };
    updateRiddle.isSuccess = true;
    updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
    appCtx.updateRiddle(updateRiddle);
    history.replace("/")
  };

  return (
    <IonContent fullscreen>
      <IonCard>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonCardHeader>
                <IonTitle>{props.riddle!.name}</IonTitle>
              </IonCardHeader>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonButton onClick={saveContact}>Start riddle</IonButton>
              <IonCardHeader>
                <IonImg src={props.riddle!.image} />
              </IonCardHeader>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol>
              <IonList>
                <IonItem>
                  <IonInput
                    className="ion-text-center"
                    onIonChange={(event) =>
                      setInputCode(event.detail.value || '')
                    }
                  ></IonInput>
                  <IonButton color="primary" onClick={successfulRiddle}>
                    Valider
                  </IonButton>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    </IonContent>
  );
};

export default ContactRiddle;