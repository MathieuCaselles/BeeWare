import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";


const ApartmentListings: React.FC = () => {
    const data = {
        1: {
            image: "https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg",
            name: "Enigm 1",
            difficulty: 3,
            time: 0,
            isSuccess: true,
        },
        2: {
            image: "http://goraguer.fr/wp/wp-content/uploads/2012/06/Appartement-marais-5.jpg",
            name: "Enigm 2",
            difficulty: 1,
            time: 0,
            isSuccess: false,
        },
        3: {
            image: "http://www.notreloft.com/images/2014/05/Renovation-appartement-haussmannien-0100.jpg",
            name: "Enigm 3",
            difficulty: 2,
            time: 0,
            isSuccess: false,
        }
    }
    const history = useHistory();
    const navigateToEnigm = () => {
        history.push({
            pathname: `/enigm`,
        });
        history.go(0)
    }
    return (
        <IonGrid>
            <IonRow>
                <IonCol size-md="3" size="6" >
                    <IonCard button={true} color={data[1].isSuccess ? 'success' : 'danger'} onClick={() => navigateToEnigm()}>
                        <IonCardHeader>
                            <IonImg src={data[1].image} />
                            <IonCardSubtitle>{data[1].name}</IonCardSubtitle>


                        </IonCardHeader>

                        <IonCardContent>
                            <IonCardSubtitle>
                                <i className={data[1].difficulty >= 1 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[1].difficulty >= 2 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[1].difficulty >= 3 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[1].difficulty >= 4 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[1].difficulty >= 5 ? 'fas fa-star' : 'far fa-star'} />
                            </IonCardSubtitle>
                            <IonCardSubtitle>{data[1].time} sec</IonCardSubtitle>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size-md="3" size="6">
                    <IonCard button={true} color={data[2].isSuccess ? 'success' : 'danger'}>
                        <IonCardHeader>
                            <IonImg src={data[2].image} />
                            <IonCardSubtitle>{data[2].name}</IonCardSubtitle>


                        </IonCardHeader>

                        <IonCardContent>
                            <IonCardSubtitle>                                <i className={data[1].difficulty >= 1 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[2].difficulty >= 2 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[2].difficulty >= 3 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[2].difficulty >= 4 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[2].difficulty >= 5 ? 'fas fa-star' : 'far fa-star'} /></IonCardSubtitle>
                            <IonCardSubtitle>{data[2].time} sec</IonCardSubtitle>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
                <IonCol size-md="3" size="6">
                    <IonCard button={true} color={data[3].isSuccess ? 'success' : 'danger'}>
                        <IonCardHeader>
                            <IonImg src={data[3].image} />
                            <IonCardSubtitle>{data[3].name}</IonCardSubtitle>


                        </IonCardHeader>

                        <IonCardContent>
                            <IonCardSubtitle>                                <i className={data[1].difficulty >= 1 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[3].difficulty >= 2 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[3].difficulty >= 3 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[3].difficulty >= 4 ? 'fas fa-star' : 'far fa-star'} />
                                <i className={data[3].difficulty >= 5 ? 'fas fa-star' : 'far fa-star'} /></IonCardSubtitle>
                            <IonCardSubtitle>{data[3].time} sec</IonCardSubtitle>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ApartmentListings;