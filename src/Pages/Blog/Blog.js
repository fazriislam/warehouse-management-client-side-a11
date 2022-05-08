import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Q1: Difference between javascript and nodejs?</h2>
            <p>Javascript is mainly used for any client side activity for the web application while Node.js is used for Server side development.</p>
            <p>JavaScript running any engine like JavaScript Core (Safari), Spider monkey (FireFox), V8 (Google Chrome). Node.js only runs in a V8 engine that is mainly used by Google Chrome.</p>
            <p>JavaScript normally follows standard of Java Programming language. On the other hand, Node.js is written in the C++, and provides V8 engine base</p>
            <p>For accessing the operating system specific to any non-blocking task JavaScript has many objects. On the other hand, Node.js is given utility to run a few operating systems.</p>

            <h2>Q2:  When should you use nodejs and when should you use mongodb?</h2>
            <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format.  MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That's why we use nodeJS.</p>

            <h2>Q3: Differences between SQL and NonSQL databases.</h2>
            <p>SQL stands for Structured Query language and NonSQL stands for Not Only SQL or Not SQL.</p>
            <p>SQL databases are table based databases whereas NoSQL databases can be document based, key-value pairs, graph databases.</p>
            <p>SQL databases are vertically scalable while NoSQL databases are horizontally scalable.</p>
            <p>SQL databases have a predefined schema whereas NoSQL databases use dynamic schema for unstructured data.</p>
            <p>SQL requires specialized database hardware for better performance while NoSQL uses commodity hardware.</p>

            <h2>Q4: What is the purpose of jwt and how does it work</h2>
            <p>JWT stands for JSON Web Token. JWT is used to create access tokens for an application.</p>
            <p>The server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity. This architecture proves to be very effective in modern Web Apps.</p>
        </div>
    );
};

export default Blog;