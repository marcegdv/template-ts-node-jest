export type PublicHolydayV3 = {
    date: string;
    localName: string | Date | null;
    name: string | null;
    countryCode: CountryCode | null;
    fixed: boolean;
    global: boolean;
    counties: CountryCode[] | null;
    launchYear: number | null;
    types: HolydayType[] | null;
}

export type HolydayType =
    | "Public"
    | "Bank"
    | "School"
    | "Authorities"
    | "Optional"
    | "Observance"
    ;

export type CountryCode =
    | "AD" | "AL" | "AM" | "AR" | "AT" | "AU" | "AX"
    | "BA" | "BB" | "BE" | "BG" | "BJ" | "BO" | "BR" | "BS" | "BW" | "BY" | "BZ" | "CA"
    | "CH" | "CL" | "CN" | "CO" | "CR" | "CU" | "CY" | "CZ" | "DE"
    | "DK" | "DO" | "EC"
    | "EE" | "EG" | "ES"
    | "FI" | "FO" | "FR"
    | "GA" | "GB" | "GD" | "GE" | "GG" | "GI" | "GL" | "GM" | "GR" | "GT" | "GY"
    | "HK" | "HN" | "HR" | "HT" | "HU"
    | "ID" | "IE" | "IM" | "IS" | "IT"
    | "JE" | "JM" | "JP"
    | "KR" | "KZ"
    | "LI" | "LS" | "LT" | "LU" | "LV"
    | "MA" | "MC" | "MD" | "ME" | "MG" | "MK" | "MN" | "MS" | "MT" | "MX" | "MZ"
    | "NA" | "NE" | "NG" | "NI" | "NL" | "NO" | "NZ"
    | "PA" | "PE" | "PG" | "PL" | "PR" | "PT" | "PY"
    | "RO" | "RS" | "RU"
    | "SE" | "SG" | "SI" | "SJ" | "SK" | "SM" | "SR" | "SV"
    | "TN" | "TR"
    | "UA" | "US" | "UY"
    | "VA" | "VE" | "VN"
    | "ZA" | "ZW"
    ;

export type CountryName = keyof typeof countryCodeByCountryName;

export const countryCodeByCountryName = {
    Andorra: "AD",
    Albania: "AL",
    Armenia: "AM",
    Argentina: "AR",
    Austria: "AT",
    Australia: "AU",
    "Åland Islands": "AX",
    "Bosnia and Herzegovina": "BA",
    Barbados: "BB",
    Belgium: "BE",
    Bulgaria: "BG",
    Benin: "BJ",
    Bolivia: "BO",
    Brazil: "BR",
    Bahamas: "BS",
    Botswana: "BW",
    Belarus: "BY",
    Belize: "BZ",
    Canada: "CA",
    Switzerland: "CH",
    Chile: "CL",
    China: "CN",
    Colombia: "CO",
    "Costa Rica": "CR",
    Cuba: "CU",
    Cyprus: "CY",
    Czechia: "CZ",
    Germany: "DE",
    Denmark: "DK",
    "Dominican Republic": "DO",
    Ecuador: "EC",
    Estonia: "EE",
    Egypt: "EG",
    Spain: "ES",
    Finland: "FI",
    "Faroe Islands": "FO",
    France: "FR",
    Gabon: "GA",
    "United Kingdom": "GB",
    Grenada: "GD",
    Georgia: "GE",
    Guernsey: "GG",
    Gibraltar: "GI",
    Greenland: "GL",
    Gambia: "GM",
    Greece: "GR",
    Guatemala: "GT",
    Guyana: "GY",
    "Hong Kong": "HK",
    Honduras: "HN",
    Croatia: "HR",
    Haiti: "HT",
    Hungary: "HU",
    Indonesia: "ID",
    Ireland: "IE",
    "Isle of Man": "IM",
    Iceland: "IS",
    Italy: "IT",
    Jersey: "JE",
    Jamaica: "JM",
    Japan: "JP",
    "South Korea": "KR",
    Kazakhstan: "KZ",
    Liechtenstein: "LI",
    Lesotho: "LS",
    Lithuania: "LT",
    Luxembourg: "LU",
    Latvia: "LV",
    Morocco: "MA",
    Monaco: "MC",
    Moldova: "MD",
    Montenegro: "ME",
    Madagascar: "MG",
    "North Macedonia": "MK",
    Mongolia: "MN",
    Montserrat: "MS",
    Malta: "MT",
    Mexico: "MX",
    Mozambique: "MZ",
    Namibia: "NA",
    Niger: "NE",
    Nigeria: "NG",
    Nicaragua: "NI",
    Netherlands: "NL",
    Norway: "NO",
    "New Zealand": "NZ",
    Panama: "PA",
    Peru: "PE",
    "Papua New Guinea": "PG",
    Poland: "PL",
    "Puerto Rico": "PR",
    Portugal: "PT",
    Paraguay: "PY",
    Romania: "RO",
    Serbia: "RS",
    Russia: "RU",
    Sweden: "SE",
    Singapore: "SG",
    Slovenia: "SI",
    "Svalbard and Jan Mayen": "SJ",
    Slovakia: "SK",
    "San Marino": "SM",
    Suriname: "SR",
    "El Salvador": "SV",
    Tunisia: "TN",
    Turkey: "TR",
    Ukraine: "UA",
    "United States": "US",
    Uruguay: "UY",
    "Vatican City": "VA",
    Venezuela: "VE",
    Vietnam: "VN",
    "South Africa": "ZA",
    Zimbabwe: "ZW",
}
