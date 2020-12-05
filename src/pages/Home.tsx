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
    const navigateToUser = () => {
        history.push({
            pathname: `/user`,
        });
        history.go(0)
    }
    const appCtx = useContext(AppContext);
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
<<<<<<< HEAD
        timeRiddle += riddle.timeSec
    })

=======
        if(riddle.isSuccess){
            riddleSuccess += 1
        }
        timeRiddle += riddle.timeSec 
    })

    
>>>>>>> 104f9b7... rebase develop
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
                                    <IonImg src={profileBase64 ? profileBase64 : 'https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png'} />
                                </IonCardHeader>
                            </IonCol>
                            <IonCol>
                                <IonCardContent>
                                    <p>Temps total passé sur les épreuves: {timeRiddle} seconds</p>
                                    <p>Énigmes complétés :  {riddleSuccess}/{appCtx.riddles.length}</p>
                                    <IonProgressBar value={riddleSuccess/appCtx.riddles.length} />
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
