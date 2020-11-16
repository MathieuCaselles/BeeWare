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
                {data.map((riddle) =>
                    <IonCol size="6" size-md="3" sizeLg="2">
                        <RiddleComponent item={riddle} navigateToItem={navigateToRiddle} />
                    </IonCol>)}
            </IonRow>
        </IonGrid>
    );
};

export default RiddleListings;