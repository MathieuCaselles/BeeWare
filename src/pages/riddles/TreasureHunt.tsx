import { Geolocation } from '@capacitor/core/dist/esm/web/geolocation';
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonLabel,
  IonRow,
} from '@ionic/react';
import { save } from 'ionicons/icons';
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../data/app-context';
import { checkCode } from '../../utils/utils';

const TreasureHunt: React.FC = () => {
  const getLocation = async () => {
    try {
      position = await Geolocation.getCurrentPosition();
      console.log('position: ', position);
      const currentPosition = position;
      appCtx.updatePosition(currentPosition);
    } catch (error) {
      console.log(error);
    }
  };

  // const successfulRiddle = () => {
  //   if (!props.riddle || !checkCode('LockSucceSS', inputCode)) return;
  //   let updateRiddle = { ...props.riddle };
  //   updateRiddle.isSuccess = true;
  //   updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
  //   appCtx.updateRiddle(updateRiddle);
  // };

  const appCtx = useContext(AppContext);
  let position;

  getLocation();

  const timeStart = new Date();
  const [inputCode, setInputCode] = useState('');

  let userPosition = appCtx.profile.position;
  const startPosition = appCtx.profile.position;

  console.log('userPosition: ', userPosition);

  useEffect(() => {
    userPosition.coords = appCtx.profile.position.coords;
  }, [position]);

  return (
    <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCard>
            <p>Cette zone changera en fonction de l'énigme. Chasse au trésor</p>
          </IonCard>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonCard>
              <p>Position de départ :</p>
              {startPosition.coords ? (
                <p>
                  {startPosition.coords.latitude} -{' '}
                  {startPosition.coords.longitude}
                </p>
              ) : (
                <p>Pas de coordonnées</p>
              )}
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard>
              <p>Position actuelle :</p>
              {userPosition.coords ? (
                <p>
                  {userPosition.coords.latitude} -{' '}
                  {userPosition.coords.longitude}
                </p>
              ) : (
                <p>Pas de coordonnées</p>
              )}
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="1" offset="4">
            <IonButton mode="ios" fill="outline" onClick={() => getLocation()}>
              <IonIcon icon={save} />
              <IonLabel>getLocation</IonLabel>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default TreasureHunt;
