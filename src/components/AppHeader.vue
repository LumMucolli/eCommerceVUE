<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style>
header {
    background-color: #333;
    color: white;
    padding: 20px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav ul li {
    margin-right: 20px;
}

nav ul li:last-child {
    margin-right: 0;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

nav ul li a:hover {
    text-decoration: underline;
}
</style>
