import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseconfig";
import { getDatabase, onValue, ref, set } from "firebase/database";


const database = getDatabase(app)
const auth = getAuth(app);


const saveData = (nodeName, userObj, uid) => {
    userObj.id = uid;
    return set(ref(database, `${nodeName}/${uid}`), userObj);
}

const getData = (nodeName, uid) => {
    const starCountRef = ref(database, `${nodeName}/${uid}`);
    return new Promise((resolve, reject) => {
     onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        resolve(data)
    });
})
}

const SignUp = (userObj) => {
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                saveData("users", userObj, user.uid).then(() => {

                    resolve("User created successfully");
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                reject(errorMessage)
            });
    })

}


const logIn = (userObj) => {
   
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, userObj.email, userObj.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    getData("users", user.uid).then((res) => {
                        resolve(res)                      
                    }).catch((err) => {
                        console.log(err)
                        reject(err)
                    })
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    reject(errorMessage)
                });
        })
    
}


export { SignUp, saveData, getData, logIn }