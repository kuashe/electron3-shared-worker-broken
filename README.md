# Electron 3 Shared Worker Regression

## Steps to reproduce regression

**Working version in latest 2.X (Electron 2.0.6)**

```sh
$ git clone https://github.com/kuashe/electron3-shared-worker-broken

$ npm install

$ npm start
```
Select the 'Console' tab in the Chrome DevTools

The Shared Worker variable named 'increment' is incremented alternatively across windows, thus the worker being shared. 


**Regression in current 3.X  (Electron 3.0.0-beta.4)**

```sh
$ npm install electron@beta

$ npm start
```
Select the 'Console' tab in the Chrome DevTools

The Shared Worker variable named 'increment' is duplicated across windows, thus the worker not being shared.