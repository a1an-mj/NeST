import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  state=[
    {
        "id": 1,
        "name": "Andhra Pradesh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/NagarjunaSagarDam.JPG/1280px-NagarjunaSagarDam.JPG",
        "discription": "Andhra Pradesh, located on the southeastern coast, is known for its rich cultural heritage, historic temples, and spicy cuisine."
    },
    {
        "id": 2,
        "name": "Arunachal Pradesh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tawang_Monastery_%28Tibetan_Buddhist%29.jpg/1280px-Tawang_Monastery_%28Tibetan_Buddhist%29.jpg",
        "discription": "Arunachal Pradesh, the 'Land of the Rising Sun', is renowned for its pristine landscapes, diverse tribes, and the Tawang Monastery."
    },
    {
        "id": 3,
        "name": "Assam",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Gargaon%27r_Kareng_Ghor.JPG/1280px-Gargaon%27r_Kareng_Ghor.JPG",
        "discription": "Assam, in northeastern India, is famous for its tea plantations, the mighty Brahmaputra River, and the Kaziranga National Park."
    },
    {
        "id": 4,
        "name": "Bihar",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Aerial_view%2C_Patna_%28314731093%29.jpg",
        "discription": "Bihar, rich in history, is the birthplace of Buddhism and Jainism, housing the Mahabodhi Temple in Bodh Gaya."
    },
    {
        "id": 5,
        "name": "Chhattisgarh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bhoramdeo_Temple%2C_Kawardha.jpg/1280px-Bhoramdeo_Temple%2C_Kawardha.jpg",
        "discription": "Chhattisgarh, located in central India, is known for its dense forests, waterfalls like Chitrakote, and vibrant tribal culture."
    },
    {
        "id": 6,
        "name": "Goa",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BeachFun.jpg/1920px-BeachFun.jpg",
        "discription": "Goa, on the western coast, is renowned for its sandy beaches, Portuguese heritage, and vibrant nightlife."
    },
    {
        "id": 7,
        "name": "Gujarat",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Rani_ki_vav_02.jpg/1280px-Rani_ki_vav_02.jpg",
        "discription": "Gujarat, in western India, is famous for its historic sites, the Gir National Park, and as the birthplace of Mahatma Gandhi."
    },
    {
        "id": 8,
        "name": "Haryana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Most_Beautiful_Lake_in_Faridabad.jpg/1920px-Most_Beautiful_Lake_in_Faridabad.jpg",
        "discription": "Haryana, surrounding the national capital Delhi on three sides, is known for its rich agricultural land and the historic city of Kurukshetra."
    },
    {
        "id": 9,
        "name": "Himachal Pradesh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Kinnaur_Kailash.jpg/1280px-Kinnaur_Kailash.jpg",
        "discription": "Himachal Pradesh, nestled in the Himalayas, is celebrated for its hill stations like Shimla and Manali, and scenic landscapes."
    },
    {
        "id": 10,
        "name": "Jharkhand",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Shikharji_Parasnath_Giridih.jpg",
        "discription": "Jharkhand, in eastern India, is rich in mineral resources and known for its waterfalls, hills, and tribal culture."
    },
    {
        "id": 11,
        "name": "Karnataka",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/GolGumbaz2_altered.jpg/1280px-GolGumbaz2_altered.jpg",
        "discription": "Karnataka, in southwestern India, boasts a blend of modern cities like Bengaluru, historic sites like Hampi, and scenic landscapes."
    },
    {
        "id": 12,
        "name": "Kerala",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Alappuzha_loves_Wikimedia_IMG_7698.JPG/1920px-Alappuzha_loves_Wikimedia_IMG_7698.JPG",
        "discription": "Kerala, 'God's Own Country', is famous for its backwaters, lush greenery, and rich cultural traditions."
    },
    {
        "id": 13,
        "name": "Madhya Pradesh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Khajuraho_temple.jpg/1920px-Khajuraho_temple.jpg",
        "discription": "Madhya Pradesh, in central India, is known for its ancient temples of Khajuraho, wildlife reserves, and rich history."
    },
    {
        "id": 14,
        "name": "Maharashtra",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Gateway_of_India%2C_Mumbai.jpg/1920px-Gateway_of_India%2C_Mumbai.jpg",
        "discription": "Maharashtra, in western India, is home to Mumbai, the financial capital, and landmarks like the Ajanta and Ellora caves."
    },
    {
        "id": 15,
        "name": "Manipur",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Loktak_Lake.jpg/1920px-Loktak_Lake.jpg",
        "discription": "Manipur, in northeastern India, is known for its classical dance form and the unique Loktak Lake with floating phumdis."
    },
    {
        "id": 16,
        "name": "Meghalaya",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Living_root_bridge%2C_Meghalaya.jpg/1920px-Living_root_bridge%2C_Meghalaya.jpg",
        "discription": "Meghalaya, the 'Abode of Clouds', is famous for its living root bridges, high rainfall, and lush landscapes."
    },
    {
        "id": 17,
        "name": "Mizoram",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mizoram_Landscape.jpg/1920px-Mizoram_Landscape.jpg",
        "discription": "Mizoram, in northeastern India, is known for its rolling hills, diverse tribal culture, and scenic beauty."
    },
    {
        "id": 18,
        "name": "Nagaland",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Kohima_War_Cemetery.jpg/1920px-Kohima_War_Cemetery.jpg",
        "discription": "Nagaland, 'The Land of Festivals', is known for its tribal heritage, colorful celebrations, and natural beauty."
    },
    {
        "id": 19,
        "name": "Odisha",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Konark_Sun_Temple.jpg/1920px-Konark_Sun_Temple.jpg",
        "discription": "Odisha, in eastern India, is known for its ancient temples, rich culture, and the Konark Sun Temple."
    },
    {
        "id": 20,
        "name": "Punjab",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Golden_Temple%2C_Amritsar.jpg/1920px-Golden_Temple%2C_Amritsar.jpg",
        "discription": "Punjab, the 'Land of Five Rivers', is famous for its vibrant culture, Sikh heritage, and the Golden Temple."
    },
    {
        "id": 21,
        "name": "Rajasthan",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Hawa_Mahal.jpg/1920px-Hawa_Mahal.jpg",
        "discription": "Rajasthan, in northwestern India, is known for its desert landscapes, royal palaces, and vibrant folk culture."
    },
    {
        "id": 22,
        "name": "Sikkim",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kanchenjunga_seen_from_Gangtok.jpg/1920px-Kanchenjunga_seen_from_Gangtok.jpg",
        "discription": "Sikkim, a small Himalayan state, is renowned for its scenic beauty, Buddhist monasteries, and the majestic Kanchenjunga."
    },
    {
        "id": 23,
        "name": "Tamil Nadu",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Brihadeeswarar_Temple.jpg/1920px-Brihadeeswarar_Temple.jpg",
        "discription": "Tamil Nadu, in southern India, is famous for its Dravidian-style temples, classical music, and rich heritage."
    },
    {
        "id": 24,
        "name": "Telangana",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Charminar_Hyderabad.jpg/1920px-Charminar_Hyderabad.jpg",
        "discription": "Telangana, India's youngest state, is known for Hyderabad's Charminar, Golconda Fort, and rich culinary traditions."
    },
    {
        "id": 25,
        "name": "Tripura",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Neermahal_Palace.jpg/1920px-Neermahal_Palace.jpg",
        "discription": "Tripura, in northeastern India, is known for its palaces, temples, and lush greenery."
    },
    {
        "id": 26,
        "name": "Uttar Pradesh",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Taj_Mahal_in_Agra.jpg/1920px-Taj_Mahal_in_Agra.jpg",
        "discription": "Uttar Pradesh, in northern India, is home to the iconic Taj Mahal and numerous pilgrimage sites like Varanasi and Ayodhya."
    },
    {
        "id": 27,
        "name": "Uttarakhand",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Kedarnath_Temple.jpg/1920px-Kedarnath_Temple.jpg",
        "discription": "Uttarakhand, known as 'Dev Bhoomi', is famous for its pilgrimage sites, scenic hills, and adventure tourism."
    },
    {
        "id": 28,
        "name": "West Bengal",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Howrah_Bridge_Kolkata.jpg/1920px-Howrah_Bridge_Kolkata.jpg",
        "discription": "West Bengal, in eastern India, is renowned for its cultural heritage, iconic Howrah Bridge, and Darjeeling tea."
    }
]
  constructor() { }

  getStates(){
    return this.state;
  }

  getStatesById(id:any){
    return this.state.find(state => state.id == Number(id));
  }
}
