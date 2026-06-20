import { readFileSync } from "fs";

const scraped = JSON.parse(readFileSync("scripts/scraped-stations.json", "utf8"));

// MBTA and SEPTA don't have opening dates in their Wikipedia tables,
// so we maintain these manually.
const manual = [
  // MBTA (Boston) — from individual station/line articles
  { name: "Park Street", system: "mbta", line: "Green/Red", opened: "1897-09-01", wiki: "Park_Street_station_(MBTA)" },
  { name: "Boylston", system: "mbta", line: "Green", opened: "1897-09-01", wiki: "Boylston_station" },
  { name: "Arlington", system: "mbta", line: "Green", opened: "1897-09-01", wiki: "Arlington_station_(MBTA)" },
  { name: "Copley", system: "mbta", line: "Green", opened: "1897-09-01", wiki: "Copley_station" },
  { name: "Government Center", system: "mbta", line: "Green/Blue", opened: "1898-09-03", wiki: "Government_Center_station_(MBTA)" },
  { name: "Haymarket", system: "mbta", line: "Green/Orange", opened: "1898-06-10", wiki: "Haymarket_station_(MBTA)" },
  { name: "North Station", system: "mbta", line: "Green/Orange", opened: "1898-06-10", wiki: "North_Station_(MBTA)" },
  { name: "Downtown Crossing", system: "mbta", line: "Red/Orange", opened: "1908-12-30", wiki: "Downtown_Crossing_station" },
  { name: "Harvard", system: "mbta", line: "Red", opened: "1912-03-23", wiki: "Harvard_station_(MBTA)" },
  { name: "Central", system: "mbta", line: "Red", opened: "1912-03-23", wiki: "Central_station_(MBTA)" },
  { name: "Kendall/MIT", system: "mbta", line: "Red", opened: "1912-03-23", wiki: "Kendall/MIT_station" },
  { name: "South Station", system: "mbta", line: "Red", opened: "1916-12-03", wiki: "South_Station_(MBTA)" },
  { name: "Andrew", system: "mbta", line: "Red", opened: "1918-06-29", wiki: "Andrew_station_(MBTA)" },
  { name: "Broadway", system: "mbta", line: "Red", opened: "1918-06-29", wiki: "Broadway_station_(MBTA)" },
  { name: "JFK/UMass", system: "mbta", line: "Red", opened: "1927-11-05", wiki: "JFK/UMass_station" },
  { name: "Savin Hill", system: "mbta", line: "Red", opened: "1927-11-05", wiki: "Savin_Hill_station" },
  { name: "Fields Corner", system: "mbta", line: "Red", opened: "1927-11-05", wiki: "Fields_Corner_station" },
  { name: "Shawmut", system: "mbta", line: "Red", opened: "1928-09-01", wiki: "Shawmut_station_(MBTA)" },
  { name: "Ashmont", system: "mbta", line: "Red", opened: "1928-09-01", wiki: "Ashmont_station" },
  { name: "Alewife", system: "mbta", line: "Red", opened: "1985-03-30", wiki: "Alewife_station" },
  { name: "Davis", system: "mbta", line: "Red", opened: "1984-12-08", wiki: "Davis_station_(MBTA)" },
  { name: "Porter", system: "mbta", line: "Red", opened: "1984-12-08", wiki: "Porter_station_(MBTA)" },
  { name: "Charles/MGH", system: "mbta", line: "Red", opened: "1932-03-05", wiki: "Charles/MGH_station" },
  { name: "Park Street Under", system: "mbta", line: "Red", opened: "1912-03-23", wiki: "Park_Street_station_(MBTA)" },
  { name: "Quincy Center", system: "mbta", line: "Red", opened: "1971-09-01", wiki: "Quincy_Center_station" },
  { name: "Quincy Adams", system: "mbta", line: "Red", opened: "1983-09-10", wiki: "Quincy_Adams_station" },
  { name: "Braintree", system: "mbta", line: "Red", opened: "1980-03-22", wiki: "Braintree_station_(MBTA)" },
  { name: "North Quincy", system: "mbta", line: "Red", opened: "1971-09-01", wiki: "North_Quincy_station" },
  { name: "Wollaston", system: "mbta", line: "Red", opened: "1971-09-01", wiki: "Wollaston_station" },
  { name: "State Street", system: "mbta", line: "Blue/Orange", opened: "1904-12-30", wiki: "State_station_(MBTA)" },
  { name: "Aquarium", system: "mbta", line: "Blue", opened: "1904-12-30", wiki: "Aquarium_station_(MBTA)" },
  { name: "Maverick", system: "mbta", line: "Blue", opened: "1904-12-30", wiki: "Maverick_station" },
  { name: "Airport", system: "mbta", line: "Blue", opened: "1952-01-21", wiki: "Airport_station_(MBTA)" },
  { name: "Wood Island", system: "mbta", line: "Blue", opened: "1952-01-21", wiki: "Wood_Island_station" },
  { name: "Orient Heights", system: "mbta", line: "Blue", opened: "1952-01-21", wiki: "Orient_Heights_station" },
  { name: "Suffolk Downs", system: "mbta", line: "Blue", opened: "1954-01-19", wiki: "Suffolk_Downs_station" },
  { name: "Beachmont", system: "mbta", line: "Blue", opened: "1954-01-19", wiki: "Beachmont_station" },
  { name: "Revere Beach", system: "mbta", line: "Blue", opened: "1954-01-19", wiki: "Revere_Beach_station" },
  { name: "Wonderland", system: "mbta", line: "Blue", opened: "1954-01-19", wiki: "Wonderland_station" },
  { name: "Bowdoin", system: "mbta", line: "Blue", opened: "1916-03-18", wiki: "Bowdoin_station" },
  { name: "Chinatown", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Chinatown_station_(MBTA)" },
  { name: "Tufts Medical Center", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Tufts_Medical_Center_station" },
  { name: "Back Bay", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Back_Bay_station" },
  { name: "Massachusetts Avenue", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Massachusetts_Avenue_station_(MBTA)" },
  { name: "Ruggles", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Ruggles_station" },
  { name: "Roxbury Crossing", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Roxbury_Crossing_station" },
  { name: "Jackson Square", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Jackson_Square_station_(MBTA)" },
  { name: "Stony Brook", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Stony_Brook_station_(MBTA)" },
  { name: "Green Street", system: "mbta", line: "Orange", opened: "1987-05-04", wiki: "Green_Street_station_(MBTA)" },
  { name: "Forest Hills", system: "mbta", line: "Orange", opened: "1987-12-19", wiki: "Forest_Hills_station_(MBTA)" },
  { name: "Sullivan Square", system: "mbta", line: "Orange", opened: "1901-06-10", wiki: "Sullivan_Square_station" },
  { name: "Community College", system: "mbta", line: "Orange", opened: "1975-04-07", wiki: "Community_College_station_(MBTA)" },
  { name: "Wellington", system: "mbta", line: "Orange", opened: "1975-04-07", wiki: "Wellington_station_(MBTA)" },
  { name: "Malden Center", system: "mbta", line: "Orange", opened: "1975-04-07", wiki: "Malden_Center_station" },
  { name: "Oak Grove", system: "mbta", line: "Orange", opened: "1977-03-20", wiki: "Oak_Grove_station" },
  { name: "Assembly", system: "mbta", line: "Orange", opened: "2014-09-02", wiki: "Assembly_station_(MBTA)" },

  // SEPTA (Philadelphia) — Broad Street Line + Market-Frankford Line
  { name: "Fern Rock Transportation Center", system: "septa", line: "Broad Street", opened: "1956-09-09", wiki: "Fern_Rock_Transportation_Center" },
  { name: "Olney Transportation Center", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Olney_Transportation_Center" },
  { name: "Logan", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Logan_station_(SEPTA)" },
  { name: "Wyoming", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Wyoming_station_(SEPTA)" },
  { name: "Hunting Park", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Hunting_Park_station" },
  { name: "Erie", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Erie_station_(SEPTA)" },
  { name: "North Philadelphia", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "North_Philadelphia_station_(SEPTA)" },
  { name: "Susquehanna–Dauphin", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Susquehanna–Dauphin_station" },
  { name: "Cecil B. Moore", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Cecil_B._Moore_station" },
  { name: "Girard", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Girard_station_(Broad_Street_Line)" },
  { name: "Fairmount", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Fairmount_station_(SEPTA)" },
  { name: "Spring Garden", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Spring_Garden_station_(Broad_Street_Line)" },
  { name: "Race–Vine", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Race–Vine_station" },
  { name: "City Hall", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "City_Hall_station_(SEPTA)" },
  { name: "Walnut–Locust", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Walnut–Locust_station" },
  { name: "Lombard–South", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Lombard–South_station" },
  { name: "Ellsworth–Federal", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Ellsworth–Federal_station" },
  { name: "Tasker–Morris", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Tasker–Morris_station" },
  { name: "Snyder", system: "septa", line: "Broad Street", opened: "1928-09-01", wiki: "Snyder_station" },
  { name: "Oregon", system: "septa", line: "Broad Street", opened: "1938-10-02", wiki: "Oregon_station_(SEPTA)" },
  { name: "AT&T", system: "septa", line: "Broad Street", opened: "1973-09-06", wiki: "AT&T_station_(SEPTA)" },
  { name: "NRG", system: "septa", line: "Broad Street", opened: "1973-09-06", wiki: "NRG_station" },
  { name: "69th Street Transportation Center", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "69th_Street_Transportation_Center" },
  { name: "Millbourne", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "Millbourne_station" },
  { name: "63rd Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "63rd_Street_station_(SEPTA)" },
  { name: "60th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "60th_Street_station_(SEPTA)" },
  { name: "56th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "56th_Street_station_(SEPTA)" },
  { name: "52nd Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "52nd_Street_station_(SEPTA)" },
  { name: "46th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "46th_Street_station_(SEPTA)" },
  { name: "40th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "40th_Street_station_(Market–Frankford_Line)" },
  { name: "34th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "34th_Street_station_(Market–Frankford_Line)" },
  { name: "30th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "30th_Street_station_(Market–Frankford_Line)" },
  { name: "15th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "15th_Street_station_(Market–Frankford_Line)" },
  { name: "13th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "13th_Street_station_(Market–Frankford_Line)" },
  { name: "11th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "11th_Street_station_(Market–Frankford_Line)" },
  { name: "8th Street", system: "septa", line: "Market–Frankford", opened: "1907-03-04", wiki: "8th_Street_station_(Market–Frankford_Line)" },
  { name: "5th Street", system: "septa", line: "Market–Frankford", opened: "1907-10-04", wiki: "5th_Street_Independence_Hall_station" },
  { name: "2nd Street", system: "septa", line: "Market–Frankford", opened: "1907-10-04", wiki: "2nd_Street_station_(Market–Frankford_Line)" },
  { name: "Spring Garden", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Spring_Garden_station_(Market–Frankford_Line)" },
  { name: "Girard", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Girard_station_(Market–Frankford_Line)" },
  { name: "Berks", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Berks_station" },
  { name: "York–Dauphin", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "York–Dauphin_station" },
  { name: "Huntingdon", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Huntingdon_station_(SEPTA)" },
  { name: "Somerset", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Somerset_station_(SEPTA)" },
  { name: "Allegheny", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Allegheny_station_(SEPTA)" },
  { name: "Tioga", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Tioga_station_(SEPTA)" },
  { name: "Erie–Torresdale", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Erie–Torresdale_station" },
  { name: "Church", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Church_station_(Market–Frankford_Line)" },
  { name: "Margaret–Orthodox", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Margaret–Orthodox_station" },
  { name: "Frankford Transportation Center", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Frankford_Transportation_Center" },
  { name: "Arrott Transportation Center", system: "septa", line: "Market–Frankford", opened: "1922-11-05", wiki: "Arrott_Transportation_Center" },
];

const allStations = [...scraped, ...manual];

// Sort by system then by name
allStations.sort((a, b) => {
  if (a.system !== b.system) return a.system.localeCompare(b.system);
  return a.name.localeCompare(b.name);
});

// Batch-fetch coordinates from Wikipedia API
async function fetchCoordinates(stations) {
  const wikiStations = stations.filter((s) => s.wiki);
  const coords = {};
  const batchSize = 25;

  for (let i = 0; i < wikiStations.length; i += batchSize) {
    if (i > 0) await new Promise((r) => setTimeout(r, 1500));
    const batch = wikiStations.slice(i, i + batchSize);
    const titles = batch.map((s) => s.wiki).join("|");
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=coordinates&format=json&redirects=1`;
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "SubwayParty/1.0 (transit birthday tracker; ecormany@gmail.com)" },
      });
      const data = await res.json();

      // Build forward chains: original slug (with underscores) → final resolved title
      const normalizedMap = {};
      for (const n of data.query?.normalized || []) normalizedMap[n.from] = n.to;
      const redirectMap = {};
      for (const r of data.query?.redirects || []) redirectMap[r.from] = r.to;

      // For each slug, follow: slug → normalize → redirect → final title
      // Then build reverse map: final title → slug
      const finalTitleToSlug = {};
      for (const s of batch) {
        let title = s.wiki;
        if (normalizedMap[title]) title = normalizedMap[title];
        else title = title.replace(/_/g, " ");
        if (redirectMap[title]) title = redirectMap[title];
        finalTitleToSlug[title] = s.wiki;
      }

      const pages = data.query?.pages || {};
      for (const page of Object.values(pages)) {
        if (page.coordinates && page.coordinates.length > 0) {
          const c = page.coordinates[0];
          const slug = finalTitleToSlug[page.title];
          if (slug) {
            coords[slug] = [c.lat, c.lon];
          }
        }
      }
    } catch (err) {
      console.error(`Error fetching coords batch at ${i}: ${err.message}`);
    }
  }

  console.error(`Fetched coordinates for ${Object.keys(coords).length} of ${wikiStations.length} stations`);
  return coords;
}

async function main() {
  const coords = await fetchCoordinates(allStations);

  // Generate TypeScript
  const lines = [];
  lines.push(`export interface Station {
  name: string;
  system: string;
  line: string;
  opened: string; // YYYY-MM-DD
  wiki?: string;
  coords?: [number, number]; // [lat, lng]
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
    const wiki = s.wiki ? `, wiki: "${s.wiki.replace(/"/g, '\\"')}"` : "";
    const c = s.wiki && coords[s.wiki]
      ? `, coords: [${coords[s.wiki][0]}, ${coords[s.wiki][1]}]`
      : "";
    lines.push(`  { name: "${name}", system: "${s.system}", line: "${line}", opened: "${s.opened}"${wiki}${c} },`);
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
}

main().catch(console.error);
