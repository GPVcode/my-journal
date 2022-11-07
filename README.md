## This is my personal journal.

I started journaling a couple years ago and I kept wanting to buy new journals that I found at stores that I thought would be better than my current journal. It was a habit that became so bad that I would replace the journal with a new journal after using only 15 of the first pages. I knew I had a problem. My first thought was to find THE journal; The journal that I'd know I'll continue to use indefinitly. Then I thought, maybe I should just code my own journal from scratch because that would surely make me want to use it over and over again. So, this is my first passion project - the project that will kick my expensive journal buying habit. I won't spend another dime on a new and improved journal because I have my own digital journal than I can improve indefinitely as I please.

### Tools

The tools I'll be using in this project are PostgreSQL, Express, React, and Node.

### Steps
First I created a server and then created a database.
1) Database: Set up database structure.
First, I create database.sql to set up commands for postgres database
    - create database
    - create table and schemas
Connect our database with our server in db.js where I configured how exactly we were going to connect to our database.

Then I exported pool from db.js to index.js and utilized pool inside my routes.

2) Server: Set up restful API
Built basic CRUD applications.
Created post, put, get all, get specific item, update, and delete methods.

3) Build client side with React:
What we'll need:'
1) part of app where we input to send in data
2) part of app where we list all of our items
3) edit button