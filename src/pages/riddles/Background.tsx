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
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
} from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../data/app-context';
import { Riddle } from '../../models/Riddle';
import { checkCode } from '../../utils/utils';
import { Plugins, AppState } from '@capacitor/core';
import { useHistory } from "react-router-dom";



const Background: React.FC<{ riddle: Riddle }> = (props) => {
  const { App } = Plugins;
  const appCtx = useContext(AppContext);
  const history = useHistory();
  const [timeStart] = useState(new Date())
  const [inputCode, setInputCode] = useState('');
  const [win, setWin] = useState(false)

  useEffect(() => {
    App.addListener('appStateChange', (state: AppState) => {
      console.log(state.isActive)
      if (!state.isActive)
        setWin(true)
    });
    return function cleanup() {
      App.removeAllListeners();
    };
  });

  const successfulRiddle = () => {
    if (!props.riddle || !checkCode('LockSucceSS', inputCode)) return;
    let updateRiddle = { ...props.riddle };
    updateRiddle.isSuccess = true;
    updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
    appCtx.updateRiddle(updateRiddle);
    history.replace("/")
  };

  return (
    <IonContent>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol sizeMd="5">
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
          </IonCol>
        </IonRow>
      </IonGrid>
      {win &&
        <IonItem color="primary">
          <IonLabel className="ion-text-center">
            Le code est: LockSucceSS
        </IonLabel>
        </IonItem>
      }

    </IonContent>
  );
};

export default Background;
