import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonProgressBar, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RiddleListings from '../components/RiddleListings';
import AppContext from '../data/app-context';
import { Riddle } from '../models/Riddle';
import './Home.css';

const Home: React.FC = () => {

    const history = useHistory();
    const navigateToUser = () => {
        history.push({
            pathname: `/user`,
        });
        history.go(0)
    }
    const appCtx = useContext(AppContext);
    let timeRiddle = 0

    useEffect(() => {
        appCtx.initContext();
    }, [])

    appCtx.riddles.map((riddle: Riddle) => {
        timeRiddle += riddle.timeSec 
    })
    
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
                                    <IonCardSubtitle>{appCtx.profile.username}</IonCardSubtitle>
                                    <IonImg src={appCtx.profile.picture ? appCtx.profile.picture : 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png'} />
                                </IonCardHeader>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    <p>Temps total passé sur les épreuves: {timeRiddle} seconds</p>
                                    <p>Énigmes complétés :  ??/{appCtx.riddles.length}</p>
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
