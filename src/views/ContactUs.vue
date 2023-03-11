<template>
    <div class="contact-us">
        <h1>Contact Us</h1>
        <p>Do you have any questions or comments? Please feel free to reach out to us using the form below:</p>
        <form>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" required>
            </div>
            <div>
                <label for="message">Message:</label>
                <textarea id="message" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactUs'
}
</script>

<style scoped>
.contact-us {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.contact-us h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

.contact-us p {
    font-size: 18px;
    margin-bottom: 20px;
}

.contact-us form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-us form div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.contact-us form label {
    font-size: 18px;
    font-weight: bold;
}

.contact-us form input,
.contact-us form textarea {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.contact-us form button[type="submit"] {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}</style>
