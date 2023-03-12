<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <button type="submit">Login</button>
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
            password: ""
        };
    },
    methods: {
        login() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then(userCredential => {
                    const user = userCredential.user;
                    // Check user's role
                    firebase.auth().currentUser.getIdTokenResult().then((idTokenResult) => {
                        const role = idTokenResult.claims.role;
                        if (role === "admin") {
                            // Redirect to admin dashboard
                            this.$router.push("/admin");
                        } else {
                            // Redirect to user dashboard
                            this.$router.push("/user");
                        }
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

};
</script>
