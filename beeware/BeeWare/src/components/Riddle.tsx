import { IonCard, IonCardHeader, IonImg, IonCardSubtitle, IonCardContent } from "@ionic/react"
import React from "react"
import {Riddle} from "../models/Riddle"
import DifficultyComponent from "./Difficulty"


const RiddleComponent: React.FC<{ item: Riddle, navigateToItem: () => void }> = (props) => {


    return (    
    <IonCard button={true} color={props.item.isSuccess ? 'success' : 'danger'} onClick={() => props.navigateToItem()}>
        <IonCardHeader>
            <IonImg src={props.item.image} />
            <IonCardSubtitle>{props.item.name}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
            <IonCardSubtitle>
                <DifficultyComponent riddleDifficulty={props.item.difficulty}></DifficultyComponent>
            </IonCardSubtitle>
            <IonCardSubtitle>{props.item.time} sec</IonCardSubtitle>
        </IonCardContent>
    </IonCard>
)

}

export { RiddleComponent }