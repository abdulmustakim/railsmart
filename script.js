const DATA = {
  "stations": [
    {
      "code": "HWH",
      "name": "Howrah Jn",
      "city": "Kolkata",
      "lat": 22.5839,
      "lng": 88.3428,
      "nearby": [
        "SDAH",
        "KOAA",
        "BWN"
      ]
    },
    {
      "code": "SDAH",
      "name": "Sealdah",
      "city": "Kolkata",
      "lat": 22.5676,
      "lng": 88.3695,
      "nearby": [
        "HWH",
        "KOAA",
        "NH"
      ]
    },
    {
      "code": "KOAA",
      "name": "Kolkata Terminal",
      "city": "Kolkata",
      "lat": 22.6029,
      "lng": 88.3831,
      "nearby": [
        "SDAH",
        "HWH"
      ]
    },
    {
      "code": "BWN",
      "name": "Barddhaman Jn",
      "city": "Bardhaman",
      "lat": 23.2324,
      "lng": 87.8615,
      "nearby": [
        "HWH",
        "DGR"
      ]
    },
    {
      "code": "DGR",
      "name": "Durgapur",
      "city": "Durgapur",
      "lat": 23.4957,
      "lng": 87.307,
      "nearby": [
        "BWN",
        "ASN"
      ]
    },
    {
      "code": "ASN",
      "name": "Asansol Jn",
      "city": "Asansol",
      "lat": 23.6889,
      "lng": 86.9661,
      "nearby": [
        "DGR",
        "DHN"
      ]
    },
    {
      "code": "DHN",
      "name": "Dhanbad Jn",
      "city": "Dhanbad",
      "lat": 23.791,
      "lng": 86.4304,
      "nearby": [
        "ASN",
        "GAYA"
      ]
    },
    {
      "code": "GAYA",
      "name": "Gaya Jn",
      "city": "Gaya",
      "lat": 24.8,
      "lng": 85.0,
      "nearby": [
        "DHN",
        "DDU"
      ]
    },
    {
      "code": "DDU",
      "name": "Pt. Deen Dayal Upadhyaya Jn",
      "city": "Mughalsarai",
      "lat": 25.2815,
      "lng": 83.1199,
      "nearby": [
        "GAYA",
        "PRYJ"
      ]
    },
    {
      "code": "PRYJ",
      "name": "Prayagraj Jn",
      "city": "Prayagraj",
      "lat": 25.4358,
      "lng": 81.8463,
      "nearby": [
        "DDU",
        "CNB"
      ]
    },
    {
      "code": "CNB",
      "name": "Kanpur Central",
      "city": "Kanpur",
      "lat": 26.454,
      "lng": 80.35,
      "nearby": [
        "PRYJ",
        "NDLS"
      ]
    },
    {
      "code": "NDLS",
      "name": "New Delhi",
      "city": "Delhi",
      "lat": 28.6414,
      "lng": 77.219,
      "nearby": [
        "DLI",
        "ANVT"
      ]
    },
    {
      "code": "DLI",
      "name": "Old Delhi",
      "city": "Delhi",
      "lat": 28.6602,
      "lng": 77.227,
      "nearby": [
        "NDLS",
        "ANVT"
      ]
    },
    {
      "code": "ANVT",
      "name": "Anand Vihar Terminal",
      "city": "Delhi",
      "lat": 28.647,
      "lng": 77.315,
      "nearby": [
        "NDLS",
        "DLI"
      ]
    },
    {
      "code": "NJP",
      "name": "New Jalpaiguri",
      "city": "Siliguri",
      "lat": 26.6848,
      "lng": 88.4432,
      "nearby": [
        "SGUJ",
        "HDB"
      ]
    },
    {
      "code": "SGUJ",
      "name": "Siliguri Jn",
      "city": "Siliguri",
      "lat": 26.7271,
      "lng": 88.3953,
      "nearby": [
        "NJP"
      ]
    },
    {
      "code": "RHA",
      "name": "Ranaghat Jn",
      "city": "Ranaghat",
      "lat": 23.1761,
      "lng": 88.5667,
      "nearby": [
        "KNJ",
        "SDAH"
      ]
    },
    {
      "code": "KNJ",
      "name": "Krishnanagar City Jn",
      "city": "Krishnanagar",
      "lat": 23.4058,
      "lng": 88.4903,
      "nearby": [
        "RHA",
        "NDAE"
      ]
    },
    {
      "code": "NDAE",
      "name": "Nabadwip Dham",
      "city": "Nabadwip",
      "lat": 23.4071,
      "lng": 88.3675,
      "nearby": [
        "KNJ",
        "BWN"
      ]
    }
  ],
  "trains": [
    {
      "trainNo": "12301",
      "trainName": "Howrah Rajdhani Express",
      "type": "Rajdhani",
      "from": "HWH",
      "to": "NDLS",
      "departure": "16:50",
      "arrival": "10:05+1",
      "duration": "17h 15m",
      "route": [
        "HWH",
        "DGR",
        "ASN",
        "DHN",
        "GAYA",
        "DDU",
        "PRYJ",
        "CNB",
        "NDLS"
      ],
      "pantry": true,
      "fares": {
        "3A": 2440,
        "2A": 3420,
        "1A": 5980
      },
      "availability": [
        {
          "date": "2026-06-20",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 4
        },
        {
          "date": "2026-06-20",
          "class": "2A",
          "quota": "GN",
          "status": "WL",
          "seats": 0
        },
        {
          "date": "2026-06-21",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 11
        },
        {
          "date": "2026-06-22",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 8
        },
        {
          "date": "2026-06-22",
          "class": "2A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 2
        },
        {
          "date": "2026-06-23",
          "class": "3A",
          "quota": "GN",
          "status": "WL",
          "seats": 0
        },
        {
          "date": "2026-06-24",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 17
        }
      ],
      "coaches": [
        {
          "coach": "A1",
          "class": "2A",
          "humanCount": 42,
          "capacity": 54,
          "crowd": "Medium",
          "jio": 4,
          "airtel": 5,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 88,
          "safety": 92,
          "noise": "Low",
          "position": "Middle",
          "notes": "Quiet AC coach with strong Airtel signal"
        },
        {
          "coach": "B1",
          "class": "3A",
          "humanCount": 51,
          "capacity": 72,
          "crowd": "Medium",
          "jio": 5,
          "airtel": 4,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 86,
          "safety": 90,
          "noise": "Medium",
          "position": "Middle",
          "notes": "Good balance of crowd and signal"
        },
        {
          "coach": "B2",
          "class": "3A",
          "humanCount": 34,
          "capacity": 72,
          "crowd": "Low",
          "jio": 5,
          "airtel": 5,
          "vi": 4,
          "bsnl": 3,
          "cleanliness": 92,
          "safety": 94,
          "noise": "Low",
          "position": "Near middle",
          "notes": "Recommended: lowest crowd and best signal"
        },
        {
          "coach": "B3",
          "class": "3A",
          "humanCount": 69,
          "capacity": 72,
          "crowd": "High",
          "jio": 3,
          "airtel": 4,
          "vi": 2,
          "bsnl": 2,
          "cleanliness": 77,
          "safety": 82,
          "noise": "High",
          "position": "Rear side",
          "notes": "Crowded after Dhanbad"
        }
      ]
    },
    {
      "trainNo": "12273",
      "trainName": "Howrah New Delhi Duronto Express",
      "type": "Duronto",
      "from": "HWH",
      "to": "NDLS",
      "departure": "08:35",
      "arrival": "06:25+1",
      "duration": "21h 50m",
      "route": [
        "HWH",
        "DHN",
        "GAYA",
        "DDU",
        "CNB",
        "NDLS"
      ],
      "pantry": true,
      "fares": {
        "3A": 2235,
        "2A": 3145,
        "SL": 870
      },
      "availability": [
        {
          "date": "2026-06-20",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 24
        },
        {
          "date": "2026-06-21",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 7
        },
        {
          "date": "2026-06-22",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 19
        },
        {
          "date": "2026-06-22",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 6
        },
        {
          "date": "2026-06-23",
          "class": "3A",
          "quota": "GN",
          "status": "RAC",
          "seats": 0
        },
        {
          "date": "2026-06-24",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 3
        }
      ],
      "coaches": [
        {
          "coach": "S1",
          "class": "SL",
          "humanCount": 64,
          "capacity": 80,
          "crowd": "Medium",
          "jio": 4,
          "airtel": 3,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 75,
          "safety": 79,
          "noise": "Medium",
          "position": "Front",
          "notes": "Average crowd, okay for short travel"
        },
        {
          "coach": "S2",
          "class": "SL",
          "humanCount": 39,
          "capacity": 80,
          "crowd": "Low",
          "jio": 5,
          "airtel": 4,
          "vi": 4,
          "bsnl": 2,
          "cleanliness": 83,
          "safety": 85,
          "noise": "Low",
          "position": "Front-middle",
          "notes": "Recommended sleeper coach"
        },
        {
          "coach": "S3",
          "class": "SL",
          "humanCount": 91,
          "capacity": 80,
          "crowd": "Very High",
          "jio": 2,
          "airtel": 3,
          "vi": 2,
          "bsnl": 1,
          "cleanliness": 61,
          "safety": 70,
          "noise": "High",
          "position": "Rear",
          "notes": "Avoid if you need comfort"
        },
        {
          "coach": "B1",
          "class": "3A",
          "humanCount": 48,
          "capacity": 72,
          "crowd": "Medium",
          "jio": 4,
          "airtel": 4,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 86,
          "safety": 88,
          "noise": "Low",
          "position": "Middle",
          "notes": "Good AC option"
        }
      ]
    },
    {
      "trainNo": "13141",
      "trainName": "Teesta Torsa Express",
      "type": "Mail/Express",
      "from": "SDAH",
      "to": "NJP",
      "departure": "13:40",
      "arrival": "04:55+1",
      "duration": "15h 15m",
      "route": [
        "SDAH",
        "RHA",
        "KNJ",
        "NDAE",
        "BWN",
        "DGR",
        "ASN",
        "NJP"
      ],
      "pantry": false,
      "fares": {
        "SL": 355,
        "3A": 980,
        "2A": 1405
      },
      "availability": [
        {
          "date": "2026-06-20",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 12
        },
        {
          "date": "2026-06-20",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 5
        },
        {
          "date": "2026-06-21",
          "class": "SL",
          "quota": "GN",
          "status": "WL",
          "seats": 0
        },
        {
          "date": "2026-06-22",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 18
        },
        {
          "date": "2026-06-22",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 4
        },
        {
          "date": "2026-06-23",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 6
        },
        {
          "date": "2026-06-24",
          "class": "SL",
          "quota": "GN",
          "status": "WL",
          "seats": 0
        }
      ],
      "coaches": [
        {
          "coach": "S1",
          "class": "SL",
          "humanCount": 76,
          "capacity": 80,
          "crowd": "High",
          "jio": 3,
          "airtel": 3,
          "vi": 2,
          "bsnl": 2,
          "cleanliness": 66,
          "safety": 74,
          "noise": "High",
          "position": "Front",
          "notes": "Busy coach near entry"
        },
        {
          "coach": "S2",
          "class": "SL",
          "humanCount": 32,
          "capacity": 80,
          "crowd": "Low",
          "jio": 4,
          "airtel": 5,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 81,
          "safety": 86,
          "noise": "Low",
          "position": "Middle",
          "notes": "Best for less crowd"
        },
        {
          "coach": "S3",
          "class": "SL",
          "humanCount": 47,
          "capacity": 80,
          "crowd": "Medium",
          "jio": 5,
          "airtel": 4,
          "vi": 4,
          "bsnl": 3,
          "cleanliness": 78,
          "safety": 84,
          "noise": "Medium",
          "position": "Rear-middle",
          "notes": "Best signal choice"
        },
        {
          "coach": "B1",
          "class": "3A",
          "humanCount": 36,
          "capacity": 72,
          "crowd": "Low",
          "jio": 4,
          "airtel": 4,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 89,
          "safety": 91,
          "noise": "Low",
          "position": "Middle",
          "notes": "Good for family"
        }
      ]
    },
    {
      "trainNo": "12343",
      "trainName": "Darjeeling Mail",
      "type": "Superfast",
      "from": "SDAH",
      "to": "NJP",
      "departure": "22:05",
      "arrival": "08:15+1",
      "duration": "10h 10m",
      "route": [
        "SDAH",
        "RHA",
        "BWN",
        "DGR",
        "ASN",
        "NJP"
      ],
      "pantry": false,
      "fares": {
        "SL": 390,
        "3A": 1075,
        "2A": 1530
      },
      "availability": [
        {
          "date": "2026-06-20",
          "class": "SL",
          "quota": "GN",
          "status": "WL",
          "seats": 0
        },
        {
          "date": "2026-06-20",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 3
        },
        {
          "date": "2026-06-21",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 9
        },
        {
          "date": "2026-06-22",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 15
        },
        {
          "date": "2026-06-22",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 1
        },
        {
          "date": "2026-06-23",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 2
        },
        {
          "date": "2026-06-24",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 5
        }
      ],
      "coaches": [
        {
          "coach": "S1",
          "class": "SL",
          "humanCount": 81,
          "capacity": 80,
          "crowd": "Very High",
          "jio": 3,
          "airtel": 4,
          "vi": 2,
          "bsnl": 1,
          "cleanliness": 70,
          "safety": 78,
          "noise": "High",
          "position": "Front",
          "notes": "Very crowded during holidays"
        },
        {
          "coach": "S4",
          "class": "SL",
          "humanCount": 41,
          "capacity": 80,
          "crowd": "Low",
          "jio": 4,
          "airtel": 4,
          "vi": 4,
          "bsnl": 3,
          "cleanliness": 84,
          "safety": 88,
          "noise": "Low",
          "position": "Rear-middle",
          "notes": "Recommended for calm travel"
        },
        {
          "coach": "B2",
          "class": "3A",
          "humanCount": 38,
          "capacity": 72,
          "crowd": "Low",
          "jio": 5,
          "airtel": 5,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 91,
          "safety": 92,
          "noise": "Low",
          "position": "Middle",
          "notes": "Strong network and low crowd"
        }
      ]
    },
    {
      "trainNo": "13145",
      "trainName": "Radhikapur Express",
      "type": "Express",
      "from": "KOAA",
      "to": "NJP",
      "departure": "19:30",
      "arrival": "08:55+1",
      "duration": "13h 25m",
      "route": [
        "KOAA",
        "BWN",
        "DGR",
        "ASN",
        "NJP"
      ],
      "pantry": false,
      "fares": {
        "SL": 330,
        "3A": 940,
        "2A": 1370
      },
      "availability": [
        {
          "date": "2026-06-20",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 28
        },
        {
          "date": "2026-06-21",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 21
        },
        {
          "date": "2026-06-22",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 8
        },
        {
          "date": "2026-06-23",
          "class": "3A",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 7
        },
        {
          "date": "2026-06-24",
          "class": "SL",
          "quota": "GN",
          "status": "AVAILABLE",
          "seats": 12
        }
      ],
      "coaches": [
        {
          "coach": "S1",
          "class": "SL",
          "humanCount": 55,
          "capacity": 80,
          "crowd": "Medium",
          "jio": 4,
          "airtel": 3,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 77,
          "safety": 81,
          "noise": "Medium",
          "position": "Front",
          "notes": "Normal crowd"
        },
        {
          "coach": "S5",
          "class": "SL",
          "humanCount": 27,
          "capacity": 80,
          "crowd": "Low",
          "jio": 5,
          "airtel": 4,
          "vi": 4,
          "bsnl": 3,
          "cleanliness": 86,
          "safety": 89,
          "noise": "Low",
          "position": "Rear",
          "notes": "Best low-crowd sleeper option"
        },
        {
          "coach": "B1",
          "class": "3A",
          "humanCount": 44,
          "capacity": 72,
          "crowd": "Medium",
          "jio": 4,
          "airtel": 5,
          "vi": 3,
          "bsnl": 2,
          "cleanliness": 85,
          "safety": 87,
          "noise": "Low",
          "position": "Middle",
          "notes": "Strong Airtel network"
        }
      ]
    }
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORAGE_KEYS = {
  alerts: 'railsmart_static_alerts',
  reports: 'railsmart_static_reports'
};

const state = {
  stations: DATA.stations,
  trains: structuredClone(DATA.trains),
  lastSearch: null
};

function getStored(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]'); }
  catch { return []; }
}

function setStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalize(value) {
  return String(value || '').trim().toUpperCase();
}

function statusBadge(value) {
  const text = String(value || '').toLowerCase();
  if (text.includes('low') || text.includes('available') || text.includes('good') || text.includes('excellent')) return 'good';
  if (text.includes('medium')) return 'warn';
  if (text.includes('high') || text.includes('weak')) return 'danger';
  return '';
}

function stationName(code) {
  const station = state.stations.find((s) => normalize(s.code) === normalize(code));
  return station ? `${station.name} (${station.code})` : code;
}

function rupees(value) {
  if (!value) return 'Not listed';
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

function parseDate(value) {
  const date = value ? new Date(`${value}T00:00:00`) : new Date();
  if (Number.isNaN(date.getTime())) return new Date();
  return date;
}

function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function addDays(dateString, days) {
  const date = parseDate(dateString);
  date.setDate(date.getDate() + days);
  return formatDate(date);
}

function signalText(score) {
  if (score >= 5) return 'Excellent';
  if (score >= 4) return 'Good';
  if (score >= 3) return 'Average';
  if (score >= 2) return 'Weak';
  return 'Very Weak';
}

function crowdPenalty(crowd) {
  const map = { 'LOW': 100, 'MEDIUM': 72, 'HIGH': 42, 'VERY HIGH': 18 };
  return map[normalize(crowd)] ?? 60;
}

function calculateCoachScore(coach) {
  const signalAverage = ((Number(coach.jio) || 0) + (Number(coach.airtel) || 0) + (Number(coach.vi) || 0) + (Number(coach.bsnl) || 0)) / 4;
  const signalScore = signalAverage * 20;
  const score = (Number(coach.cleanliness || 0) * 0.25) +
    (Number(coach.safety || 0) * 0.25) +
    (crowdPenalty(coach.crowd) * 0.30) +
    (signalScore * 0.20);
  return Math.max(0, Math.min(100, Math.round(score)));
}

function enrichCoach(coach) {
  const networks = [
    ['Jio', Number(coach.jio || 0)],
    ['Airtel', Number(coach.airtel || 0)],
    ['Vi', Number(coach.vi || 0)],
    ['BSNL', Number(coach.bsnl || 0)]
  ].sort((a, b) => b[1] - a[1]);
  const humanCount = Number(coach.humanCount || 0);
  const capacity = Number(coach.capacity || 1);
  return {
    ...coach,
    humanCount,
    capacity,
    occupancy: Math.round((humanCount / capacity) * 100),
    comfortScore: calculateCoachScore(coach),
    bestNetwork: networks[0][0],
    signalText: signalText(networks[0][1])
  };
}

function applyReports() {
  state.trains = structuredClone(DATA.trains);
  const reports = getStored(STORAGE_KEYS.reports);
  for (const report of reports) {
    const train = state.trains.find((t) => normalize(t.trainNo) === normalize(report.trainNo));
    if (!train) continue;
    const coach = train.coaches.find((c) => normalize(c.coach) === normalize(report.coach));
    if (!coach) continue;
    coach.humanCount = Number(report.humanCount || coach.humanCount);
    coach.crowd = report.crowd || coach.crowd;
    coach.cleanliness = Number(report.cleanliness || coach.cleanliness);
    coach.safety = Number(report.safety || coach.safety);
    coach.notes = report.notes || coach.notes;
    coach.userReports = Number(coach.userReports || 0) + 1;
  }
}

function trainMatchesRoute(train, from, to) {
  const route = train.route || [];
  const fromCode = normalize(from);
  const toCode = normalize(to);
  const fromIndex = route.findIndex((code) => normalize(code) === fromCode);
  const toIndex = route.findIndex((code) => normalize(code) === toCode);
  if (fromIndex !== -1 && toIndex !== -1) return fromIndex < toIndex;
  return normalize(train.from) === fromCode && normalize(train.to) === toCode;
}

function findAvailability(train, date, travelClass, quota = 'GN') {
  return (train.availability || []).find((item) =>
    item.date === date &&
    normalize(item.class) === normalize(travelClass) &&
    normalize(item.quota || 'GN') === normalize(quota || 'GN')
  );
}

function isConfirmedAvailable(availability, passengers) {
  return normalize(availability?.status) === 'AVAILABLE' && Number(availability?.seats || 0) >= Number(passengers || 1);
}

function buildResult(train, availability, from, to) {
  const coaches = (train.coaches || []).map(enrichCoach).sort((a, b) => b.comfortScore - a.comfortScore);
  return {
    trainNo: train.trainNo,
    trainName: train.trainName,
    type: train.type,
    from,
    to,
    departure: train.departure,
    arrival: train.arrival,
    duration: train.duration,
    pantry: train.pantry,
    route: train.route,
    fare: train.fares?.[availability.class] || null,
    class: availability.class,
    quota: availability.quota || 'GN',
    date: availability.date,
    status: availability.status,
    seats: availability.seats,
    bestCoach: coaches[0] || null,
    coaches
  };
}

function searchAvailable(query) {
  const from = normalize(query.from);
  const to = normalize(query.to);
  const date = query.date || formatDate(new Date());
  const travelClass = normalize(query.class || 'SL');
  const quota = normalize(query.quota || 'GN');
  const passengers = Number(query.passengers || 1);

  return state.trains
    .filter((train) => trainMatchesRoute(train, from, to))
    .map((train) => {
      const availability = findAvailability(train, date, travelClass, quota);
      if (!availability || !isConfirmedAvailable(availability, passengers)) return null;
      return buildResult(train, availability, from, to);
    })
    .filter(Boolean)
    .sort((a, b) => {
      if (b.seats !== a.seats) return b.seats - a.seats;
      return (b.bestCoach?.comfortScore || 0) - (a.bestCoach?.comfortScore || 0);
    });
}

function getNearbyStations(code) {
  const station = state.stations.find((s) => normalize(s.code) === normalize(code));
  if (!station) return [];
  return (station.nearby || [])
    .map((nearCode) => state.stations.find((s) => normalize(s.code) === normalize(nearCode)))
    .filter(Boolean);
}

function init() {
  $('#apiMode').textContent = 'Static demo mode · HTML CSS JS only';
  applyReports();
  loadStations();
  bindEvents();
  searchTrains();
  loadCoachIntel();
  loadDashboard();
}

function loadStations() {
  const list = $('#stationList');
  list.innerHTML = state.stations.map((s) => `<option value="${s.code}">${s.name}, ${s.city}</option>`).join('');
}

function bindEvents() {
  $('#searchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    searchTrains();
  });

  $('#loadCoach').addEventListener('click', () => loadCoachIntel());
  $('#refreshDashboard').addEventListener('click', () => loadDashboard());

  $('#alertForm').addEventListener('submit', (event) => {
    event.preventDefault();
    saveAlert();
  });

  $('#reportForm').addEventListener('submit', (event) => {
    event.preventDefault();
    submitReport();
  });
}

function currentSearchParams() {
  return {
    from: $('#from').value.trim().toUpperCase(),
    to: $('#to').value.trim().toUpperCase(),
    date: $('#date').value,
    class: $('#travelClass').value,
    quota: $('#quota').value,
    passengers: $('#passengers').value || '1'
  };
}

function searchTrains() {
  applyReports();
  const params = currentSearchParams();
  const results = searchAvailable(params);
  const nearbySuggestions = [];

  for (const station of getNearbyStations(params.from)) {
    const nearbyResults = searchAvailable({ ...params, from: station.code });
    if (nearbyResults.length) nearbySuggestions.push({ type: 'from', station, count: nearbyResults.length, best: nearbyResults[0] });
  }

  for (const station of getNearbyStations(params.to)) {
    const nearbyResults = searchAvailable({ ...params, to: station.code });
    if (nearbyResults.length) nearbySuggestions.push({ type: 'to', station, count: nearbyResults.length, best: nearbyResults[0] });
  }

  state.lastSearch = { results, nearbySuggestions };
  renderSearch({
    results,
    nearbySuggestions: nearbySuggestions.slice(0, 6),
    disclaimer: 'Offline demo data. Use authorized railway API for official live data.'
  });
  loadFlexibleDates(params);
}

function renderSearch(data) {
  const { results, nearbySuggestions, disclaimer } = data;
  const summary = $('#searchSummary');
  summary.classList.remove('hidden');
  summary.innerHTML = `Found <b>${results.length}</b> train option(s) with confirmed available seats only. <span class="muted">${disclaimer}</span>`;

  const resultsBox = $('#results');
  if (!results.length) {
    resultsBox.innerHTML = `<div class="card"><h3>No confirmed seats found</h3><p>Try another date, class, or nearby station. Flexible date suggestions are shown below.</p></div>`;
  } else {
    resultsBox.innerHTML = results.map((train) => `
      <article class="card">
        <h3>${train.trainName}</h3>
        <p>${train.trainNo} · ${train.type} · ${stationName(train.from)} → ${stationName(train.to)}</p>
        <div class="badge-row">
          <span class="badge good">${train.status} ${train.seats} seats</span>
          <span class="badge">${train.class}</span>
          <span class="badge">${train.duration}</span>
          ${train.pantry ? '<span class="badge good">Pantry</span>' : '<span class="badge">No pantry</span>'}
        </div>
        <div class="meta-list">
          <div><span>Departure</span><strong>${train.departure}</strong></div>
          <div><span>Arrival</span><strong>${train.arrival}</strong></div>
          <div><span>Fare</span><strong>${rupees(train.fare)}</strong></div>
          <div><span>Best coach</span><strong>${train.bestCoach ? train.bestCoach.coach + ' · ' + train.bestCoach.comfortScore + '/100' : 'Not available'}</strong></div>
          <div><span>Best network</span><strong>${train.bestCoach ? train.bestCoach.bestNetwork + ' · ' + train.bestCoach.signalText : 'Not available'}</strong></div>
        </div>
        <button class="btn ghost" onclick="selectCoachTrain('${train.trainNo}')">View Coach Details</button>
      </article>
    `).join('');
  }

  const nearby = $('#nearby');
  if (!nearbySuggestions.length) {
    nearby.innerHTML = '';
  } else {
    nearby.innerHTML = `
      <h3>Nearby station suggestions</h3>
      ${nearbySuggestions.map((item) => `
        <div class="nearby-item">
          Try ${item.type === 'from' ? 'from' : 'to'} <b>${item.station.name} (${item.station.code})</b> — ${item.count} confirmed option(s). Best: ${item.best.trainName}, ${item.best.seats} seats.
        </div>
      `).join('')}
    `;
  }
}

function loadFlexibleDates(params) {
  const days = [];
  for (let i = -3; i <= 3; i++) {
    const date = addDays(params.date, i);
    const results = searchAvailable({ ...params, date });
    days.push({
      date,
      offset: i,
      availableTrains: results.length,
      totalSeats: results.reduce((sum, r) => sum + Number(r.seats || 0), 0),
      best: results[0] || null
    });
  }
  const maxSeats = Math.max(...days.map((d) => d.totalSeats), 0);
  $('#flexDates').innerHTML = days.map((day) => `
    <div class="date-card ${day.totalSeats === maxSeats && maxSeats > 0 ? 'best' : ''}">
      <span class="muted">${day.date}</span>
      <b>${day.totalSeats}</b>
      <small>${day.availableTrains} train(s) available</small>
      <p>${day.best ? `${day.best.trainName}<br>${day.best.seats} seats` : 'No confirmed seats'}</p>
    </div>
  `).join('');
}

window.selectCoachTrain = (trainNo) => {
  $('#coachTrain').value = trainNo;
  location.hash = '#coach';
  loadCoachIntel();
};

function loadCoachIntel() {
  applyReports();
  const trainNo = $('#coachTrain').value.trim();
  if (!trainNo) return;
  const train = state.trains.find((t) => normalize(t.trainNo) === normalize(trainNo));
  if (!train) {
    $('#bestCoach').classList.remove('hidden');
    $('#bestCoach').innerHTML = `<h3>Train not found</h3><p>Try 12301, 12273, 13141, 12343 or 13145.</p>`;
    $('#coachCards').innerHTML = '';
    return;
  }
  const coaches = (train.coaches || []).map(enrichCoach).sort((a, b) => b.comfortScore - a.comfortScore);
  renderCoachIntel({ trainNo: train.trainNo, trainName: train.trainName, coaches, bestCoach: coaches[0] });
}

function renderCoachIntel(data) {
  const best = $('#bestCoach');
  best.classList.remove('hidden');
  best.innerHTML = `
    <h3>Recommended Coach: ${data.bestCoach?.coach || 'Not available'}</h3>
    <p>${data.trainName} (${data.trainNo}) · ${data.bestCoach?.notes || 'No notes'}</p>
    <div class="badge-row">
      <span class="badge good">Comfort ${data.bestCoach?.comfortScore || 0}/100</span>
      <span class="badge ${statusBadge(data.bestCoach?.crowd)}">Crowd: ${data.bestCoach?.crowd || '-'}</span>
      <span class="badge">People: ${data.bestCoach?.humanCount || '-'}</span>
      <span class="badge good">Best signal: ${data.bestCoach?.bestNetwork || '-'}</span>
    </div>
  `;

  $('#coachCards').innerHTML = data.coaches.map((coach) => `
    <article class="card">
      <div class="coach-top">
        <div>
          <h3>Coach ${coach.coach}</h3>
          <p>${coach.class} · Position: ${coach.position}</p>
        </div>
        <div class="score-ring" style="--score:${coach.comfortScore}"><span>${coach.comfortScore}</span></div>
      </div>
      <div class="badge-row">
        <span class="badge ${statusBadge(coach.crowd)}">${coach.crowd} Crowd</span>
        <span class="badge">${coach.humanCount}/${coach.capacity} people</span>
        <span class="badge good">${coach.occupancy}% occupancy</span>
      </div>
      <div class="signal-table">
        <div><b>${coach.jio}/5</b><small>Jio</small></div>
        <div><b>${coach.airtel}/5</b><small>Airtel</small></div>
        <div><b>${coach.vi}/5</b><small>Vi</small></div>
        <div><b>${coach.bsnl}/5</b><small>BSNL</small></div>
      </div>
      <div class="meta-list">
        <div><span>Cleanliness</span><strong>${coach.cleanliness}/100</strong></div>
        <div><span>Safety</span><strong>${coach.safety}/100</strong></div>
        <div><span>Noise</span><strong>${coach.noise}</strong></div>
        <div><span>Reports</span><strong>${coach.userReports || 0}</strong></div>
      </div>
      <p>${coach.notes}</p>
    </article>
  `).join('');
}

function saveAlert() {
  const payload = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toLocaleString(),
    name: $('#alertName').value,
    email: $('#alertEmail').value,
    from: $('#alertFrom').value.trim().toUpperCase(),
    to: $('#alertTo').value.trim().toUpperCase(),
    date: $('#alertDate').value,
    class: $('#alertClass').value.trim().toUpperCase(),
    minSeats: $('#alertSeats').value
  };
  const alerts = getStored(STORAGE_KEYS.alerts);
  alerts.unshift(payload);
  setStored(STORAGE_KEYS.alerts, alerts.slice(0, 25));
  $('#alertMsg').textContent = 'Alert saved in this browser. In a real app, server/email/WhatsApp integration is needed.';
  loadDashboard();
}

function submitReport() {
  const payload = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toLocaleString(),
    trainNo: $('#reportTrain').value.trim().toUpperCase(),
    coach: $('#reportCoach').value.trim().toUpperCase(),
    date: $('#date').value,
    humanCount: $('#humanCount').value,
    crowd: $('#crowd').value,
    cleanliness: $('#cleanliness').value,
    safety: $('#safety').value,
    notes: $('#notes').value
  };
  const reports = getStored(STORAGE_KEYS.reports);
  reports.unshift(payload);
  setStored(STORAGE_KEYS.reports, reports.slice(0, 50));
  $('#reportMsg').textContent = 'Report submitted locally and coach score updated.';
  $('#coachTrain').value = payload.trainNo;
  applyReports();
  loadCoachIntel();
  loadDashboard();
}

function loadDashboard() {
  applyReports();
  const alerts = getStored(STORAGE_KEYS.alerts);
  const reports = getStored(STORAGE_KEYS.reports);
  const allCoaches = state.trains.flatMap((train) =>
    (train.coaches || []).map((coach) => ({ ...enrichCoach(coach), trainName: train.trainName, trainNo: train.trainNo }))
  ).sort((a, b) => b.comfortScore - a.comfortScore);
  const availableSeatCount = state.trains.reduce((sum, train) =>
    sum + (train.availability || []).reduce((inner, item) => inner + (normalize(item.status) === 'AVAILABLE' ? Number(item.seats || 0) : 0), 0), 0
  );

  $('#dashboardCards').innerHTML = `
    <div class="card"><h3>${state.trains.length}</h3><p>Trains in system</p></div>
    <div class="card"><h3>${allCoaches.length}</h3><p>Coaches tracked</p></div>
    <div class="card"><h3>${availableSeatCount}</h3><p>Total confirmed demo seats</p></div>
    <div class="card"><h3>${reports.length}</h3><p>User coach reports</p></div>
    <div class="card"><h3>${alerts.length}</h3><p>Saved seat alerts</p></div>
    <div class="card"><h3>STATIC</h3><p>Current data mode</p></div>
  `;

  $('#dashboardLists').innerHTML = `
    <div class="list-box">
      <h3>Top Comfort Coaches</h3>
      <ul>${allCoaches.slice(0, 7).map((c) => `<li>${c.trainName} · Coach ${c.coach} · ${c.comfortScore}/100 · ${c.crowd}</li>`).join('')}</ul>
    </div>
    <div class="list-box">
      <h3>Latest Activity</h3>
      <ul>
        ${alerts.slice(0, 5).map((a) => `<li>Alert: ${a.from} → ${a.to}, ${a.class}, ${a.date}</li>`).join('') || '<li>No alerts yet</li>'}
        ${reports.slice(0, 5).map((r) => `<li>Report: Train ${r.trainNo}, Coach ${r.coach}, ${r.crowd}</li>`).join('') || '<li>No reports yet</li>'}
      </ul>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', init);
