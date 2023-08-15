# @segment/analytics-node example project
This is a template for a "fresh" node typescript project that uses the @segment/analytics-node package.

## Setup
```
nvm use && yarn install
export WRITEKEY=<YOUR_WRITEKEY>
yarn test
```
### To install the linked version from the analytics-next repo



## Advanced: Linking locally
Clone repo
```
git clone git@github.com:segmentio/analytics-next.git ~/projects/analytics-next
```
Link the packages locally
```
yarn link ~/projects/analytics-next/packages/node
```

### To install the "npm version"
```
yarn add @segment/analytics-node@latest
```


