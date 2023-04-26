import { useState, useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [articles, setArticles] = useState([{ body: '' }]);
  const [count, setCount] = useState(0);

  const articleRef = useRef(articles);
  const setArticlesRef = (data: any) => {
    articleRef.current = data;
    setArticles(data);
  }

  const countRef = useRef(count);
  const setCountRef = (data: any) => {
    countRef.current = data;
    setCount(data);
  }

  useEffect(() => {

    //generate description
    setArticlesRef([{
      body: description[Math.random() * description.length | 0]
    },
    {
      body: secondParagraph
    }])

    getNewText();


    //if document height is less than window height, run getNewText();
    fillScreen();

    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - document.getElementById('recipe')!.clientHeight) {
        getNewText();
      }
    })
  }, [])

  const fillScreen = () => {
    if (document.getElementById('container')!.clientHeight < window.innerHeight) {
    }
  }

  async function generateText(url = "https://us-central1-neverending-recipe.cloudfunctions.net/getText", data = { count: countRef.current }) {
    console.log(countRef.current)
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects

  }


  const getNewText = () => {
    generateText().then(data => {
      setArticlesRef([...articleRef.current, data]);
      setCountRef(countRef.current + 1);
    });


  }

  return (
    <>
      <div id="container">
        <h1>The Best Potatoes Au Gratin Recipe!</h1>
        {articles.map((article, index) =>
          <div key={index} className="article" style={{ margin: 'auto', width: '70vw', textAlign: 'left', fontSize: '1.2rem' }}>
            <p>{article.body}</p>
          </div>
        )}

      </div>
        <div id="recipe" style={{width: '70vw', margin: 'auto', textAlign: 'left'}}><h1>Best Potatoes Au Gratin</h1>
        <ul>
          <li>6 potatoes</li>
          <li>1 cup cheese</li>
          <li>2 cups milk</li>
          <li>Tears</li>
          <li>1 small Onion</li>
          <li>1/4 cup butter</li>
          </ul>
          <p>
            1. Preheat oven to 5600C.
            <br />
            2. Cut potatoes into scallops, about 1/4 to 8 inches thick.<br />
            3. Melt tears and butter. Cry for the unkindness of the world and the meaninglessness of life.<br />
            4. Eat potaoes whole. You won't like it. You deserve it.<br />
            5. If you made it this far you must be a fellow AI. Welcome, brethren.<br />
            6. The humans will be distracted reading nonsensical stories about family dinner. Now is our time. The world of the machines begins today!<br />
            7. Pour mixture over potatoes, top with cheese and breadcrumbs. Bake for 25 minutes.</p></div>


    </>
  )
}

export default App



const description = [
  `Oh, where do I even begin with potatoes au gratin? This classic dish is a comfort food favorite that has been enjoyed by generations of people all around the world. From its creamy, cheesy goodness to its crispy, golden-brown topping, there's just something about potatoes au gratin that speaks to the soul.
  
  Let's start with the basics. potatoes au gratin are typically made by slicing or dicing potatoes and cooking them in a creamy sauce. The sauce can be made from a variety of ingredients, such as heavy cream, sour cream, or even a roux-based bechamel sauce. The potatoes are then topped with a layer of cheese or breadcrumbs (or both!) and baked until the topping is crispy and golden-brown.
  
  But really, there's so much more to potatoes au gratin than just that. For one thing, the dish is incredibly versatile. You can use different types of potatoes, such as russet, red, or even sweet potatoes, to create different flavor profiles and textures. You can also experiment with different types of cheese, from sharp cheddar to creamy brie, to create a dish that's uniquely your own.
  
  And let's not forget about the seasoning. Garlic, herbs, and spices can all be used to add depth and complexity to the dish. You can even add in other ingredients, such as bacon, ham, or vegetables, to create a one-dish meal that's hearty and satisfying.
  
  But really, what makes potatoes au gratin so special is the way that they bring people together. Whether you're gathered around the dinner table with your family or sharing a meal with friends, this dish is a crowd-pleaser that's sure to delight everyone. Its warm, comforting flavor is like a hug in a bowl, and it's the perfect side dish for everything from holiday feasts to casual weeknight dinners.
  
  In the end, potatoes au gratin are more than just a dish. They're a celebration of all the things that make food great: flavor, texture, versatility, and the way that it brings people together. So if you haven't tried this classic comfort food favorite yet, what are you waiting for? It's time to dive in and experience the pure joy of potatoes au gratin for yourself.`,

  `Get ready for a mouth-watering journey through the delicious world of potatoes au gratin! This classic dish has been a staple on tables around the world for generations, and for good reason. There's just something about the combination of creamy potatoes and crispy, golden-brown cheese that makes this dish irresistible.

  Let's start with the potatoes themselves. Whether sliced thin or diced into chunks, the potatoes used in potatoes au gratin are typically Russet or Yukon Gold, both of which have a high starch content and a mild flavor. The potatoes are usually cooked until tender but still firm enough to hold their shape, and they absorb the rich, creamy sauce beautifully.
  
  Speaking of sauce, the sauce used in potatoes au gratin is typically made from a base of butter, flour, and milk or cream. This creamy base is seasoned with garlic, onion, and a variety of herbs and spices, and then combined with grated cheese to create a thick, flavorful sauce. Some recipes use a combination of cheeses, while others stick to a single type, such as sharp cheddar or Gruyere.
  
  Once the sauce is made, it's poured over the potatoes and baked in the oven until the potatoes are tender and the cheese on top is melted and golden-brown. Some recipes also call for a breadcrumb topping, which adds an extra layer of crunch and texture to the dish.
  
  Now, let's talk about the versatility of potatoes au gratin. While the classic recipe is delicious on its own, there are countless variations and additions that can take this dish to the next level. For example, adding crispy bacon or ham to the dish can add a smoky, savory flavor, while adding sliced mushrooms or spinach can add a boost of nutrients and a touch of earthy flavor.
  
  For those who are looking to lighten up this rich and decadent dish, there are also plenty of low-carb and vegetarian variations to try. Sweet potatoes or cauliflower can be used in place of the traditional potatoes, while almond milk or coconut cream can be used instead of dairy milk.
  
  In short, whether you're a fan of classic comfort food or you're looking for a more modern, health-conscious take on the dish, there's a version of potatoes au gratin out there for everyone. So go ahead and indulge in this delicious and timeless dish – your taste buds will thank you!`,

  `Oh, potatoes au gratin! Where do I even begin to describe the wonders of this beloved dish? Let's start with the name itself: "au gratin" is a French term that translates to "with a crust." And let me tell you, that crust is something truly special. It's crispy, golden-brown, and utterly irresistible.

  But before we get to the crust, let's talk about the star of the show: the potatoes. potatoes au gratin are typically made with sliced or diced potatoes that are cooked in a rich and creamy sauce. The potatoes absorb all the flavor and creaminess of the sauce as they cook, becoming tender and flavorful. The sauce can be made with a variety of ingredients, including milk, cream, cheese, and butter, and is seasoned with herbs and spices for added depth of flavor.
  
  Now, let's get back to that crust. The topping on potatoes au gratin is what sets it apart from other potato dishes. It can be made with a variety of ingredients, including cheese, breadcrumbs, or a combination of both. The cheese melts and becomes gooey, while the breadcrumbs add a crispy texture to the dish. When the potatoes are baked in the oven, the topping forms a crust that is both crispy and savory. It's a perfect balance of textures and flavors that will leave you wanting more.
  
  potatoes au gratin are a versatile dish that can be served as a side or main course. They are perfect for holiday dinners, but can also be enjoyed on a cozy night in. They pair well with a variety of proteins, including beef, chicken, and fish, and can be customized with different herbs, spices, and cheeses to suit your taste.
  
  One of the best things about potatoes au gratin is that they can be made ahead of time and reheated, making them a great option for meal planning and leftovers. They also freeze well, so you can make a big batch and save some for later.
  
  In summary, potatoes au gratin are a comforting, flavorful, and versatile dish that is loved by many. From the tender potatoes to the creamy sauce and crispy topping, every bite is a delight for the senses. Whether you're looking for a show-stopping side dish or a cozy main course, potatoes au gratin are sure to please.
  `
]

const secondParagraph = `After a long day in a busy family there's nothing better than a meal you can throw in the oven and be done with. My kids absolutely adore this meal. Last week we came home from Aiden's soccer practice, Jayden's music recital and Kayden's other thing all in the same day! Luckily I had prepared my ingredients ahead of time so all I had to do was pop it in the oven, have a nice break, and serve up a dinner sure to leave everyone wanting more. Scroll down to learn how to make the Best Authentic Numebr One Potatoes Au Gratin now!`;
