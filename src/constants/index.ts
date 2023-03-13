export const links = [
    {
        tittle: "Convert",
        id: "/"    
    },
    {
        tittle: "Date",
        id: "/date"    
    },
    {
        tittle: "GitHub",
        id: 'github'
    },
]

export const styles = {
    navbar: 'bg-navbarMobile absolute transform duration-500 left-0 right-0 ml-auto mr-auto flex flex-col items-center gap-10 rounded-[10px] py-10  md:hidden',
    cardBold: 'text-bTextColor font-bold text-[1.125rem]',
    inputBorder: 'bg-white rounded-[10px] outline-none text-ellipsis py-3 px-3 border-[#dddddd] border border-solid focus:border-[#0f77e9] focus:border focus:border-solid',
    amount: 'bg-white rounded-[10px] outline-none text-ellipsis py-3 px-3 border-[#dddddd] border border-solid focus:border-[#0f77e9] focus:border focus:border-solid',
    compareButton: 'rounded-full flex justify-center items-center w-[50px] h-[50px] bg-white border border-[#dddddd] cursor-pointer active:border-covertBG mt-3',
}

export const selectStyles = {

    control: (baseStyles:any, state:any) => ({
      ...baseStyles,
      text: "black",
      backgroundColor: "white",
      borderRadius: "10px",
      outline: "none",
      textOverflow: "ellipsis",
      padding: "0.35rem",
      border: "#ddd 1px solid",
      ':hover': {
        border: "#ddd 1px solid",
      },
    }),
    menu: (baseStyles:any, state:any) => ({
      ...baseStyles,
      borderRadius: "10px",
    }),
    option: (baseStyles:any, state:any) => ({
      ...baseStyles,
      fontSize: '0.925rem',
      ':hover': {
        backgroundColor: 'light-gray',
      }
    }),
    valueContainer: (baseStyles:any, state:any) => ({
      ...baseStyles,
      paddingRight: 0,
    }),
    noOptionsMessage: (baseStyles:any, state:any) => ({
      ...baseStyles,
      paddingTop: '2px',
      paddingBottom: '2px',
      color: 'black',
    }),
  }


export const options = [
    {
        value: 'AFN',
        label: "AFN - Afghan Afghani"
    },
    {
        value: 'AED',
        label: "AED - United Arab Emirates Dirham"
    },
    {
        value: 'ALL',
        label: "ALL - Albanian Lek"
    },
    {
        value: 'AMD',
        label: "AMD - Armenian Dram"
    },
    {
        value: 'ANG',
        label: "ANG - Netherlands Antillean Guilder"
    },
    {
        value: 'AOA',
        label: "AOA - Angolan Kwanza"
    },
    {
        value: 'ARS',
        label: "ARS - Argentine Peso"
    },
    {
        value: 'AUD',
        label: "AUD - Australian Dollar"
    },
    {
        value: 'AWG',
        label: "AWG - Aruban Florin"
    },
    {
        value: 'AZN',
        label: "AZN - Azerbaijani Manat"
    },
    {
        value: 'BAM',
        label: "BAM - Bosnia-Herzegovina Convertible Mark"
    },
    {
        value: 'BBD',
        label: "BBD - Barbadian Dollar"
    },
    {
        value: 'BDT',
        label: "BDT - Bangladeshi Taka"
    },
    {
        value: 'BGN',
        label: "BGN - Bulgarian Lev"
    },
    {
        value: 'BHD',
        label: "BHD - Bahraini Dinar"
    },
    {
        value: 'BIF',
        label: "BIF - Burundian Franc"
    },
    {
        value: 'BMD',
        label: "BMD - Bermudan Dollar"
    },
    {
        value: 'BND',
        label: "BND - Brunei Dollar"
    },
    {
        value: 'BOB',
        label: "BOB - Bolivian Boliviano"
    },
    {
        value: 'BRL',
        label: "BRL - Brazilian Real"
    },
    {
        value: 'BSD',
        label: "BSD - Bahamian Dollar"
    },
    {
        value: 'BTC',
        label: "BTC - Bitcoin"
    },
    {
        value: 'BTN',
        label: "BTN - Bhutanese Ngultrum"
    },
    {
        value: 'BWP',
        label: "BWP - Botswanan Pula"
    },
    {
        value: 'BYN',
        label: "BYN - New Belarusian Ruble"
    },
    {
        value: 'BYR',
        label: "BYR - Belarusian Ruble"
    },
    {
        value: 'BZD',
        label: "BZD - Belize Dollar"
    },
    {
        value: 'CAD',
        label: "CAD - Canadian Dollar"
    },
    {
        value: 'CDF',
        label: "CDF - Congolese Franc"
    },
    {
        value: 'CHF',
        label: "CHF - Swiss Franc"
    },
    {
        value: 'CLF',
        label: "CLF - Chilean Unit of Account (UF)"
    },
    {
        value: 'CLP',
        label: "CLP - Chilean Peso"
    },
    {
        value: 'CNY',
        label: "CNY - Chinese Yuan"
    },
    {
        value: 'COP',
        label: "COP - Colombian Peso"
    },
    {
        value: 'CRC',
        label: "CRC - Costa Rican Col\u00f3n"
    },
    {
        value: 'CUC',
        label: "CUC - Cuban Convertible Peso"
    },
    {
        value: 'CUP',
        label: "CUP - Cuban Peso"
    },
    {
        value: 'CVE',
        label: "CVE - Cape Verdean Escudo"
    },
    {
        value: 'CZK',
        label: "CZK - Czech Republic Koruna"
    },
    {
        value: 'DJF',
        label: "DJF - Djiboutian Franc"
    },
    {
        value: 'DKK',
        label: "DKK - Danish Krone"
    },
    {
        value: 'DOP',
        label: "DOP - Dominican Peso"
    },
    {
        value: 'DZD',
        label: "DZD - Algerian Dinar"
    },
    {
        value: 'EGP',
        label: "EGP - Egyptian Pound"
    },
    {
        value: 'ERN',
        label: "ERN - Eritrean Nakfa"
    },
    {
        value: 'ETB',
        label: "ETB - Ethiopian Birr"
    },
    {
        value: 'EUR',
        label: "EUR - Euro"
    },
    {
        value: 'FJD',
        label: "FJD - Fijian Dollar"
    },
    {
        value: 'FKP',
        label: "FKP - Falkland Islands Pound"
    },
    {
        value: 'GBP',
        label: "GBP - British Pound Sterling"
    },
    {
        value: 'GEL',
        label: "GEL - Georgian Lari"
    },
    {
        value: 'GGP',
        label: "GGP - Guernsey Pound"
    },
    {
        value: 'GHS',
        label: "GHS - Ghanaian Cedi"
    },
    {
        value: 'GIP',
        label: "GIP - Gibraltar Pound"
    },
    {
        value: 'GMD',
        label: "GMD - Gambian Dalasi"
    },
    {
        value: 'GNF',
        label: "GNF - Guinean Franc"
    },
    {
        value: 'GTQ',
        label: "GTQ - Guatemalan Quetzal"
    },
    {
        value: 'GYD',
        label: "GYD - Guyanaese Dollar"
    },
    {
        value: 'HKD',
        label: "HKD - Hong Kong Dollar"
    },
    {
        value: 'HNL',
        label: "HNL - Honduran Lempira"
    },
    {
        value: 'HRK',
        label: "HRK - Croatian Kuna"
    },
    {
        value: 'HTG',
        label: "HTG - Haitian Gourde"
    },
    {
        value: 'HUF',
        label: "HUF - Hungarian Forint"
    },
    {
        value: 'IDR',
        label: "IDR - Indonesian Rupiah"
    },
    {
        value: 'ILS',
        label: "ILS - Israeli New Sheqel"
    },
    {
        value: 'IMP',
        label: "IMP - Manx pound"
    },
    {
        value: 'INR',
        label: "INR - Indian Rupee"
    },
    {
        value: 'IQD',
        label: "IQD - Iraqi Dinar"
    },
    {
        value: 'IRR',
        label: "IRR - Iranian Rial"
    },
    {
        value: 'ISK',
        label: "ISK - Icelandic Kr\u00f3na"
    },
    {
        value: 'JEP',
        label: "JEP - Jersey Pound"
    },
    {
        value: 'JMD',
        label: "JMD - Jamaican Dollar"
    },
    {
        value: 'JOD',
        label: "JOD - Jordanian Dinar"
    },
    {
        value: 'JPY',
        label: "JPY - Japanese Yen"
    },
    {
        value: 'KES',
        label: "KES - Kenyan Shilling"
    },
    {
        value: 'KGS',
        label: "KGS - Kyrgystani Som"
    },
    {
        value: 'KHR',
        label: "KHR - Cambodian Riel"
    },
    {
        value: 'KMF',
        label: "KMF - Comorian Franc"
    },
    {
        value: 'KPW',
        label: "KPW - North Korean Won"
    },
    {
        value: 'KRW',
        label: "KRW - South Korean Won"
    },
    {
        value: 'KWD',
        label: "KWD - Kuwaiti Dinar"
    },
    {
        value: 'KYD',
        label: "KYD - Cayman Islands Dollar"
    },
    {
        value: 'KZT',
        label: "KZT - Kazakhstani Tenge"
    },
    {
        value: 'LAK',
        label: "LAK - Laotian Kip"
    },
    {
        value: 'LBP',
        label: "LBP - Lebanese Pound"
    },
    {
        value: 'LKR',
        label: "LKR - Sri Lankan Rupee"
    },
    {
        value: 'LRD',
        label: "LRD - Liberian Dollar"
    },
    {
        value: 'LSL',
        label: "LSL - Lesotho Loti"
    },
    {
        value: 'LTL',
        label: "LTL - Lithuanian Litas"
    },
    {
        value: 'LVL',
        label: "LVL - Latvian Lats"
    },
    {
        value: 'LYD',
        label: "LYD - Libyan Dinar"
    },
    {
        value: 'MAD',
        label: "MAD - Moroccan Dirham"
    },
    {
        value: 'MDL',
        label: "MDL - Moldovan Leu"
    },
    {
        value: 'MGA',
        label: "MGA - Malagasy Ariary"
    },
    {
        value: 'MKD',
        label: "MKD - Macedonian Denar"
    },
    {
        value: 'MMK',
        label: "MMK - Myanma Kyat"
    },
    {
        value: 'MNT',
        label: "MNT - Mongolian Tugrik"
    },
    {
        value: 'MOP',
        label: "MOP - Macanese Pataca"
    },
    {
        value: 'MRO',
        label: "MRO - Mauritanian Ouguiya"
    },
    {
        value: 'MUR',
        label: "MUR - Mauritian Rupee"
    },
    {
        value: 'MVR',
        label: "MVR - Maldivian Rufiyaa"
    },
    {
        value: 'MWK',
        label: "MWK - Malawian Kwacha"
    },
    {
        value: 'MXN',
        label: "MXN - Mexican Peso"
    },
    {
        value: 'MYR',
        label: "MYR - Malaysian Ringgit"
    },
    {
        value: 'MZN',
        label: "MZN - Mozambican Metical"
    },
    {
        value: 'NAD',
        label: "NAD - Namibian Dollar"
    },
    {
        value: 'NGN',
        label: "NGN - Nigerian Naira"
    },
    {
        value: 'NIO',
        label: "NIO - Nicaraguan C\u00f3rdoba"
    },
    {
        value: 'NOK',
        label: "NOK - Norwegian Krone"
    },
    {
        value: 'NPR',
        label: "NPR - Nepalese Rupee"
    },
    {
        value: 'NZD',
        label: "NZD - New Zealand Dollar"
    },
    {
        value: 'OMR',
        label: "OMR - Omani Rial"
    },
    {
        value: 'PAB',
        label: "PAB - Panamanian Balboa"
    },
    {
        value: 'PEN',
        label: "PEN - Peruvian Nuevo Sol"
    },
    {
        value: 'PGK',
        label: "PGK - Papua New Guinean Kina"
    },
    {
        value: 'PHP',
        label: "PHP - Philippine Peso"
    },
    {
        value: 'PKR',
        label: "PKR - Pakistani Rupee"
    },
    {
        value: 'PLN',
        label: "PLN - Polish Zloty"
    },
    {
        value: 'PYG',
        label: "PYG - Paraguayan Guarani"
    },
    {
        value: 'QAR',
        label: "QAR - Qatari Rial"
    },
    {
        value: 'RON',
        label: "RON - Romanian Leu"
    },
    {
        value: 'RSD',
        label: "RSD - Serbian Dinar"
    },
    {
        value: 'RUB',
        label: "RUB - Russian Ruble"
    },
    {
        value: 'RWF',
        label: "RWF - Rwandan Franc"
    },
    {
        value: 'SAR',
        label: "SAR - Saudi Riyal"
    },
    {
        value: 'SBD',
        label: "SBD - Solomon Islands Dollar"
    },
    {
        value: 'SCR',
        label: "SCR - Seychellois Rupee"
    },
    {
        value: 'SDG',
        label: "SDG - Sudanese Pound"
    },
    {
        value: 'SEK',
        label: "SEK - Swedish Krona"
    },
    {
        value: 'SGD',
        label: "SGD - Singapore Dollar"
    },
    {
        value: 'SHP',
        label: "SHP - Saint Helena Pound"
    },
    {
        value: 'SLE',
        label: "SLE - Sierra Leonean Leone"
    },
    {
        value: 'SLL',
        label: "SLL - Sierra Leonean Leone"
    },
    {
        value: 'SOS',
        label: "SOS - Somali Shilling"
    },
    {
        value: 'SRD',
        label: "SRD - Surinamese Dollar"
    },
    {
        value: 'STD',
        label: "STD - S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra"
    },
    {
        value: 'SVC',
        label: "SVC - Salvadoran Col\u00f3n"
    },
    {
        value: 'SYP',
        label: "SYP - Syrian Pound"
    },
    {
        value: 'SZL',
        label: "SZL - Swazi Lilangeni"
    },
    {
        value: 'THB',
        label: "THB - Thai Baht"
    },
    {
        value: 'TJS',
        label: "TJS - Tajikistani Somoni"
    },
    {
        value: 'TMT',
        label: "TMT - Turkmenistani Manat"
    },
    {
        value: 'TND',
        label: "TND - Tunisian Dinar"
    },
    {
        value: 'TOP',
        label: "TOP - Tongan Pa\u02bbanga"
    },
    {
        value: 'TRY',
        label: "TRY - Turkish Lira"
    },
    {
        value: 'TTD',
        label: "TTD - Trinidad and Tobago Dollar"
    },
    {
        value: 'TWD',
        label: "TWD - New Taiwan Dollar"
    },
    {
        value: 'TZS',
        label: "TZS - Tanzanian Shilling"
    },
    {
        value: 'UAH',
        label: "UAH - Ukrainian Hryvnia"
    },
    {
        value: 'UGX',
        label: "UGX - Ugandan Shilling"
    },
    {
        value: 'USD',
        label: "USD - United States Dollar"
    },
    {
        value: 'UYU',
        label: "UYU - Uruguayan Peso"
    },
    {
        value: 'UZS',
        label: "UZS - Uzbekistan Som"
    },
    {
        value: 'VEF',
        label: "VEF - Venezuelan Bol\u00edvar Fuerte"
    },
    {
        value: 'VES',
        label: "VES - Sovereign Bolivar"
    },
    {
        value: 'VND',
        label: "VND - Vietnamese Dong"
    },
    {
        value: 'VUV',
        label: "VUV - Vanuatu Vatu"
    },
    {
        value: 'WST',
        label: "WST - Samoan Tala"
    },
    {
        value: 'XAF',
        label: "XAF - CFA Franc BEAC"
    },
    {
        value: 'XAG',
        label: "XAG - Silver (troy ounce)"
    },
    {
        value: 'XAU',
        label: "XAU - Gold (troy ounce)"
    },
    {
        value: 'XCD',
        label: "XCD - East Caribbean Dollar"
    },
    {
        value: 'XDR',
        label: "XDR - Special Drawing Rights"
    },
    {
        value: 'XOF',
        label: "XOF - CFA Franc BCEAO"
    },
    {
        value: 'XPF',
        label: "XPF - CFP Franc"
    },
    {
        value: 'YER',
        label: "YER - Yemeni Rial"
    },
    {
        value: 'ZAR',
        label: "ZAR - South African Rand"
    },
    {
        value: 'ZMK',
        label: "ZMK - Zambian Kwacha (pre-2013)"
    },
    {
        value: 'ZMW',
        label: "ZMW - Zambian Kwacha"
    },
    {
        value: 'ZWL',
        label: "ZWL - Zimbabwean Dollar"
    },
]