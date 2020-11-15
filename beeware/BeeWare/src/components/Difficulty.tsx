import { IonIcon, IonItem, IonList } from "@ionic/react"
import React from "react"

const DifficultyComponent: React.FC< { riddleDifficulty: number }> = (props) => {
    const difficultyStars: JSX.Element[] = []
    for (let i = 0; i < props.riddleDifficulty; i++) {
        difficultyStars.push(<IonItem><IonIcon name="star"></IonIcon></IonItem>)
    }
    for (let i = 0; i < 5 - props.riddleDifficulty; i++) {
        difficultyStars.push(<IonItem><IonIcon name="star-outline"></IonIcon></IonItem>)
    }
    
    return (

        <IonList>
            {difficultyStars}
        </IonList>

    )
}

export default DifficultyComponent