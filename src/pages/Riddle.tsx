import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import RiddleListings from '../components/RiddleListings';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
        <IonButtons slot="start">
          <IonBackButton defaultHref="home" text="Back"/>
        </IonButtons>
          <IonTitle>Beeware</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size="4" >
                  <IonCardHeader>

                    <IonImg src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" />
                    <IonCardSubtitle>Enigm 1</IonCardSubtitle>
                  </IonCardHeader>
                </IonCol>
                <IonCol>
                  <IonCardContent>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='far fa-star' />
                    <i className='far fa-star' />
                  </IonCardContent>
                  <p>Blabla explicatif</p>
                </IonCol>

              </IonRow>

            </IonGrid>
          </IonCard>
        </IonHeader>
        <p>Cette zone changera en fonction de l'énigme.</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
