import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import AppContext from '../data/app-context';
import { Riddle } from '../models/Riddle';
import { RiddleComponent } from './Riddle'



const RiddleListings: React.FC = () => {

    const appCtx = useContext(AppContext);

    const history = useHistory();
    const navigateToRiddle = () => {
        history.push({
            pathname: `/riddle`,
        });
        history.go(0)
    }


    return (
        <IonGrid>
            <IonRow>
                {appCtx.riddles.map((riddle: Riddle) =>
                    <IonCol size="6" size-md="3" sizeLg="2">
                        <RiddleComponent item={riddle} navigateToItem={navigateToRiddle} />
                    </IonCol>)}
            </IonRow>
        </IonGrid>
    );
};

export default RiddleListings;