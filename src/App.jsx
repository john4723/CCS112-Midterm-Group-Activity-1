import React, { useState } from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
}from 'react-router-dom';

import Home from './pages/Home';
import MyCart from './pages/MyCart';

import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails';

import FurinaSpecialty from './assets/Item_22.webp';
import NaviaSpecialty from "./assets/Item_21.webp";
import ChioriSpecialty from "./assets/Item_Fashion_Show.webp";
import FischlSpecialty from "./assets/Item_Die_Heilige_Sinfonie.webp";
import HuTaoSpecialty from "./assets/Item_Ghostly_March.webp";
import GanyuSpecialty from "./assets/Item_Prosperous_Peace.webp";
import LynetteSpecialty from "./assets/Item_A_Leisurely_Sip.webp";
import YaeSpecialty from "./assets/Item_Fukuuchi_Udon.webp";
import YunjinSpecialty from "./assets/Item_Cloud-Shrouded_Jade.webp";
import XianyunSpecialty from "./assets/Item_Encompassing_Gladness.webp";
import NilouSpecialty from "./assets/Item_Swirling_Steps.webp";
import NahidaSpecialty from "./assets/Item_Halvamazd.webp";

const itemArr = [
	{
		id: 1, 
		itemName: "Pour la Justice", 
		src: FurinaSpecialty, 
		price: 500, 
		effect: "Increases all party members' Max HP by 30% for 300s.",
		description: `Furina's specialty. "Pour la Justice" means "veneration of justice" in Fontaine, and she who once performed on the greatest of stages bore witness to the birth of sublime justice. Its layered flavors seem to swell and fade like the waves of the sea, before finally relaxing as though laying down a heavy burden. Perhaps it reflects something she personally experienced?`,
	},
	{
		id: 2, 
		itemName: "Pick what you like!", 
		src: NaviaSpecialty, 
		price: 500, 
		effect: "Decreases all party members' climbing and sprinting Stamina consumption by 25% for 1500s.",
		description: `Navia's specialty. "Come on, pick the one you like!" Along with the familiar cries of joy, you see before your eyes the aesthetically pleasing double-layered dessert stand and the neat rows of macarons with different expressions painted onto them. One thought suddenly fascinates you... What expression would Navia make if you were to give in to greed and steal all of them for yourself?`,
	},
	{
		id: 3, 
		itemName: "Fashion Show", 
		src: ChioriSpecialty, 
		price: 500, 
		effect: "Restores 34% of Max HP to the selected character and regenerates 980 HP every 5s for 30s.",
		description: `Chiori's specialty. At the ministrations of her nimble fingers, even the common taiyaki is transformed, garbed in glorious fillings that serenade the senses, regaling your taste buds and eyes with such a grand feast that it threatens to overwhelm them. It would be no overstatement to call this a masterpiece of culinary artistry.`,
	},
	{
		id: 4, 
		itemName: "Die Heilige Sinfonie", 
		src: FischlSpecialty, 
		price: 500, 
		effect: "Increases all party members' Physical DMG by 55% for 300s.",
		description: `Fischl's specialty. The exquisite presentation doth seem to communicate some incomprehensible enigma. When partaking, if one were to gaze upon Fischl, one might see her expectant gaze peek though the gaps of her fingers, which she is using to cover half her face... Is this also part of the mystery?`,
	},
	{
		id: 5, 
		itemName: "Ghostly March", 
		src: HuTaoSpecialty, 
		price: 250, 
		effect: "Revives a character and restores 15% of Max HP, then restores an additional 550 HP.",
		description: `Hu Tao's specialty. The round-faced ghouls seem quite cute, squeezed into a pile as they are. But if you were to fall to temptation and try but one of them, you may yet come to regret it for a long while... After all, this plate is full of top-quality, taste-bud-blasting—Actually, what on earth is this stuff, anyway?`,
	},
	{
		id: 6, 
		itemName: "Prosperous Peace", 
		src: GanyuSpecialty, 
		price: 500, 
		effect: "Restores 40% of Max HP and an additional 2,350 HP to the selected character.",
		description: `Ganyu's specialty. The image of a resting qilin is by itself enough to calm a person down. Ganyu has put her well-wishes for all that is lovely in this world into this dish — and she's saved some of her favorite Qingxin flowers for you, too.`,
	},
	{
		id: 7, 
		itemName: "A Leisurely Sip", 
		src: LynetteSpecialty, 
		price: 500, 
		effect: "Increases all party members' Healing Bonus by 25% for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
		description: `Lynette's specialty. It was time for afternoon tea, and Lynette laid down a snack made especially for you. The image of the young lady who taking small sips from the cup and the image of the kitten-shaped dessert seemed to overlap. Your heart was filled with sweetness, but you were also a bit concerned about the state of the kitchenware...`,
	},
	{
		id: 8, 
		itemName: "Fukuuchi Udon", 
		src: YaeSpecialty, 
		price: 250, 
		effect: "Revives a character and restores 15% of Max HP, then restores an additional 550 HP.",
		description: `Yae Miko's specialty. The Fried Tofu in here is specially made by the solemn Lady Kitsune. It is said that if you eat it all at one go with sincerity in your heart, you will have the protection of the Great Kitsune — misfortune shall flee and fortune abound!`,
	},
	{
		id: 9, 
		itemName: "Cloud-Shrouded Jade", 
		src: YunjinSpecialty, 
		price: 250, 
		effect: "Decreases all party members' sprinting Stamina consumption by 25% for 1500s.",
		description: `Yun Jin's specialty. This sweet and sticky snack will somehow not affect your throat in any negative way, which is why it's Yun Jin's favorite. The aftertaste is most elegant, not something one would get sick of quickly. Come to think of it... This is quite a decent bit more than she would usually make for herself - but who are you to question her kindness?`,
	},
	{
		id: 10, 
		itemName: "Encompassing Gladness", 
		src: XianyunSpecialty, 
		price: 250, 
		effect: "Increases all party members' ATK by 274 for 300s. In Co-Op Mode, this effect only applies to your own character(s).",
		description: `Xianyun's specialty. Before you can even look shocked to see these fragrant meatballs, she says: "Ah, and you thought such pedestrian culinary work could confound one? Now then, enjoy it while it remains hot — and may one wish you peace, joy, prosperity, and freedom from distress... *cough* What? A little ritual formality now and then could do no ill."`,
	},
	{
		id: 11, 
		itemName: "Swirling Steps", 
		src: NilouSpecialty, 
		price: 500, 
		effect: "Decreases all party members' climbing and sprinting Stamina consumption by 25% for 1500s.",
		description: `Nilou's specialty. The crystal-clear cup that reminds you of an ornate jewel case contains a soft, melt-in-your-mouth pudding. The reddish coloration, like a fleeing trance, reminds you ever so much of Nilou's radiant, dancing form. Ah, would that this dance might last forever."`,
	},
	{
		id: 12, 
		itemName: "Halvamazd", 
		src: NahidaSpecialty, 
		price: 500, 
		effect: "Increases all party members' DEF by 282 for 300s.",
		description: `Nahida's specialty. It is said that "mazd" means "wisdom" in Sumeru, and such delicate "wisdom" is simply irresistible. There is a gentle smile in Nahida's eyes: "The sea anemone has helped the little fish and witnessed its growth, so it's only natural for the little fish to give something back."`,
	},

];


const Layout = () => {
	return(
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

function App(){
	const [cartItems, setCartItems] = useState([]);
	return(
		<>
			<RouterProvider router={
				createBrowserRouter([
					{
						path: "/",
						element: <Layout />,
						children: [
							{
								path: "/",
								element: <Home data={itemArr} />,
							},
							{
								path: "/mycart",
								element: <MyCart itemArray={itemArr} cart={cartItems} setCart={setCartItems}/>,
							},
							{
								path: "/ProductDetails/:id",
								element: <ProductDetails data={itemArr} cart={cartItems} setCart={setCartItems}/>
							},
						],
					},
					
				])

			} />
		</>
	);
}

export default App;