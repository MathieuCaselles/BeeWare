import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonProgressBar, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import RiddleListings from '../components/RiddleListings';
import './Home.css';

const Home: React.FC = () => {

    const history = useHistory();
    const navigateToUser = () => {
        history.push({
            pathname: `/user`,
        });
        history.go(0)
    }

    return (
        <IonPage>
            <IonHeader collapse="condense">
                <IonToolbar color={'primary'}>
                    <IonTitle>Beeware</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard onClick={navigateToUser} button={true}>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="4">
                                <IonCardHeader>
                                    <IonCardSubtitle>Pseudo</IonCardSubtitle>
                                    <IonImg src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png" />
                                </IonCardHeader>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    <p>Temps total passé sur les épreuves: 0min</p>
                                    <p>Énigmes complétés :  3/??</p>
                                    <IonProgressBar type="indeterminate" />
                                </IonCardContent>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <RiddleListings />
            </IonContent>
        </IonPage >
    );
};

export default Home;
