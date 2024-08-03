import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3010;
const thingJson = '[{"id":"1","p_name": "Apple","price":  14.00 },{"id":"2","p_name": "Banana","price": 12.00},{"id":"3","p_name": "Orange","price": 18.00},{"id":"4","p_name": "Avocado","price": 49.00 },{"id":"5","p_name": "Pineapple","price": 27.00 },{"id":"6","p_name": "Mango","price": 24.00 },{"id":"7","p_name": "Potatoes","price": 38.00 },{"id":"8","p_name": "Brocolli","price": 44.00 },{"id":"9","p_name": "Carrot","price": 22.00},{"id":"10","p_name": "Noise Pulse 4 Max Smart Watch","price": 3999},{"id":"2","p_name": "Canon MAXIFY MegaTank Printer","price": 2000 },{"id":"3","p_name": "Canon EOS R10 Camera","price": 96000 },{"id":"4","p_name": "Eureka Forbes Vogue Super Silent Vacuum cleaner","price": 9000 },{"id":"5","p_name": "Borosil Health Pro Cold Press Slow Juicer","price": 12000 },{"id":"6","p_name": "iPad (10th generation)","price": 44900 },{"id":"7","p_name": "M3 MacbookAir","price": 114900 },{"id":"8","p_name": "Impex Electric Steam Iron Box with Water Spray Function","price": 1299 },{"id":"9","p_name": "Iphone 13","price": 69900},{"id":"10","p_name": "Indigo Cotton Printed Shirt","price": 599.00},{"id":"2","p_name": "Black Cotton Kalamkari Maxi Skirt","price": 999.00},{"id":"3","p_name": "Indigo Cotton Dabu Printed Regular Shirt","price": 899.00 },{"id":"4","p_name": "Orange Cotton Dabu Printed Shirt","price": 799.00 },{"id":"5","p_name": "Grey Cotton Printed Kurta Short","price": 450.00 },{"id":"6","p_name": "Aqua Cotton Printed Kurta Short","price": 450.00 },{"id":"7","p_name": "Pink Cotton Silk Embroidered Ijar & Kurta Set","price": 799.00 },{"id":"8","p_name": "Navy Cotton Slim Fit Pants","price": 799.00 },{"id":"9","p_name": "FabNu Black Cotton Linen Skirt","price": 999.00}]';


const arr = [];

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "user",
    password: "12345678",
    port: 5432,
});

const db1 = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'user',
    password: '12345678',
    port: 5432,
});

const db2 = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'user',
    password: '12345678',
    port: 5432,
});

db.connect();
db1.connect();
db2.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

let data;

app.get("/groceries", (req, res) => {
    res.render("groceries.ejs");
});

app.get("/clothing", (req, res) => {
    res.render("clothing.ejs");
});

app.get("/electronics", (req, res) => {
    res.render("electronics.ejs");
});

app.get("/cart", (req, res) => {
    res.render("cart.ejs",{item: arr});
});

app.get("/check", (req, res) => {
    res.render("check.ejs");
});

app.post("/add", (req, res) => {
    
    switch(req.body.choice) {
        case "Apple":
            data = JSON.parse(thingJson)[0];
            arr.push(data);
            break;
             
        case "Banana":
            data = JSON.parse(thingJson)[1]; 
            arr.push(data);
            break;
        case "Orange":
            data = JSON.parse(thingJson)[2];
            arr.push(data);
            break;
        case "Avocado":
            data = JSON.parse(thingJson)[3];
            arr.push(data);
            break;
        case "Pineapple":
            data = JSON.parse(thingJson)[4];
            arr.push(data);
            break;
        case "Mango":
            data = JSON.parse(thingJson)[5];
            arr.push(data);
            break; 
        case "Potatoes":
            data = JSON.parse(thingJson)[6];
            arr.push(data);
            break;
        case "Brocolli":
            data = JSON.parse(thingJson)[7];
            arr.push(data);
            break;
        case "Carrot":
            data = JSON.parse(thingJson)[8];
            arr.push(data);
            break;
        case "Noise Pulse 4 Max Smart Watch":
            data = JSON.parse(thingJson)[9];
            arr.push(data);
            break;
                 
        case "Canon MAXIFY MegaTank Printer":
            data = JSON.parse(thingJson)[10]; 
            arr.push(data);
            break;

        case "Canon EOS R10 Camera":
            data = JSON.parse(thingJson)[11];
            arr.push(data);
            break;

        case "Eureka Forbes Vogue Super Silent Vacuum cleaner":
            data = JSON.parse(thingJson)[12];
            arr.push(data);
            break;

        case "Borosil Health Pro Cold Press Slow Juicer":
            data = JSON.parse(thingJson)[13];
            arr.push(data);
            break;

        case "iPad (10th generation)":
            data = JSON.parse(thingJson)[14];
            arr.push(data);
            break;

        case "M3 MacbookAir":
            data = JSON.parse(thingJson)[15];
            arr.push(data);
            break;

        case "Impex Electric Steam Iron Box with Water Spray Function":
            data = JSON.parse(thingJson)[16];
            arr.push(data);
            break;

        case "Iphone 13":
            data = JSON.parse(thingJson)[17];
            arr.push(data);
            break;

        case "Indigo Cotton Printed Shirt":
            data = JSON.parse(thingJson)[18];
            arr.push(data);
            break;
                     
        case "Black Cotton Kalamkari Maxi Skirt":
            data = JSON.parse(thingJson)[19]; 
            arr.push(data);
            break;

        case "Brown Cotton Comfort Fit Drawstring Pants":
            data = JSON.parse(thingJson)[20];
            arr.push(data);
            break;

        case "Orange Cotton Dabu Printed Shirt":
            data = JSON.parse(thingJson)[21];
            arr.push(data);
            break;

        case "Grey Cotton Printed Kurta Short":
            data = JSON.parse(thingJson)[22];
            arr.push(data);
            break;

        case "Aqua Cotton Printed Kurta Short":
            data = JSON.parse(thingJson)[23];
            arr.push(data);
            break; 

        case "Pink Cotton Silk Embroidered Ijar & Kurta Set":
            data = JSON.parse(thingJson)[24];
            arr.push(data);
            break;

        case "Navy Cotton Slim Fit Pants":
            data = JSON.parse(thingJson)[25];
            arr.push(data);
            break;

        case "FabNu Black Cotton Linen Skirt":
            data = JSON.parse(thingJson)[26];
            arr.push(data);
            break;       

        default:
            break;     
    }
    
});


app.post("/review", async(req, res) => {
    const { email, fullname, address } = req.body;
    try {
      const text = 'INSERT INTO customer(email, fullname, address) VALUES($1, $2, $3) RETURNING *';
      const values = [email, fullname, address];
      const result = await db1.query(text, values);
      let customerResult = await db1.query('SELECT c_id FROM customer WHERE email = $1', [email]);
      c_id = customerResult.rows[0].c_id;
      console.log(result.rows[0]); 
      res.render("review.ejs", {item: arr});
    } catch (err) {
      console.error(err);
      res.send('Error inserting data');
    }
});

app.post("/final", async (req, res) => {
    try {
        
        for (const item of arr) {
            const text = 'INSERT INTO order_items (c_id, p_name, price) VALUES ($1, $2, $3) RETURNING *';
            const values = [c_id, item.p_name, item.price];
            const result = await db2.query(text, values);
            
            console.log(result.rows[0]);
        }
        
        res.render("final.ejs");
    } catch (err) {
        
        console.error('Error inserting data into database', err);
        res.status(500).send('Internal Server Error');
    }
});



app.post("/remove", (req, res) => {
    console.log(arr);
  
    const index = arr.findIndex(product => product.id == req.body.choice1);
    
    if (index === -1) {
      console.log('Product not found');
    } else {
      arr.splice(index, 1); 
      res.redirect("/cart"); 
    }
  });



app.listen(port, () => {
    console.log(`server is listening ${port} `);
});