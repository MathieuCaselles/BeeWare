import { IonBackButton, IonButton, IonButtons, IonCard, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AppContext from '../../data/app-context';
import { checkCode } from '../../utils/utils'
import { Plugins } from '@capacitor/core';
import { Riddle } from '../../models/Riddle';
import { copyOutline, printOutline } from 'ionicons/icons';

const Clipboard: React.FC<{ riddle: Riddle }> = (props) => {
    const appCtx = useContext(AppContext)

    const id = useParams<{ id: string }>().id;
    const riddle = appCtx.riddles.find(riddle => riddle.id === id)

    const [inputCode, setInputCode] = useState('')
    const [timeStart, setTimeStart] = useState(new Date())

    const history = useHistory();
    const navigateToHome = () => {
        history.push({
            pathname: `/home`,
        });
        history.go(0)
    }

    const successfulRiddle = () => {
        if (!riddle || !checkCode('TheCakeIsALie', inputCode)) return
        let updateRiddle = { ...riddle }
        updateRiddle.isSuccess = true;
        updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
        appCtx.updateRiddle(updateRiddle);
        navigateToHome()
    }

    const { Clipboard } = Plugins;

    const addClipboardText = async () => {
        try {
            Clipboard.write({
                string: "TheCakeIsALie"
            });
        } catch (error) {
            console.log(error)
        }
    }

    const iconStyle = {
        'fontSize': '128px'
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
                                        <IonTitle>{riddle!.name}</IonTitle>
                                    </IonCardHeader>
                                </IonCol>
                            </IonRow>
                                <IonCol>
                                    <IonIcon style={iconStyle} icon={copyOutline}></IonIcon>
                                </IonCol>
                                <IonCol offset="7">
                                    <IonIcon style={iconStyle} icon={printOutline}></IonIcon>
                                </IonCol>
                            <IonRow className="ion-justify-content-center">
                                <IonCol>
                                    <IonList>
                                        <IonItem>
                                            <IonInput onClick={addClipboardText} className="ion-text-center" onIonChange={event => setInputCode(event.detail.value || '')}></IonInput>
                                            <IonButton color="primary" onClick={successfulRiddle}>Valider</IonButton>
                                        </IonItem>
                                    </IonList>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
    );
};

export default Clipboard;
