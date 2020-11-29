import { Geolocation } from '@capacitor/core/dist/esm/web/geolocation';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../data/app-context';

const TreasureHunt: React.FC = () => {

  const history = useHistory();
  const appCtx = useContext(AppContext);

  const navigateToHome= () => {
      history.push({
          pathname: `/home`,
      });
      history.go(0)
  }

  const getLocation = async() => {
    try {
        let position = await Geolocation.getCurrentPosition();
        const currentPosition = { ...appCtx.position }
        currentPosition.latitude = position.coords.latitude;
        currentPosition.longitude = position.coords.longitude;
        appCtx.updatePosition(currentPosition)
        
    } catch (error) {

    }
  }
  getLocation();

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle onClick={() => navigateToHome()}>Beeware</IonTitle>
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

        <p>Cette zone changera en fonction de l'énigme. Chasse au trésor</p>
      </IonContent>
    </IonPage>
  );
};

export default TreasureHunt;
