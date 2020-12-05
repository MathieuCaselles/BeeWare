import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
} from '@ionic/react';
import React, { useContext, useState } from 'react';
import AppContext from '../../data/app-context';
import { Riddle } from '../../models/Riddle';
import { checkCode } from '../../utils/utils';

const CodeLock: React.FC<{ riddle: Riddle }> = (props) => {
  const appCtx = useContext(AppContext);

  const timeStart = new Date();
  const [inputCode, setInputCode] = useState('');

  const successfulRiddle = () => {
    if (!props.riddle || !checkCode('LockSucceSS', inputCode)) return;
    let updateRiddle = { ...props.riddle };
    updateRiddle.isSuccess = true;
    updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
    appCtx.updateRiddle(updateRiddle);
  };

  return (
    <IonContent>
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

export default CodeLock;
