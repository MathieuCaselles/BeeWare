import { IonCard, IonCardHeader, IonImg, IonCardSubtitle, IonCardContent } from "@ionic/react"
import React from "react"
import { Riddle } from "../models/Riddle"
import DifficultyComponent from "./Difficulty"


const RiddleComponent: React.FC<{ riddle: Riddle }> = (props) => {


    return (
        <IonCard button={true} color={props.riddle.isSuccess ? 'primary' : 'secondary'} routerLink={`riddle/${props.riddle.id}`}>
            <IonCardHeader>
                <IonImg src={props.riddle.image} />
                <IonCardSubtitle>{props.riddle.name}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <IonCardSubtitle>
                    <DifficultyComponent riddleDifficulty={props.riddle.difficulty} />
                </IonCardSubtitle>
                <IonCardSubtitle>{props.riddle.timeSec} sec</IonCardSubtitle>
            </IonCardContent>
        </IonCard>
    )

}

export { RiddleComponent }