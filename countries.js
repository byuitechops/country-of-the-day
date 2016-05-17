(function () {
   "use strict";
   var countries = [
      ["Islamic Republic of Afghanistan", "AF"],
      ["Republic of Albania", "AL"],
      ["People's Democratic Republic of Algeria", "AG"],
      ["Principality of Andorra", "AN"],
      ["Republic of Angola", "AO"],
      ["Antiqua and Barbuda", "AC"],
      ["Argentine Republic", "AR"],
      ["Republic of Armenia", "AM"],
      ["Commonwealth of Australia", "AS"],
      ["Republic of Austria", "AU"],
      ["Republic of Azerbaijan", "AJ"],
      ["Commonwealth of The Bahamas", "BF"],
      ["Kingdom of Bahrain", "BA"],
      ["People's Republic of Bangladesh", "BG"],
      ["Barbados", "BB"],
      ["Republic of Belarus", "BO"],
      ["Kingdom of Belgium", "BE"],
      ["Belize", "BH"],
      ["Republic of Benin", "BN"],
      ["Kingdom of Bhutan", "BT"],
      ["Plurinational State of Bolivia", "BL"],
      ["Bosnia and Herzegovina", "BK"],
      ["Republic of Botswana", "BC"],
      ["Federative Republic of Brazil", "BR"],
      ["Brunei Darussalam", "BX"],
      ["Republic of Bulgaria", "BU"],
      ["Burkina Faso", "UV"],
      ["Union of Burma", "BM"],
      ["Republic of Burundi", "BY"],
      ["Republic of Cabo Verde", "CV"],
      ["Kingdom of Cambodia", "CB"],
      ["Republic of Cameroon", "CM"],
      ["Canada", "CA"],
      ["Central African Republic", "CT"],
      ["Republic of Chad", "CD"],
      ["Republic of Chile", "CI"],
      ["People's Republic of China", "CH"],
      ["Republic of Colombia", "CO"],
      ["Union of the Comoros", "CN"],
      ["Republic of the Congo", "CF"],
      ["Democratic Republic of the Congo", "CG"],
      ["Republic of Costa Rica", "CS"],
      ["Republic of CÃ´te d'Ivoire", "IV"],
      ["Republic of Croatia", "HR"],
      ["Republic of Cuba", "CU"],
      ["Republic of Cyprus", "CY"],
      ["Czech Republic", "EZ"],
      ["Kingdom of Denmark", "DA"],
      ["Republic of Djibouti", "DJ"],
      ["Commonwealth of Dominica", "DO"],
      ["Dominican Republic", "DR"],
      ["Republic of Ecuador", "EC"],
      ["Arab Republic of Egypt", "EG"],
      ["Republic of El Salvador", "ES"],
      ["Republic of Equatorial Guinea", "EK"],
      ["State of Eritrea", "ER"],
      ["Republic of Estonia", "EN"],
      ["Federal Democratic Republic of Ethiopia", "ET"],
      ["Republic of Fiji", "FJ"],
      ["Republic of Finland", "FI"],
      ["French Republic", "FR"],
      ["Gabonese Republic", "GB"],
      ["Republic of The Gambia", "GA"],
      ["Georgia", "GG"],
      ["Federal Republic of Germany", "GM"],
      ["Republic of Ghana", "GH"],
      ["Hellenic Republic", "GR"],
      ["Grenada", "GJ"],
      ["Republic of Guatemala", "GT"],
      ["Republic of Guinea", "GV"],
      ["Republic of Guinea-Bissau", "PU"],
      ["Co-operative Republic of Guyana", "GY"],
      ["Republic of Haiti", "HA"],
      ["Holy See", "VT"],
      ["Republic of Honduras", "HO"],
      ["Hungary", "HU"],
      ["Republic of Iceland", "IC"],
      ["Republic of India", "IN"],
      ["Republic of Indonesia", "ID"],
      ["Islamic Republic of Iran", "IR"],
      ["Republic of Iraq", "IZ"],
      ["Ireland", "EI"],
      ["State of Israel", "IS"],
      ["Italian Republic", "IT"],
      ["Jamaica", "JM"],
      ["Japan", "JA"],
      ["Hashemite Kingdom of Jordan", "JO"],
      ["Republic of Kazakhstan", "KZ"],
      ["Republic of Kenya", "KE"],
      ["Republic of Kiribati", "KR"],
      ["Democratic People's Republic of Korea", "KN"],
      ["Republic of Korea", "KS"],
      ["Republic of Kosovo", "KV"],
      ["State of Kuwait", "KU"],
      ["Kyrgyz Republic", "KG"],
      ["Lao People's Democratic Republic", "LA"],
      ["Republic of Latvia", "LG"],
      ["Lebanese Republic", "LE"],
      ["Kingdom of Lesotho", "LT"],
      ["Republic of Liberia", "LI"],
      ["Libya", "LY"],
      ["Principality of Liechtenstein", "LS"],
      ["Republic of Lithuania", "LH"],
      ["Grand Duchy of Luxembourg", "LU"],
      ["Republic of Macedonia", "MK"],
      ["Republic of Madagascar", "MA"],
      ["Republic of Malawi", "MI"],
      ["Malaysia", "MY"],
      ["Republic of Maldives", "MV"],
      ["Republic of Mali", "ML"],
      ["Republic of Malta", "MT"],
      ["Republic of the Marshall Islands", "RM"],
      ["Islamic Republic of Mauritania", "MR"],
      ["Republic of Mauritius", "MP"],
      ["United Mexican States", "MX"],
      ["Federated States of Micronesia", "FM"],
      ["Republic of Moldova", "MD"],
      ["Principality of Monaco", "MN"],
      ["Mongolia", "MG"],
      ["Montenegro", "MJ"],
      ["Kingdom of Morocco", "MO"],
      ["Republic of Mozambique", "MZ"],
      ["Republic of Namibia", "WA"],
      ["Republic of Nauru", "NR"],
      ["Federal Democratic Republic of Nepal", "NP"],
      ["Kingdom of the Netherlands", "NL"],
      ["New Zealand", "NZ"],
      ["Republic of Nicaragua", "NU"],
      ["Republic of Niger", "NG"],
      ["Federal Republic of Nigeria", "NI"],
      ["Kingdom of Norway", "NO"],
      ["Sultanate of Oman", "MU"],
      ["Islamic Republic of Pakistan", "PK"],
      ["Republic of Palau", "PS"],
      ["Republic of Panama", "PM"],
      ["Independent State of Papua New Guinea", "PP"],
      ["Republic of Paraguay", "PA"],
      ["Republic of Peru", "PE"],
      ["Republic of the Philippines", "RP"],
      ["Republic of Poland", "PL"],
      ["Portuguese Republic", "PO"],
      ["State of Qatar", "QA"],
      ["Romania", "RO"],
      ["Russian Federation", "RS"],
      ["Republic of Rwanda", "RW"],
      ["Federation of Saint Kitts and Nevis", "SC"],
      ["Saint Lucia", "ST"],
      ["Saint Vincent and the Grenadines", "VC"],
      ["Independent State of Samoa", "WS"],
      ["Republic of San Marino", "SM"],
      ["Democratic Republic of Sao Tome and Principe", "TP"],
      ["Kingdom of Saudi Arabia", "SA"],
      ["Republic of Senegal", "SG"],
      ["Republic of Serbia", "RI"],
      ["Republic of Seychelles", "SE"],
      ["Republic of Sierra Leone", "SL"],
      ["Republic of Singapore", "SN"],
      ["Slovak Republic", "LO"],
      ["Republic of Slovenia", "SI"],
      ["Solomon Islands", "BP"],
      ["Federal Republic of Somalia", "SO"],
      ["Republic of South Africa", "SF"],
      ["Republic of South Sudan", "OD"],
      ["Kingdom of Spain", "SP"],
      ["Democratic Socialist Republic of Sri Lanka", "CE"],
      ["Republic of the Sudan", "SU"],
      ["Republic of Suriname", "NS"],
      ["Kingdom of Swaziland", "WZ"],
      ["Kingdom of Sweden", "SW"],
      ["Swiss Confederation", "SZ"],
      ["Syrian Arab Republic", "SY"],
      ["Republic of Tajikistan", "TI"],
      ["United Republic of Tanzania", "TZ"],
      ["Kingdom of Thailand", "TH"],
      ["Democratic Republic of Timor-Leste", "TT"],
      ["Togolese Republic", "TO"],
      ["Kingdom of Tonga", "TN"],
      ["Republic of Trinidad and Tobago", "TD"],
      ["Republic of Tunisia", "TS"],
      ["Republic of Turkey", "TU"],
      ["Turkmenistan", "TX"],
      ["Tuvalu", "TV"],
      ["Republic of Uganda", "UG"],
      ["Ukraine", "UP"],
      ["United Arab Emirates", "AE"],
      ["United Kingdom of Great Britain and Northern Ireland", "UK"],
      ["United States of America", "US"],
      ["Oriental Republic of Uruguay", "UY"],
      ["Republic of Uzbekistan", "UZ"],
      ["Republic of Vanuatu", "NH"],
      ["Bolivarian Republic of Venezuela", "VE"],
      ["Socialist Republic of Vietnam", "VM"],
      ["Republic of Yemen", "YM"],
      ["Republic of Zambia", "ZA"],
      ["Republic of Zimbabwe", "ZI"],
      ["Taiwan ", "TW"],
      ["Republic of Zimbabwe", "ZI"]
   ];

   function makeCountryDisplay() {
      var countryDayHeader = document.createElement("h1"),
         countryDayText = document.createTextNode("Country of the Day"),
         country = document.createElement("h2"),
         countryText = document.createTextNode(countries[number][0]),
         flagImg = document.createElement("img");

      countryDayHeader.appendChild(countryDayText);
   }

   function makeHTML(number) {
      var text = '<tr style="height:50px">';
      text += '<th>Country of the Day:</th><th colspan="2">';
      text += countries[number][0]; // name
      text += '</th></tr>';
      text += '<tr><td>';
      text += '<img src="https://www.cia.gov/library/publications/the-world-factbook/graphics/flags/large/' + countries[number][1].toLowerCase() + '-lgflag.gif';
      text += '" border="0" alt="' + countries[number][0] + ' Flag" style="width:200px;font-size: 19px;" />';
      text += '<div>Picture Source: <a href="https://www.cia.gov/library/publications/the-world-factbook/">www.cia.gov</a></div>';
      text += '</td><td><a href="' + encodeURI('http://www.wolframalpha.com/input/?i=usa+vs.+' + countries[number][0]) + '" target="_blank">WolframAlpha</a></td><td>';
      text += '<a href="' + encodeURI('https://www.cia.gov/library/publications/the-world-factbook/geos/' + countries[number][1].toLowerCase() + '.html') + '" target="_blank">CIA.gov</a></td></tr>';
      text += '<caption style="caption-side:bottom;text-align:right;cursor:pointer;color:blue;text-decoration:underline;" onclick="getNewCountry();">New Country</caption>';

      return text;
   }

   function getCountryIndex() {
      return Math.floor(Math.random() * countries.length);
   }

   function getNewCountry() {
      var tablePlace = document.getElementById("flagTable");
      tablePlace.innerHTML = makeHTML(getCountryIndex());
   }

   document.write(makeCountry());

}());