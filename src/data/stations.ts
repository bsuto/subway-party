export interface Station {
  name: string;
  system: string;
  city: string;
  line: string;
  opened: string; // YYYY-MM-DD
}

export const systems: Record<string, { name: string; city: string; color: string; emoji: string }> = {
  nyc: { name: "New York City Subway", city: "New York", color: "#0039A6", emoji: "🗽" },
  wmata: { name: "Washington Metro", city: "Washington, DC", color: "#BF0D3E", emoji: "🏛️" },
  cta: { name: "Chicago L", city: "Chicago", color: "#565A5C", emoji: "🌬️" },
  bart: { name: "BART", city: "San Francisco Bay Area", color: "#009DDC", emoji: "🌉" },
  mbta: { name: "MBTA", city: "Boston", color: "#003DA5", emoji: "🦞" },
  septa: { name: "SEPTA", city: "Philadelphia", color: "#E1251B", emoji: "🔔" },
  marta: { name: "MARTA", city: "Atlanta", color: "#CE8B3A", emoji: "🍑" },
};

export const stations: Station[] = [
  // NYC Subway — original 28 stations (IRT), October 27, 1904
  { name: "City Hall", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Brooklyn Bridge", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Worth Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Canal Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Spring Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Bleecker Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Astor Place", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "14th Street–Union Square", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "18th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "23rd Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "28th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "33rd Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Grand Central", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Times Square–42nd Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "50th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "Columbus Circle", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "66th Street–Lincoln Center", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "72nd Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "79th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "86th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "91st Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "96th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "103rd Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "110th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "116th Street–Columbia University", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "125th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "137th Street–City College", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  { name: "145th Street", system: "nyc", city: "New York", line: "IRT", opened: "1904-10-27" },
  // Later NYC stations
  { name: "Wall Street", system: "nyc", city: "New York", line: "IRT", opened: "1905-01-16" },
  { name: "Fulton Street", system: "nyc", city: "New York", line: "IRT", opened: "1905-01-16" },
  { name: "Bowling Green", system: "nyc", city: "New York", line: "IRT", opened: "1905-07-10" },
  { name: "Mets–Willets Point", system: "nyc", city: "New York", line: "IRT Flushing", opened: "1928-01-21" },
  { name: "Flushing–Main Street", system: "nyc", city: "New York", line: "IRT Flushing", opened: "1928-01-21" },
  { name: "Jay Street–MetroTech", system: "nyc", city: "New York", line: "IND", opened: "1933-02-01" },
  { name: "Hoyt–Schermerhorn Streets", system: "nyc", city: "New York", line: "IND", opened: "1936-04-09" },
  { name: "Coney Island–Stillwell Avenue", system: "nyc", city: "New York", line: "BMT", opened: "1920-05-01" },
  { name: "DeKalb Avenue", system: "nyc", city: "New York", line: "BMT", opened: "1920-08-01" },
  { name: "Court Street", system: "nyc", city: "New York", line: "IND", opened: "1936-04-09" },
  { name: "Hudson Yards", system: "nyc", city: "New York", line: "7 Extension", opened: "2015-09-13" },

  // Washington Metro
  { name: "Metro Center", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Gallery Place–Chinatown", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Judiciary Square", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Union Station", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Rhode Island Avenue", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Farragut North", system: "wmata", city: "Washington, DC", line: "Red", opened: "1976-03-27" },
  { name: "Dupont Circle", system: "wmata", city: "Washington, DC", line: "Red", opened: "1977-01-17" },
  { name: "Rosslyn", system: "wmata", city: "Washington, DC", line: "Blue/Orange", opened: "1977-07-01" },
  { name: "Pentagon", system: "wmata", city: "Washington, DC", line: "Blue/Yellow", opened: "1977-07-01" },
  { name: "National Airport", system: "wmata", city: "Washington, DC", line: "Blue/Yellow", opened: "1977-07-01" },
  { name: "Foggy Bottom–GWU", system: "wmata", city: "Washington, DC", line: "Blue/Orange", opened: "1977-07-01" },
  { name: "L'Enfant Plaza", system: "wmata", city: "Washington, DC", line: "Blue/Orange/Yellow/Green", opened: "1977-07-01" },
  { name: "Smithsonian", system: "wmata", city: "Washington, DC", line: "Blue/Orange", opened: "1977-07-01" },
  { name: "Federal Triangle", system: "wmata", city: "Washington, DC", line: "Blue/Orange", opened: "1977-07-01" },
  { name: "Bethesda", system: "wmata", city: "Washington, DC", line: "Red", opened: "1984-08-25" },
  { name: "Tenleytown–AU", system: "wmata", city: "Washington, DC", line: "Red", opened: "1984-08-25" },
  { name: "Woodley Park", system: "wmata", city: "Washington, DC", line: "Red", opened: "1981-12-05" },
  { name: "Cleveland Park", system: "wmata", city: "Washington, DC", line: "Red", opened: "1981-12-05" },
  { name: "Van Ness–UDC", system: "wmata", city: "Washington, DC", line: "Red", opened: "1981-12-05" },
  { name: "Columbia Heights", system: "wmata", city: "Washington, DC", line: "Green/Yellow", opened: "1999-09-18" },
  { name: "U Street", system: "wmata", city: "Washington, DC", line: "Green/Yellow", opened: "1991-05-11" },
  { name: "Shaw–Howard University", system: "wmata", city: "Washington, DC", line: "Green/Yellow", opened: "1991-05-11" },
  { name: "Navy Yard–Ballpark", system: "wmata", city: "Washington, DC", line: "Green", opened: "1991-12-28" },
  { name: "Anacostia", system: "wmata", city: "Washington, DC", line: "Green", opened: "1991-12-28" },
  { name: "Tysons Corner", system: "wmata", city: "Washington, DC", line: "Silver", opened: "2014-07-26" },
  { name: "Dulles Airport", system: "wmata", city: "Washington, DC", line: "Silver", opened: "2022-11-15" },

  // Chicago L
  { name: "State/Lake", system: "cta", city: "Chicago", line: "Loop Elevated", opened: "1897-10-03" },
  { name: "Clark/Lake", system: "cta", city: "Chicago", line: "Loop Elevated", opened: "1897-10-03" },
  { name: "Washington/Wabash", system: "cta", city: "Chicago", line: "Loop Elevated", opened: "2017-08-31" },
  { name: "Adams/Wabash", system: "cta", city: "Chicago", line: "Loop Elevated", opened: "1897-10-03" },
  { name: "Harold Washington Library", system: "cta", city: "Chicago", line: "Brown/Orange/Pink/Purple", opened: "1997-09-20" },
  { name: "Jackson", system: "cta", city: "Chicago", line: "Red", opened: "1943-10-17" },
  { name: "Monroe", system: "cta", city: "Chicago", line: "Red", opened: "1943-10-17" },
  { name: "Grand", system: "cta", city: "Chicago", line: "Red", opened: "1943-10-17" },
  { name: "Chicago", system: "cta", city: "Chicago", line: "Red", opened: "1943-10-17" },
  { name: "Fullerton", system: "cta", city: "Chicago", line: "Red/Brown/Purple", opened: "1900-11-12" },
  { name: "Belmont", system: "cta", city: "Chicago", line: "Red/Brown/Purple", opened: "1900-05-31" },
  { name: "Howard", system: "cta", city: "Chicago", line: "Red/Purple/Yellow", opened: "1908-05-16" },
  { name: "O'Hare", system: "cta", city: "Chicago", line: "Blue", opened: "1984-09-03" },
  { name: "Midway", system: "cta", city: "Chicago", line: "Orange", opened: "1993-10-31" },
  { name: "95th/Dan Ryan", system: "cta", city: "Chicago", line: "Red", opened: "1969-09-28" },
  { name: "Garfield", system: "cta", city: "Chicago", line: "Green", opened: "1892-06-06" },
  { name: "Sox–35th", system: "cta", city: "Chicago", line: "Red", opened: "1969-09-28" },
  { name: "Cermak–Chinatown", system: "cta", city: "Chicago", line: "Red", opened: "1969-02-01" },

  // BART
  { name: "12th St. Oakland City Center", system: "bart", city: "Oakland", line: "Multiple", opened: "1972-09-11" },
  { name: "MacArthur", system: "bart", city: "Oakland", line: "Multiple", opened: "1972-09-11" },
  { name: "Rockridge", system: "bart", city: "Oakland", line: "Yellow", opened: "1973-05-21" },
  { name: "Orinda", system: "bart", city: "Orinda", line: "Yellow", opened: "1973-05-21" },
  { name: "Lafayette", system: "bart", city: "Lafayette", line: "Yellow", opened: "1973-05-21" },
  { name: "Walnut Creek", system: "bart", city: "Walnut Creek", line: "Yellow", opened: "1973-05-21" },
  { name: "Concord", system: "bart", city: "Concord", line: "Yellow", opened: "1973-05-21" },
  { name: "Embarcadero", system: "bart", city: "San Francisco", line: "Multiple", opened: "1976-05-27" },
  { name: "Montgomery Street", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "Powell Street", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "Civic Center/UN Plaza", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "16th St. Mission", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "24th St. Mission", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "Glen Park", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "Balboa Park", system: "bart", city: "San Francisco", line: "Multiple", opened: "1973-11-05" },
  { name: "Daly City", system: "bart", city: "Daly City", line: "Multiple", opened: "1973-11-05" },
  { name: "Milpitas", system: "bart", city: "Milpitas", line: "Orange/Green", opened: "2020-06-13" },
  { name: "Berryessa/North San José", system: "bart", city: "San Jose", line: "Orange/Green", opened: "2020-06-13" },
  { name: "Oakland Airport", system: "bart", city: "Oakland", line: "Connector", opened: "2014-11-22" },

  // MBTA (Boston)
  { name: "Park Street", system: "mbta", city: "Boston", line: "Green/Red", opened: "1897-09-01" },
  { name: "Boylston", system: "mbta", city: "Boston", line: "Green", opened: "1897-09-01" },
  { name: "Arlington", system: "mbta", city: "Boston", line: "Green", opened: "1897-09-01" },
  { name: "Copley", system: "mbta", city: "Boston", line: "Green", opened: "1897-09-01" },
  { name: "Harvard", system: "mbta", city: "Boston", line: "Red", opened: "1912-03-23" },
  { name: "Central", system: "mbta", city: "Boston", line: "Red", opened: "1912-03-23" },
  { name: "Kendall/MIT", system: "mbta", city: "Boston", line: "Red", opened: "1912-03-23" },
  { name: "Downtown Crossing", system: "mbta", city: "Boston", line: "Red/Orange", opened: "1908-12-30" },
  { name: "South Station", system: "mbta", city: "Boston", line: "Red", opened: "1916-12-03" },
  { name: "JFK/UMass", system: "mbta", city: "Boston", line: "Red", opened: "1927-11-05" },
  { name: "Andrew", system: "mbta", city: "Boston", line: "Red", opened: "1918-06-29" },
  { name: "Alewife", system: "mbta", city: "Boston", line: "Red", opened: "1985-03-30" },
  { name: "Government Center", system: "mbta", city: "Boston", line: "Green/Blue", opened: "1898-09-03" },
  { name: "Haymarket", system: "mbta", city: "Boston", line: "Green/Orange", opened: "1898-06-10" },
  { name: "North Station", system: "mbta", city: "Boston", line: "Green/Orange", opened: "1898-06-10" },

  // SEPTA (Philadelphia)
  { name: "City Hall", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Walnut–Locust", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Lombard–South", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Ellsworth–Federal", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Tasker–Morris", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Snyder", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "Oregon", system: "septa", city: "Philadelphia", line: "Broad Street", opened: "1928-09-01" },
  { name: "15th Street", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "13th Street", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "11th Street", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "2nd Street", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-10-04" },
  { name: "Spring Garden", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-10-04" },
  { name: "69th Street Transportation Center", system: "septa", city: "Philadelphia", line: "Market–Frankford", opened: "1907-03-04" },

  // MARTA (Atlanta)
  { name: "Five Points", system: "marta", city: "Atlanta", line: "Red/Gold/Blue/Green", opened: "1979-06-30" },
  { name: "Georgia State", system: "marta", city: "Atlanta", line: "Blue/Green", opened: "1979-06-30" },
  { name: "West End", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1979-06-30" },
  { name: "Garnett", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1979-06-30" },
  { name: "Oakland City", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1979-06-30" },
  { name: "Peachtree Center", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1981-12-04" },
  { name: "Arts Center", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1981-12-04" },
  { name: "Midtown", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1981-12-04" },
  { name: "North Avenue", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1981-12-04" },
  { name: "Civic Center", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1981-12-04" },
  { name: "Hartsfield–Jackson Airport", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1988-06-18" },
  { name: "Buckhead", system: "marta", city: "Atlanta", line: "Red", opened: "1996-06-01" },
  { name: "Lenox", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1984-09-11" },
  { name: "Lindbergh Center", system: "marta", city: "Atlanta", line: "Red/Gold", opened: "1984-09-11" },
  { name: "Decatur", system: "marta", city: "Atlanta", line: "Blue", opened: "1979-09-10" },
];

export function getTodaysBirthdays(month: number, day: number): Station[] {
  return stations.filter((s) => {
    const d = new Date(s.opened);
    return d.getUTCMonth() + 1 === month && d.getUTCDate() === day;
  });
}

export function getUpcomingBirthdays(month: number, day: number, withinDays: number = 7): Station[] {
  const today = new Date(2000, month - 1, day);
  return stations.filter((s) => {
    const d = new Date(s.opened);
    const birthday = new Date(2000, d.getUTCMonth(), d.getUTCDate());
    const diff = (birthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 && diff <= withinDays;
  });
}

export function getAge(opened: string): number {
  const now = new Date();
  const d = new Date(opened);
  return now.getFullYear() - d.getUTCFullYear();
}

export function getStationsBySystem(systemId: string): Station[] {
  return stations.filter((s) => s.system === systemId);
}
