import { Filesystem, FilesystemDirectory } from '@capacitor/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonProgressBar, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RiddleListings from '../components/RiddleListings';
import AppContext from '../data/app-context';
import { Riddle } from '../models/Riddle';
import './Home.css';

const Home: React.FC = () => {

    const history = useHistory();
    const appCtx = useContext(AppContext);

    const nbrRiddlesSuccess = appCtx.riddles.filter(riddles => riddles.isSuccess).length
    const nbrRiddles = appCtx.riddles.length
    const navigateToUser = () => {
        history.push({
            pathname: `/user`,
        });
        history.go(0)
    }
    let timeRiddle = 0
    let riddleSuccess = 0
    const [profileBase64, setProfileBase64] = useState<string>();

    const updateBase64 = async () => {
        if (!appCtx.profile.picture) return
        const file = await Filesystem.readFile({
            path: appCtx.profile.picture,
            directory: FilesystemDirectory.Data
        })
        setProfileBase64('data:image/jpeg;base64,' + file.data)
    }

    useEffect(() => {
        updateBase64()
    }, [appCtx.profile.picture])

    appCtx.riddles.map((riddle: Riddle) => {
        if (riddle.isSuccess) {
            riddleSuccess += 1
        }
        timeRiddle += riddle.timeSec
    })


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle className="ion-text-center">
                        Beeware
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow className="ion-justify-content-center">
                        <IonCol sizeMd="5">
                            <IonCard onClick={navigateToUser} button={true}>
                                <IonGrid>
                                    <IonRow >
                                        <IonCol size="4">
                                            <IonCardHeader>
                                                <IonCardSubtitle className="ion-text-center">
                                                    {appCtx.profile.username}
                                                </IonCardSubtitle>
                                                <IonImg src={profileBase64 ? profileBase64 : 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png'} />
                                            </IonCardHeader>
                                        </IonCol>
                                        <IonCol>
                                            <IonCardContent>
                                                <p>Temps total passé sur les épreuves: {timeRiddle.toFixed(2)} seconds</p>
                                                <p>Énigmes complétés :  {nbrRiddlesSuccess}/{nbrRiddles}</p>
                                                <IonProgressBar value={riddleSuccess/nbrRiddles} />
                                            </IonCardContent>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <RiddleListings />
            </IonContent>
        </IonPage >
    );
};

export default Home;
