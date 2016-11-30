# Pokorney_Assn_5
Pokorney_Assn_5


Run these commands to create a sample MongoDb collection
```javascript
use bidding
db.createCollection('items')
db.items.insertOne({ name: "iPhone 5s", description: "Apple iPhone 5s - Verizon", startingPrice: 100, bids: [ { username: "apokorney", price: 120 } ] } )
db.items.insertOne( { name: "Nexus 6P", description: "Google Nexus 6P", startingPrice: 200, bids: [ { username: "apokorney", price: 220, } ] } )
```
