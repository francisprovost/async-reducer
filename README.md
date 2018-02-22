# async-reducer
Adds the possibility to add recuder asynchronously to your #redux store

## Installation

`npm i --save async-reduxer`

## Usage

- You need to install all of your reducers with this otherwise you'll lose
- Keep your redux store so you can access the same reference wherever you need it. (i.e.: A singleton)

``` js
import addReducer from 'async-reducer';

asyncReducer(yourStore, 'TheReducerName', yourReducer);

```
