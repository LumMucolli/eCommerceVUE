<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="role">Role:</label>
                <select id="role" v-model="role">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import firebase from "../firebaseConfig";

export default {
    data() {
        return {
            email: "",
            password: "",
            role: "user"
        };
    },
    methods: {
        register() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                    const user = userCredential.user;
                    // Add role to user's custom claims
                    firebase.auth().currentUser.getIdToken(true).then((idToken) => {
                        const payload = {
                            role: this.role
                        };
                        firebase.auth().signInWithCustomToken(idToken).then(() => {
                            firebase.auth().currentUser.customClaims = payload;
                            firebase.auth().currentUser.getIdToken(true);
                        });
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

};
</script>
