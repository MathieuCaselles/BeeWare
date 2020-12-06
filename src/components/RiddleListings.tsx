import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { useContext } from 'react';
import AppContext from '../data/app-context';
import { Riddle } from '../models/Riddle';
import { RiddleComponent } from './RiddleSummary'



const RiddleListings: React.FC = () => {

    const appCtx = useContext(AppContext);

    return (
        <IonGrid>
            <IonRow>
                {appCtx.riddles.map((riddle: Riddle) =>
                    <IonCol size="6" size-md="3" sizeLg="2" key={riddle.id}>
                        <RiddleComponent riddle={riddle} />
                    </IonCol>)}
            </IonRow>
        </IonGrid>
    );
};

export default RiddleListings;