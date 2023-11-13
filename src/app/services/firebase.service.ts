import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/user.model';
import { getFirestore, setDoc, doc, getDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);

  // ============= Autenticación ==============

  //========= Acceder =========
  signIn(user: User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

   //========= crear usuario =========
  signUp(user: User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //======== Actualizar Usuario ==========
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //======== BASE DE DATOS ==========
  
  //======== Setear un Documento ==========
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path), data);
  }

  //======== Obtener Documento ==========
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(),path))) .data();
  }
}
