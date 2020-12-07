import {
    IonButton,
    IonCard,
    IonCardHeader,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonTitle,
  } from '@ionic/react';
  import React, { useContext, useState } from 'react';
  import AppContext from '../../data/app-context';
  import { Riddle } from '../../models/Riddle';
  import { checkCode } from '../../utils/utils';
  import { useHistory } from "react-router-dom";
import { flameOutline, logoAmazon, logoApple, logoDiscord, logoDocker, logoFacebook, logoFirebase, logoGithub, logoMastodon, logoNpm, logoPython, logoReact, logoSteam, logoTwitch, logoVue, logoWhatsapp, logoWordpress, logoXbox, logoYoutube } from 'ionicons/icons';
  
  
  const Alphabet: React.FC<{ riddle: Riddle }> = (props) => {
    const appCtx = useContext(AppContext);
    const history = useHistory();
    const [timeStart] = useState(new Date())
    const [inputCode, setInputCode] = useState('');
  
    const successfulRiddle = () => {
      if (!props.riddle || !checkCode('bnjk,;cv&éazdfghtylmqswxoperui', inputCode)) return;
      let updateRiddle = { ...props.riddle };
      updateRiddle.isSuccess = true;
      updateRiddle.timeSec = (new Date().getTime() - timeStart.getTime()) / 1000;
      appCtx.updateRiddle(updateRiddle);
      history.replace("/")
    };

    const iconSize = {
      fontSize: '64px'
    }

    const addElementInValue = (str: String) => {
      setInputCode(inputCode + str)
    }
  
    return (
      <IonContent>
        <IonCard>
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonCardHeader>
                  <IonTitle>{props.riddle!.name}</IonTitle>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonIcon onClick={() => addElementInValue(',;')} style={iconSize} icon={logoDiscord}></IonIcon>
                <IonIcon onClick={() => addElementInValue('df')} style= {iconSize} icon={logoGithub}></IonIcon>
                <IonIcon onClick={() => addElementInValue('&é')} style= {iconSize} icon={logoFacebook}></IonIcon>
                <IonIcon onClick={() => addElementInValue('bn')} style= {iconSize} icon={logoAmazon}></IonIcon>
                <IonIcon onClick={() => addElementInValue('cv')} style= {iconSize} icon={logoDocker}></IonIcon>
                <IonIcon onClick={() => addElementInValue('wx')} style= {iconSize} icon={logoTwitch}></IonIcon>
                <IonIcon onClick={() => addElementInValue('lm')} style= {iconSize} icon={logoReact}></IonIcon>
                <IonIcon onClick={() => addElementInValue('gh')} style= {iconSize} icon={logoNpm}></IonIcon>
                <IonIcon onClick={() => addElementInValue('qs')} style= {iconSize} icon={logoSteam}></IonIcon>
                <IonIcon onClick={() => addElementInValue('op')} style= {iconSize} icon={logoWhatsapp}></IonIcon>
                <IonIcon onClick={() => addElementInValue('ui')} style= {iconSize} icon={logoYoutube}></IonIcon>
                <IonIcon onClick={() => addElementInValue('ty')} style= {iconSize} icon={logoPython}></IonIcon>
                <IonIcon onClick={() => addElementInValue('jk')} style= {iconSize} icon={logoApple}></IonIcon>
                <IonIcon onClick={() => addElementInValue('er')} style= {iconSize} icon={logoXbox}></IonIcon>
                <IonIcon onClick={() => addElementInValue('az')} style= {iconSize} icon={logoFirebase}></IonIcon>

              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol>
                <IonList>
                  <IonItem>
                    <IonInput
                      className="ion-text-center"
                      value={inputCode}
                      disabled
                    ></IonInput>
                    <IonButton color="primary" onClick={successfulRiddle}>
                      Valider
                    </IonButton>
                    <IonButton color="primary" onClick={() => setInputCode('')}>
                      Clear
                    </IonButton>
                  </IonItem>
                </IonList>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    );
  };
  
  export default Alphabet;
  