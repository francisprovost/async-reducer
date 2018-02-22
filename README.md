[![Build Status](https://travis-ci.org/francisprovost/async-reducer.svg?branch=master)](https://travis-ci.org/francisprovost/async-reducer)

# redu-async
Adds the possibility to add recuder asynchronously to your #redux store

## Installation

`npm i --save async-reduxer`

## Usage

- You need to install all of your reducers with this otherwise you'll lose
- Keep your redux store so you can access the same reference wherever you need it. (i.e.: A singleton)

``` js
import addReducer from 'async-reducer';

addReducer(yourStore, 'TheReducerName', yourReducer);

```
