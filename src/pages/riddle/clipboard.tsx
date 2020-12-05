import { IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../../data/app-context';
import { checkCode } from '../../utils/utils'
import { Plugins } from '@capacitor/core';

const Home: React.FC = () => {
    const appCtx = useContext(AppContext)

    const id = useParams<{ id: string }>().id;
    const riddle = appCtx.riddles.find(riddle => riddle.id === id)

    const [inputCode, setInputCode] = useState('')
    const [timeStart, setTimeStart] = useState(new Date())

    const successfulRiddle = () => {
        if (!riddle || !checkCode('TheCakeIsALie', inputCode)) return
        let updateRiddle = { ...riddle }
        updateRiddle.isSuccess = true;
        updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
        appCtx.updateRiddle(updateRiddle);
    }

    const { Clipboard } = Plugins;

    let test = async () => {
        Clipboard.write({
            string: "Hello, Moto"
        });
        let result = await Clipboard.read();
        console.log('Got', result.type, 'from clipboard:', result.value);
        alert('niquetoi')
    }
    

    return (
        <IonPage>
            <IonHeader collapse="condense">
                <IonToolbar color={'primary'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="" text="Back" />
                    </IonButtons>
                    <IonTitle>Beeware</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonGrid>
                        <IonRow className="ion-justify-content-center">
                            <IonCol>
                                <IonCardHeader>
                                    <IonTitle>{riddle!.name}</IonTitle>
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-justify-content-center">
                            <IonCol>
                                <IonCardHeader>
                                    <IonImg src={riddle!.image} />
                                </IonCardHeader>
                            </IonCol>
                        </IonRow>
                        <IonRow className="ion-justify-content-center">
                            <IonCol>
                                <IonList>
                                    <IonItem>
                                        <IonInput className="ion-text-center" onIonChange={event => setInputCode(event.detail.value || '')}></IonInput>
                                        <IonButton color="primary" onClick={successfulRiddle}>Valider</IonButton>
                                    </IonItem>
                                </IonList>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            </IonContent>
        </IonPage >
    );
};

export default Home;
