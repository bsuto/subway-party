import { readFileSync } from "fs";

const scraped = JSON.parse(readFileSync("scripts/scraped-stations.json", "utf8"));

// MBTA and SEPTA don't have opening dates in their Wikipedia tables,
// so we maintain these manually.
const manual = [
  // MBTA (Boston) — from individual station/line articles
  { name: "Park Street", system: "mbta", line: "Green/Red", opened: "1897-09-01" },
  { name: "Boylston", system: "mbta", line: "Green", opened: "1897-09-01" },
  { name: "Arlington", system: "mbta", line: "Green", opened: "1897-09-01" },
  { name: "Copley", system: "mbta", line: "Green", opened: "1897-09-01" },
  { name: "Government Center", system: "mbta", line: "Green/Blue", opened: "1898-09-03" },
  { name: "Haymarket", system: "mbta", line: "Green/Orange", opened: "1898-06-10" },
  { name: "North Station", system: "mbta", line: "Green/Orange", opened: "1898-06-10" },
  { name: "Downtown Crossing", system: "mbta", line: "Red/Orange", opened: "1908-12-30" },
  { name: "Harvard", system: "mbta", line: "Red", opened: "1912-03-23" },
  { name: "Central", system: "mbta", line: "Red", opened: "1912-03-23" },
  { name: "Kendall/MIT", system: "mbta", line: "Red", opened: "1912-03-23" },
  { name: "South Station", system: "mbta", line: "Red", opened: "1916-12-03" },
  { name: "Andrew", system: "mbta", line: "Red", opened: "1918-06-29" },
  { name: "Broadway", system: "mbta", line: "Red", opened: "1918-06-29" },
  { name: "JFK/UMass", system: "mbta", line: "Red", opened: "1927-11-05" },
  { name: "Savin Hill", system: "mbta", line: "Red", opened: "1927-11-05" },
  { name: "Fields Corner", system: "mbta", line: "Red", opened: "1927-11-05" },
  { name: "Shawmut", system: "mbta", line: "Red", opened: "1928-09-01" },
  { name: "Ashmont", system: "mbta", line: "Red", opened: "1928-09-01" },
  { name: "Alewife", system: "mbta", line: "Red", opened: "1985-03-30" },
  { name: "Davis", system: "mbta", line: "Red", opened: "1984-12-08" },
  { name: "Porter", system: "mbta", line: "Red", opened: "1984-12-08" },
  { name: "Charles/MGH", system: "mbta", line: "Red", opened: "1932-03-05" },
  { name: "Park Street Under", system: "mbta", line: "Red", opened: "1912-03-23" },
  { name: "Quincy Center", system: "mbta", line: "Red", opened: "1971-09-01" },
  { name: "Quincy Adams", system: "mbta", line: "Red", opened: "1983-09-10" },
  { name: "Braintree", system: "mbta", line: "Red", opened: "1980-03-22" },
  { name: "North Quincy", system: "mbta", line: "Red", opened: "1971-09-01" },
  { name: "Wollaston", system: "mbta", line: "Red", opened: "1971-09-01" },
  { name: "State Street", system: "mbta", line: "Blue/Orange", opened: "1904-12-30" },
  { name: "Aquarium", system: "mbta", line: "Blue", opened: "1904-12-30" },
  { name: "Maverick", system: "mbta", line: "Blue", opened: "1904-12-30" },
  { name: "Airport", system: "mbta", line: "Blue", opened: "1952-01-21" },
  { name: "Wood Island", system: "mbta", line: "Blue", opened: "1952-01-21" },
  { name: "Orient Heights", system: "mbta", line: "Blue", opened: "1952-01-21" },
  { name: "Suffolk Downs", system: "mbta", line: "Blue", opened: "1954-01-19" },
  { name: "Beachmont", system: "mbta", line: "Blue", opened: "1954-01-19" },
  { name: "Revere Beach", system: "mbta", line: "Blue", opened: "1954-01-19" },
  { name: "Wonderland", system: "mbta", line: "Blue", opened: "1954-01-19" },
  { name: "Bowdoin", system: "mbta", line: "Blue", opened: "1916-03-18" },
  { name: "Chinatown", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Tufts Medical Center", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Back Bay", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Massachusetts Avenue", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Ruggles", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Roxbury Crossing", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Jackson Square", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Stony Brook", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Green Street", system: "mbta", line: "Orange", opened: "1987-05-04" },
  { name: "Forest Hills", system: "mbta", line: "Orange", opened: "1987-12-19" },
  { name: "Sullivan Square", system: "mbta", line: "Orange", opened: "1901-06-10" },
  { name: "Community College", system: "mbta", line: "Orange", opened: "1975-04-07" },
  { name: "Wellington", system: "mbta", line: "Orange", opened: "1975-04-07" },
  { name: "Malden Center", system: "mbta", line: "Orange", opened: "1975-04-07" },
  { name: "Oak Grove", system: "mbta", line: "Orange", opened: "1977-03-20" },
  { name: "Assembly", system: "mbta", line: "Orange", opened: "2014-09-02" },

  // SEPTA (Philadelphia) — Broad Street Line + Market-Frankford Line
  { name: "Fern Rock Transportation Center", system: "septa", line: "Broad Street", opened: "1956-09-09" },
  { name: "Olney Transportation Center", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Logan", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Wyoming", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Hunting Park", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Erie", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "North Philadelphia", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Susquehanna–Dauphin", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Cecil B. Moore", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Girard", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Fairmount", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Spring Garden", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Race–Vine", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "City Hall", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Walnut–Locust", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Lombard–South", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Ellsworth–Federal", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Tasker–Morris", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Snyder", system: "septa", line: "Broad Street", opened: "1928-09-01" },
  { name: "Oregon", system: "septa", line: "Broad Street", opened: "1938-10-02" },
  { name: "AT&T", system: "septa", line: "Broad Street", opened: "1973-09-06" },
  { name: "NRG", system: "septa", line: "Broad Street", opened: "1973-09-06" },
  { name: "69th Street Transportation Center", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "Millbourne", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "63rd Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "60th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "56th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "52nd Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "46th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "40th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "34th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "30th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "15th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "13th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "11th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "8th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04" },
  { name: "5th Street", system: "septa", line: "Market–Frankford", opened: "1907-10-04" },
  { name: "2nd Street", system: "septa", line: "Market–Frankford", opened: "1907-10-04" },
  { name: "Spring Garden", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Girard", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Berks", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "York–Dauphin", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Huntingdon", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Somerset", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Allegheny", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Tioga", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Erie–Torresdale", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Church", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Margaret–Orthodox", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Frankford Transportation Center", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
  { name: "Arrott Transportation Center", system: "septa", line: "Market–Frankford", opened: "1922-11-05" },
];

const allStations = [...scraped, ...manual];

// Sort by system then by name
allStations.sort((a, b) => {
  if (a.system !== b.system) return a.system.localeCompare(b.system);
  return a.name.localeCompare(b.name);
});

// Generate TypeScript
const lines = [];
lines.push(`export interface Station {
  name: string;
  system: string;
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

export const stations: Station[] = [`);

for (const s of allStations) {
  const name = s.name.replace(/"/g, '\\"');
  const line = (s.line || "").replace(/"/g, '\\"');
  lines.push(`  { name: "${name}", system: "${s.system}", line: "${line}", opened: "${s.opened}" },`);
}

lines.push(`];

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
`);

console.log(lines.join("\n"));
