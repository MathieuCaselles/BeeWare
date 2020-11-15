import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";
import { riddles } from '../data/Riddles';
import { RiddleComponent } from './Riddle'



const RiddleListings: React.FC = () => {

    const data = riddles
    
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
                <IonCol size-md="3" size="6">
                    { data.map((riddle) => <RiddleComponent item={riddle} navigateToItem={navigateToRiddle}></RiddleComponent> ) }
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default RiddleListings;