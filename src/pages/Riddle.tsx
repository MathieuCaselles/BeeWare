import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import AppContext from '../data/app-context';

const Riddle: React.FC = () => {
  const appCtx = useContext(AppContext);

  const id = useParams<{ id: string }>().id;
  const riddle = appCtx.riddles.find((riddle) => riddle.id === id);
  console.log(riddle)
  const Component = riddle?.component;


  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar color={'primary'}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text="Back" />
          </IonButtons>
          <IonTitle>Beeware</IonTitle>
        </IonToolbar>
      </IonHeader>
      {Component && riddle ? <Component riddle={riddle} /> : 'Rien ici'}
    </IonPage>
  );
};

export default Riddle;
