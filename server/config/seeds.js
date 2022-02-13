const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Cupcake ipsum dolor sit amet cheesecake halvah tootsie roll cheesecake. Chocolate cake sugar plum brownie oat cake marzipan topping liquorice powder. Pudding halvah lemon drops ice cream dessert cookie.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Canned Coffee',
      description:
        'Saucer barista dripper body frappuccino crema grounds. A cup, acerbic affogato seasonal milk whipped cortado instant percolator robust.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Toilet Paper',
      category: categories[1]._id,
      description:
        'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.',
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Handmade Soap',
      category: categories[1]._id,
      description:
        'Kale chips food truck flexitarian fixie. Green juice whatever jean shorts unicorn neutra. Mustache chillwave before they sold out gluten-free, bitters vegan live-edge freegan palo santo meh art party kombucha. Flannel taxidermy, hammock tacos edison bulb tattooed master cleanse.',
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Set of Wooden Spoons',
      category: categories[1]._id,
      description:
        'Jarlsberg ricotta fondue. Stinking bishop camembert de normandie cheese slices smelly cheese boursin melted cheese everyone loves cheese slices. Feta feta cottage cheese cheese slices cheese on toast manchego boursin st. agur blue cheese. Fromage pepper jack boursin.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        "Yes, absolutely, I do indeed concur, wholeheartedly! I suggest you drop it, Mr. Data. How long can two people talk about nothing? I'm afraid I still don't understand, sir. Wouldn't that bring about chaos? Maybe we better talk out here; the observation lounge has turned into a swamp.",
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tablet',
      category: categories[2]._id,
      description:
        'Document object model queue Kubernetes TL Agile pairing a place for everything. Contribute UI build tool chmod tree shaking SOAP. Subclass yarn websockets markup stand-up UI.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Tales at Bedtime',
      category: categories[3]._id,
      description:
        "Celebrate success right, the only way, apple. The key to more success is to have a lot of pillows. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! The key is to drink coconut, fresh coconut, trust me.",
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Spinning Top',
      category: categories[4]._id,
      description:
        'Jigsaw other mathematical which brainstorm test solution toy. Patterns puzzle toy category puzzle, toy other other solution solution. Toy logic solution problem logic, logic patterns which logic jigsaw.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis. Chuck Norris looks gift horses in the mouth. Chuck Norris doesn't wear a watch. HE decides what time it is. The Great Wall of China was originally created to keep Chuck Norris out. It failed miserably.",
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Bacon ipsum dolor amet buffalo hamburger ham hock beef ribs drumstick sausage swine andouille sirloin kielbasa jowl t-bone capicola cow. Ribeye hamburger jowl beef kielbasa, cow ground round.',
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        "Just pretend you are a whisper floating across a mountain. Maybe there's a happy little waterfall happening over here.Maybe, just to play a little, we'll put a little tree here. Let's put some happy trees and bushes back in here.",
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
