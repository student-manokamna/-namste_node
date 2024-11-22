
 
 // goto mongo db website
 // create a free m0 cluster and then deploy it 
 //create a user and password : as user is here namstedev and pasword uske aage likha hua hh
//  get the connection string which look like as  which i put in url 
// now we get this url ;
// then  now install mongodb compass 

//  const URL = "mongodb+srv://namastedev:87O3R4lgr9TEURAN@namastenode.9ucx0.mongodb.net/"


// this above is not a good method, so we write our code in vs and then insert it 
// so we write code here 

// const {MongoClient} =require("mongodb");
// const URL = "mongodb+srv://namastedev:87O3R4lgr9TEURAN@namastenode.9ucx0.mongodb.net/"

// // now create a new client : so basically we r creating a new object from this mongoclient and pass a url in it

// const client = new MongoClient(URL);

// // now create ourt database name 
// const dbName = 'HelloWord'

// async function main(){
//     // use connect method to connect to the server
// await client.connect();  // means url ko connect krege client k sath 
// console.log("connect successfully to server");
// const db = client.db(dbName);
// const collection = db.collection('User');

// // the following code eg is pasted here ..........
// return 'done.';
// }
// main()
// .then(console.log)    // we make promise 
// .catch(console.error)
// .finally(()=>client.close());
// so finally connection is close 

// till now nthg is happening bcz we r onyl connection with database and then closing it so now kuch dekhna hh tou // the following code eg is pasted here .......... eske baad kuch likho na 

// so now i am creating same uper vala again and want to read data

const {MongoClient} = require("mongodb");
const URL = "mongodb+srv://namastedev:87O3R4lgr9TEURAN@namastenode.9ucx0.mongodb.net/"
const client = new MongoClient(URL);

const dbName = "HelloWord";
async function main(){
    await client.connect();
    console.log("connect successfully to server");
    const db = client.db(dbName);
    const collection = db.collection('User');
    // to read it : see visit documentation for more clearty

      // to read documentation
      const findResult = await collection.find({}).toArray();
      console.log("find documents => ", findResult);
      // see collection . find kiya means lo document ko find kro or find k ander {} this tell ki empty obj hh jiska mtlb hh ki jitne bhi document hh sabh read kro and finally es document ko arr m converrt kr do
      // or actually this document is on a database which is deploy on aws server which is managed by mangodb, and we r just using this usernamr and password(from url) for to connect to that database and find or get a document 


      // now lets create or insert a data : it means ki money name se tou ek data muje ek or chaie kisi or ka , **your firstanem, lastname,... vagara same hone chaie jo pjle data k the vrna it give error

const data = {
    firstname: "manak",
    lastname: "watts",
    city: "delhi",
    phoneNumber: "4567890323"
}
const ones = {
    firstname: "mira",
    lastname: "rani",
    city: "ranchi",
    phoneNumber: "2345234567"
}
const insertResult = await collection.insertMany([data])  // esme collection. insertmany hi hota hh
console.log("insert document => ", insertResult);
// this created a object id 
// also see on mongodb cluster helloword you see that vaha ye manak vala bhi add ho jayega do refreshing 

// now lets count the documnet

const count = await collection.countDocuments({});
console.log("count documents  in user collection", count);

// find all document  with a filter firstname as deepika 
const result = await collection.find({firstname: "manak"}).toArray();
console.log("result get is => ", result);

// when we r inserting one document 
const res = await collection.insertOne(ones);
console.log("insert one in document => ", res);

    // Update a document based on a filter
    const filter ={firstname:"manak"}; // Specify the condition to find the document
    const updatedoc = {
        $set: {
            lastname: "singh", // New value for lastname
            city: "new delhi"  // New value for city
        }
    };
    const updateResult = await collection.updateOne(filter,updatedoc);
    console.log(`updated document is => ${updateResult.modifiedCount}`);

    // To verify the update, fetch the updated document
    const updatedDocument = await collection.findOne(filter);
    console.log("Updated document => ", updatedDocument);

    // update many baad m smjlena and remove a document bhi 

    




    return "done.";

}
main()
 .then(console.log)   
 .catch(console.error)
 .finally(()=>client.close());

// scroll down:







 // explaining filter and all 


// What is the Filter?
// In the context of your MongoDB update operation, the filter is like a search criteria that tells MongoDB which document(s) you want to update.
// Purpose of Filter: The filter defines which documents to find. It doesn’t change the firstname value; it just identifies the documents to update.
// Matching Document: Only the document(s) that match the filter will be updated.
// What Happens if No Match: If there are no documents with firstname as "manak", then no updates will occur.
// Summary
// In simple terms, the filter is like asking a specific question: "Which document has the first name manak?" The update operation is saying, "If you find that document, change its last name and city."




