document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const countryDisplay=document.getElementById("Country");
  const errorMessage = document.getElementById("error-message");


  // Additional fields
  const dateDisplay = document.getElementById("date");
  const ene = document.getElementById("ene");
  const hum = document.getElementById("hum");
  const UV = document.getElementById("UV");
  const vis = document.getElementById("vis");
  const pres = document.getElementById("pres");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const maxtemp = document.getElementById("maxtemp");
  const mintemp = document.getElementById("mintemp");
  const grndl = document.getElementById("grndl");
  const seal = document.getElementById("seal");
  const datalist = document.getElementById("cities");


  // Predefined cities list
  const predefinedCities = [
    // Indian States (examples from each state)
    // Andhra Pradesh (Expanded)
    "Visakhapatnam, Andhra Pradesh",
    "Vijayawada, Andhra Pradesh",
    "Guntur, Andhra Pradesh",
    "Nellore, Andhra Pradesh",
    "Kurnool, Andhra Pradesh",
    "Tirupati, Andhra Pradesh",
    "Rajahmundry, Andhra Pradesh",
    "Kakinada, Andhra Pradesh",
    "Anantapur, Andhra Pradesh",
    "Kadapa, Andhra Pradesh",
    "Ongole, Andhra Pradesh",
    "Eluru, Andhra Pradesh",
    "Chittoor, Andhra Pradesh",
    "Srikakulam, Andhra Pradesh",
    "Vizianagaram, Andhra Pradesh",
    "Machilipatnam, Andhra Pradesh",
    "Proddatur, Andhra Pradesh",
    "Tenali, Andhra Pradesh",
    "Hindupur, Andhra Pradesh",
    "Nandyal, Andhra Pradesh",
    "Sattenapalle, Andhra Pradesh",
    "Narasaraopet,Andhra Pradesh",

    // Telangana (Expanded)
    "Mahabubabad, Telangana",
    "Hyderabad, Telangana",
    "Warangal, Telangana",
    "Nizamabad, Telangana",
    "Karimnagar, Telangana",
    "Khammam, Telangana",
    "Ramagundam, Telangana",
    "Mahbubnagar, Telangana",
    "Nalgonda, Telangana",
    "Adilabad, Telangana",
    "Siddipet, Telangana",
    "Jagtial, Telangana",
    "Zaheerabad, Telangana",
    "Bodhan, Telangana",
    "Mancherial, Telangana",
    "Suryapet, Telangana",
    "Kamareddy, Telangana",
    "Vikarabad, Telangana",
    "Medak, Telangana",
    "Bhadradri Kothagudem, Telangana",

    // Arunachal Pradesh
    "Itanagar, Arunachal Pradesh",
    "Naharlagun, Arunachal Pradesh",
    "Pasighat, Arunachal Pradesh",
    "Tezu, Arunachal Pradesh",
    "Ziro, Arunachal Pradesh",
    "Bomdila, Arunachal Pradesh",
    "Roing, Arunachal Pradesh",
    "Khonsa, Arunachal Pradesh",
    "Daporijo, Arunachal Pradesh",
    "Along, Arunachal Pradesh",

    // Assam
    "Guwahati, Assam",
    "Silchar, Assam",
    "Jorhat, Assam",
    "Dibrugarh, Assam",
    "Tezpur, Assam",
    "Tinsukia, Assam",
    "Nagaon, Assam",
    "Gorakhpur, Assam",
    "Diphu, Assam",
    "Karimganj, Assam",

    // Bihar
    "Patna, Bihar",
    "Gaya, Bihar",
    "Muzaffarpur, Bihar",
    "Bhagalpur, Bihar",
    "Darbhanga, Bihar",
    "Purnia, Bihar",
    "Chapra, Bihar",
    "Katihar, Bihar",
    "Saharsa, Bihar",
    "Arrah, Bihar",

    // Chhattisgarh
    "Raipur, Chhattisgarh",
    "Bilaspur, Chhattisgarh",
    "Durg, Chhattisgarh",
    "Korba, Chhattisgarh",
    "Rajnandgaon, Chhattisgarh",
    "Bhilai, Chhattisgarh",
    "Jagdalpur, Chhattisgarh",
    "Raigarh, Chhattisgarh",
    "Ambikapur, Chhattisgarh",
    "Mahasamund, Chhattisgarh",

    // Goa
    "Panaji, Goa",
    "Margao, Goa",
    "Vasco da Gama, Goa",
    "Mapusa, Goa",
    "Ponda, Goa",
    "Marmagao, Goa",
    "Bicholim, Goa",
    "Pernem, Goa",
    "Canacona, Goa",
    "Quepem, Goa",

    // Gujarat
    "Ahmedabad, Gujarat",
    "Surat, Gujarat",
    "Vadodara, Gujarat",
    "Rajkot, Gujarat",
    "Bhavnagar, Gujarat",
    "Jamnagar, Gujarat",
    "Gandhinagar, Gujarat",
    "Morbi, Gujarat",
    "Anand, Gujarat",
    "Nadiad, Gujarat",

    // Haryana
    "Gurugram, Haryana",
    "Faridabad, Haryana",
    "Panipat, Haryana",
    "Rohtak, Haryana",
    "Hisar, Haryana",
    "Karnal, Haryana",
    "Yamunanagar, Haryana",
    "Ballabgarh, Haryana",
    "Ambala, Haryana",
    "Rewari, Haryana",

    // Himachal Pradesh
    "Shimla, Himachal Pradesh",
    "Dharamshala, Himachal Pradesh",
    "Solan, Himachal Pradesh",
    "Mandi, Himachal Pradesh",
    "Manali, Himachal Pradesh",
    "Una, Himachal Pradesh",
    "Chamba, Himachal Pradesh",
    "Hamirpur, Himachal Pradesh",
    "Bilaspur, Himachal Pradesh",
    "Nahan, Himachal Pradesh",

    // Jharkhand
    "Ranchi, Jharkhand",
    "Jamshedpur, Jharkhand",
    "Dhanbad, Jharkhand",
    "Bokaro, Jharkhand",
    "Deoghar, Jharkhand",
    "Hazaribagh, Jharkhand",
    "Giridih, Jharkhand",
    "Medininagar, Jharkhand",
    "Saraikela, Jharkhand",
    "Chakradharpur, Jharkhand",

    // Karnataka
    "Bengaluru, Karnataka",
    "Mysuru, Karnataka",
    "Mangalore, Karnataka",
    "Hubli, Karnataka",
    "Belgaum, Karnataka",
    "Dharwad, Karnataka",
    "Bijapur, Karnataka",
    "Shimoga, Karnataka",
    "Tumkur, Karnataka",
    "Davangere, Karnataka",

    // Kerala
    "Thiruvananthapuram, Kerala",
    "Kochi, Kerala",
    "Kozhikode, Kerala",
    "Thrissur, Kerala",
    "Alappuzha, Kerala",
    "Kollam, Kerala",
    "Kottayam, Kerala",
    "Malappuram, Kerala",
    "Palakkad, Kerala",
    "Thrippunithura, Kerala",

    // Madhya Pradesh
    "Bhopal, Madhya Pradesh",
    "Indore, Madhya Pradesh",
    "Jabalpur, Madhya Pradesh",
    "Gwalior, Madhya Pradesh",
    "Ujjain, Madhya Pradesh",
    "Satna, Madhya Pradesh",
    "Rewa, Madhya Pradesh",
    "Sagar, Madhya Pradesh",
    "Ratlam, Madhya Pradesh",
    "Chhindwara, Madhya Pradesh",

    // Maharashtra
    "Mumbai, Maharashtra",
    "Pune, Maharashtra",
    "Nagpur, Maharashtra",
    "Nashik, Maharashtra",
    "Thane, Maharashtra",
    "Aurangabad, Maharashtra",
    "Solapur, Maharashtra",
    "Amravati, Maharashtra",
    "Kolhapur, Maharashtra",
    "Navi Mumbai, Maharashtra",

    // Manipur
    "Imphal, Manipur",
    "Thoubal, Manipur",
    "Churachandpur, Manipur",
    "Ukhrul, Manipur",
    "Khoupum, Manipur",
    "Jiribam, Manipur",
    "Senapati, Manipur",
    "Bishnupur, Manipur",
    "Chandel, Manipur",
    "Moreh, Manipur",

    // Meghalaya
    "Shillong, Meghalaya",
    "Tura, Meghalaya",
    "Nongpoh, Meghalaya",
    "Williamnagar, Meghalaya",
    "Nongstoin, Meghalaya",
    "Khliehriat, Meghalaya",
    "Mairang, Meghalaya",
    "Baghmara, Meghalaya",
    "Resubelpara, Meghalaya",
    "Jowai, Meghalaya",

    // Mizoram
    "Aizawl, Mizoram",
    "Lunglei, Mizoram",
    "Saiha, Mizoram",
    "Champhai, Mizoram",
    "Kolasib, Mizoram",
    "Serchhip, Mizoram",
    "Mamit, Mizoram",
    "Lawngtlai, Mizoram",
    "Khawzawl, Mizoram",
    "Zawlnuam, Mizoram",

    // Nagaland
    "Kohima, Nagaland",
    "Dimapur, Nagaland",
    "Mokokchung, Nagaland",
    "Tuensang, Nagaland",
    "Wokha, Nagaland",
    "Mon, Nagaland",
    "Phek, Nagaland",
    "Zunheboto, Nagaland",
    "Kiphire, Nagaland",
    "Peren, Nagaland",

    // Odisha
    "Bhubaneswar, Odisha",
    "Cuttack, Odisha",
    "Rourkela, Odisha",
    "Berhampur, Odisha",
    "Puri, Odisha",
    "Sambalpur, Odisha",
    "Balasore, Odisha",
    "Sundargarh, Odisha",
    "Baripada, Odisha",
    "Angul, Odisha",

    // Punjab
    "Amritsar, Punjab",
    "Ludhiana, Punjab",
    "Jalandhar, Punjab",
    "Patiala, Punjab",
    "Mohali, Punjab",
    "Batala, Punjab",
    "Pathankot, Punjab",
    "Phagwara, Punjab",
    "Hoshiarpur, Punjab",
    "Moga, Punjab",

    // Rajasthan
    "Jaipur, Rajasthan",
    "Jodhpur, Rajasthan",
    "Udaipur, Rajasthan",
    "Kota, Rajasthan",
    "Ajmer, Rajasthan",
    "Bikaner, Rajasthan",
    "Bhilwara, Rajasthan",
    "Alwar, Rajasthan",
    "Pushkar, Rajasthan",
    "Sikar, Rajasthan",

    // Sikkim (has fewer large towns but include border towns)
    "Gangtok, Sikkim",
    "Namchi, Sikkim",
    "Gyalshing, Sikkim",
    "Mangan, Sikkim",
    "Soreng, Sikkim",
    "Rangpo, Sikkim",
    "Pakyong, Sikkim",
    "Geyzing, Sikkim",
    "Melli, Sikkim",
    "Rangit, Sikkim",

    // Tamil Nadu
    "Chennai, Tamil Nadu",
    "Coimbatore, Tamil Nadu",
    "Madurai, Tamil Nadu",
    "Tiruchirappalli, Tamil Nadu",
    "Salem, Tamil Nadu",
    "Tiruppur, Tamil Nadu",
    "Erode, Tamil Nadu",
    "Vellore, Tamil Nadu",
    "Thoothukudi, Tamil Nadu",
    "Nagercoil, Tamil Nadu",

    // Tripura
    "Agartala, Tripura",
    "Udaipur, Tripura",
    "Dharmanagar, Tripura",
    "Belonia, Tripura",
    "Kailasahar, Tripura",
    "Sabroom, Tripura",
    "Amarpur, Tripura",
    "Teliamura, Tripura",
    "Karbook, Tripura",
    "Sonamura, Tripura",

    // Uttar Pradesh
    "Lucknow, Uttar Pradesh",
    "Kanpur, Uttar Pradesh",
    "Varanasi, Uttar Pradesh",
    "Agra, Uttar Pradesh",
    "Meerut, Uttar Pradesh",
    "Ghaziabad, Uttar Pradesh",
    "Aligarh, Uttar Pradesh",
    "Moradabad, Uttar Pradesh",
    "Bareilly, Uttar Pradesh",
    "Gorakhpur, Uttar Pradesh",

    // Uttarakhand
    "Dehradun, Uttarakhand",
    "Haridwar, Uttarakhand",
    "Roorkee, Uttarakhand",
    "Mussoorie, Uttarakhand",
    "Haldwani, Uttarakhand",
    "Nainital, Uttarakhand",
    "Rishikesh, Uttarakhand",
    "Kashipur, Uttarakhand",
    "Rudrapur, Uttarakhand",
    "Pithoragarh, Uttarakhand",

    // West Bengal
    "Kolkata, West Bengal",
    "Siliguri, West Bengal",
    "Durgapur, West Bengal",
    "Asansol, West Bengal",
    "Howrah, West Bengal",
    "Bardhaman, West Bengal",
    "Kharagpur, West Bengal",
    "Raghunathpur, West Bengal",
    "Jalpaiguri, West Bengal",
    "Malda, West Bengal",

    // 🔹 7 Union Territories (4 each)
    "Port Blair, Andaman and Nicobar Islands",
    "Mayabunder, Andaman and Nicobar Islands",
    "Neil Island, Andaman and Nicobar Islands",
    "Havelock Island, Andaman and Nicobar Islands",
    "Chandigarh",
    "Mohali, Chandigarh",
    "Panchkula, Chandigarh",
    "Zirakpur, Chandigarh",
    "Daman, Daman and Diu",
    "Silvassa, Dadra and Nagar Haveli and Daman and Diu",
    "Diu, Dadra and Nagar Haveli and Daman and Diu",
    "Surat (Diu Udhyog Nagar), Dadra and Nagar Haveli and Daman and Diu",
    "New Delhi, Delhi",
    "Dwarka, Delhi",
    "Rohini, Delhi",
    "Noida, Delhi",
    "Srinagar, Jammu and Kashmir",
    "Jammu, Jammu and Kashmir",
    "Anantnag, Jammu and Kashmir",
    "Baramulla, Jammu and Kashmir",
    "Leh, Ladakh",
    "Kargil, Ladakh",
    "Diskit, Ladakh",
    "Nimu, Ladakh",
    "Puducherry, Puducherry",
    "Karaikal, Puducherry",
    "Mahe, Puducherry",
    "Yanam, Puducherry",

    // USA
    "New York, USA",
    "Los Angeles, USA",
    "Chicago, USA",
    "Houston, USA",
    "Philadelphia, USA",
    "Phoenix, USA",
    "San Antonio, USA",
    "San Diego, USA",
    "Dallas, USA",
    "San Jose, USA",

    // Canada
    "Toronto, Canada",
    "Montreal, Canada",
    "Calgary, Canada",
    "Ottawa, Canada",
    "Edmonton, Canada",
    "Vancouver, Canada",

    // UK
    "London, UK",
    "Birmingham, UK",
    "Leeds, UK",
    "Glasgow, UK",
    "Sheffield, UK",
    "Manchester, UK",

    // France
    "Paris, France",
    "Marseille, France",
    "Lyon, France",
    "Toulouse, France",
    "Nice, France",
    "Nantes, France",
    "Lille, France",
    "Toulon, France",
    "Reims, France",

    // Germany
    "Berlin, Germany",
    "Hamburg, Germany",
    "Munich, Germany",
    "Cologne, Germany",
    "Frankfurt, Germany",
    "Stuttgart, Germany",

    // Italy
    "Rome, Italy",
    "Milan, Italy",
    "Naples, Italy",
    "Turin, Italy",
    "Palermo, Italy",
    "Genoa, Italy",

    // Spain
    "Madrid, Spain",
    "Barcelona, Spain",
    "Valencia, Spain",
    "Seville, Spain",
    "Zaragoza, Spain",
    "Malaga, Spain",

    // Portugal
    "Lisbon, Portugal",
    "Porto, Portugal",

    // Netherlands
    "Amsterdam, Netherlands",
    "Rotterdam, Netherlands",
    "The Hague, Netherlands",

    // Belgium
    "Brussels, Belgium",
    "Antwerp, Belgium",

    // Switzerland
    "Zurich, Switzerland",
    "Geneva, Switzerland",
    "Basel, Switzerland",

    // Austria
    "Vienna, Austria",
    "Graz, Austria",

    // Czech Republic
    "Prague, Czech Republic",
    "Brno, Czech Republic",
    "Ostrava, Czech Republic",

    // Hungary
    "Budapest, Hungary",
    "Debrecen, Hungary",

    // Poland
    "Warsaw, Poland",
    "Krakow, Poland",
    "Lodz, Poland",

    // Scandinavia
    "Stockholm, Sweden",
    "Gothenburg, Sweden",
    "Malmo, Sweden",
    "Copenhagen, Denmark",
    "Aarhus, Denmark",
    "Oslo, Norway",
    "Bergen, Norway",
    "Helsinki, Finland",
    "Espoo, Finland",

    // Ireland
    "Dublin, Ireland",
    "Cork, Ireland",

    // Greece
    "Athens, Greece",
    "Thessaloniki, Greece",

    // Russia
    "Moscow, Russia",
    "Saint Petersburg, Russia",
    "Novosibirsk, Russia",

    // Turkey
    "Istanbul, Turkey",
    "Ankara, Turkey",
    "Izmir, Turkey",

    // East Asia
    "Beijing, China",
    "Shanghai, China",
    "Guangzhou, China",
    "Shenzhen, China",
    "Chengdu, China",
    "Wuhan, China",
    "Hong Kong, China",
    "Tokyo, Japan",
    "Osaka, Japan",
    "Nagoya, Japan",
    "Sapporo, Japan",
    "Fukuoka, Japan",
    "Seoul, South Korea",
    "Busan, South Korea",
    "Incheon, South Korea",

    // Southeast Asia
    "Bangkok, Thailand",
    "Chiang Mai, Thailand",
    "Hanoi, Vietnam",
    "Ho Chi Minh City, Vietnam",
    "Manila, Philippines",
    "Cebu, Philippines",
    "Jakarta, Indonesia",
    "Surabaya, Indonesia",
    "Bandung, Indonesia",
    "Kuala Lumpur, Malaysia",
    "George Town, Malaysia",
    "Singapore, Singapore",

    // South Asia (non-India)
    "Karachi, Pakistan",
    "Lahore, Pakistan",
    "Dhaka, Bangladesh",
    "Chittagong, Bangladesh",
    "Colombo, Sri Lanka",
    "Kandy, Sri Lanka",

    // Middle East
    "Dubai, UAE",
    "Abu Dhabi, UAE",
    "Sharjah, UAE",
    "Riyadh, Saudi Arabia",
    "Jeddah, Saudi Arabia",
    "Mecca, Saudi Arabia",
    "Tel Aviv, Israel",
    "Jerusalem, Israel",

    // Africa
    "Cairo, Egypt",
    "Alexandria, Egypt",
    "Giza, Egypt",
    "Cape Town, South Africa",
    "Johannesburg, South Africa",
    "Nairobi, Kenya",
    "Mombasa, Kenya",
    "Lagos, Nigeria",
    "Abuja, Nigeria",
    "Addis Ababa, Ethiopia",
    "Kampala, Uganda",

    // Latin America
    "Buenos Aires, Argentina",
    "Cordoba, Argentina",
    "Sao Paulo, Brazil",
    "Rio de Janeiro, Brazil",
    "Brasilia, Brazil",
    "Bogota, Colombia",
    "Medellin, Colombia",
    "Lima, Peru",
    "Arequipa, Peru",
    "Santiago, Chile",
    "Valparaiso, Chile",
    "Mexico City, Mexico",
    "Guadalajara, Mexico",
    "Monterrey, Mexico",
    "Montevideo, Uruguay",
    "Asuncion, Paraguay",
    "La Paz, Bolivia",
    "Santa Cruz, Bolivia",
    "Havana, Cuba",
    "Santiago de Cuba, Cuba",
    "Quito, Ecuador",
    "Guayaquil, Ecuador",
    "San Juan, Puerto Rico",
    "Caracas, Venezuela",

    // New Zealand
    "Auckland, New Zealand",
    "Wellington, New Zealand",

    // Australia (10 total)
    "Sydney, Australia",
    "Melbourne, Australia",
    "Brisbane, Australia",
    "Perth, Australia",
    "Adelaide, Australia",
    "Canberra, Australia",
    "Hobart, Australia",
    "Darwin, Australia",
    "Gold Coast, Australia",
    "Newcastle, Australia",
  ];

  // Populate datalist
  predefinedCities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    datalist.appendChild(option);
  });

  getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (!city) {
      errorMessage.textContent = "Please enter a city name.";
      errorMessage.classList.remove("hidden");
      weatherInfo.classList.add("hidden");
      return;
    }

    fetchWeatherData(city);
  });

  function fetchWeatherData(city) {
    const API_KEY = "8f0eb885cd0b0e4bcc3f396d43ac0446"; // Your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric&nocache=${Date.now()}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("City not found or API issue");
        return response.json();
      })
      .then((data) => displayWeatherData(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
        weatherInfo.classList.add("hidden");
      });
  }

  function displayWeatherData(data) {
    console.log(data);
    cityNameDisplay.textContent = data.name;
    temperatureDisplay.textContent = `${data.main.temp} °C`;
    descriptionDisplay.textContent = data.weather
      .map((w) => w.description)
      .join(", ");
    dateDisplay.textContent = new Date().toDateString();
    countryDisplay.textContent=data.sys.country;
    ene.textContent = `${data.wind.speed} m/s`;
    hum.textContent = `${data.main.humidity}%`;
    UV.textContent = "N/A"; // Needs separate UV API call
    vis.textContent = data.visibility ? `${data.visibility / 1000} km` : "N/A";
    pres.textContent = `${data.main.pressure} hPa`;
    sunrise.textContent = new Date(
      data.sys.sunrise * 1000
    ).toLocaleTimeString();
    sunset.textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    maxtemp.textContent = `${Math.round(data.main.temp_max)} °C`;
    mintemp.textContent = `${Math.round(data.main.temp_min)} °C`;
  
    grndl.textContent = data.main.grnd_level
      ? `${data.main.grnd_level} hPa`
      : "N/A";
    seal.textContent = data.main.sea_level
      ? `${data.main.sea_level} hPa`
      : "N/A";

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
