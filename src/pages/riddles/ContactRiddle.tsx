import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { Contact, ContactFindOptions, Contacts } from '@ionic-native/contacts';
import { ContactName, ContactField } from '@ionic-native/contacts';
import { AndroidPermissions } from '@ionic-native/android-permissions';


const ContactRiddle: React.FC = () => {
    
    const saveContact = async () => {
      let contacts = new Contacts() 
      let contact = contacts.create()
      

      contact.name = new ContactName(undefined, "Caselles", "Mathieu")
      contact.phoneNumbers = [new ContactField("mobile", "8647291483")]
      try {
        await contacts.find(["*"], undefined,)
      } catch (error) {
        console.log(error)
      }
      await contact.save().then(
          () => console.log('Contact saved'),
          (error: Error) => console.log(error.message)
      )
    }

  return (
      <IonContent fullscreen>
        <IonButton onClick={saveContact}>Start riddle</IonButton>
      </IonContent>
  );
};

export default ContactRiddle;
