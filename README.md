# JSON Cleaner & Stats CLI

A professional Node.js command-line tool that processes large JSON datasets, cleans invalid entries, and generates statistics (email domains, top cities).  
Built as a **mini data pipeline** to demonstrate array methods, string manipulations, file handling, and performance optimization.

---







---

## 🚀 Features
- ✅ Cleans JSON data (normalize emails, split names, trim strings)  
- ✅ Filters invalid users (missing fields, invalid emails)  
- ✅ Saves cleaned data into `output.json`  
- ✅ Generates statistics:
  - Count of email domains
  - Top cities by user count
- ✅ Supports **three CLI commands** (`clean`, `stats`, `all`)
- ✅ Benchmarks execution time
- ✅ Unit tests with Jest
- ✅ ESLint + Prettier for clean code

---

## 🛠 Installation

1. Clone the repo:
```bash
git clone <repo-url>
cd assign-1


---
2. Install dependencies:

npm install


🖥️ Usage

Commands

1. Clean Data → removes invalid entries, saves to output.json
  
   node src/app.js clean --input=../data/input.json --output=../data/output.json

2. Generate Stats → reads cleaned JSON, prints stats
   
   node src/app.js stats --input=../data/output.json --topCities=5

3. All → cleans + prints stats in one go
  
   node src/app.js all --input=../data/input.json --output=../data/output.json --topCities=5


📊 Example Output
Clean Mode
✅ Cleaned data saved to ../data/output.json
clean: 25.3ms

Stats Mode
--- Stats Report ---
Valid users: 4
Domains:
┌─────────────┬─────┐
│ gmail.com   │ 1   │
│ yahoo.com   │ 1   │
│ outlook.com │ 1   │
│ example.com │ 1   │
└─────────────┴─────┘

Top Cities:
┌─────────┬──────────────┬───┐
│ 0       │ 'New York'      │ 2 │
│ 1       │ 'San Francisco' │ 1 │
│ 2       │ 'London'        │ 1 │
└─────────┴─────────────────┴───┘
stats: 18.7ms

All Mode
✅ File written to ../data/output.json
✅ Cleaned data saved to ../data/output.json

--- Full Report ---
Valid users: 4
Domains:
┌─────────────┬─────┐
│ gmail.com   │ 1   │
│ yahoo.com   │ 1   │
│ outlook.com │ 1   │
│ example.com │ 1   │
└─────────────┴─────┘
Top Cities:
┌─────────┬──────────────┬───┐
│ 0       │ 'New York'      │ 2 │
│ 1       │ 'San Francisco' │ 1 │
│ 2       │ 'London'        │ 1 │
└─────────┴─────────────────┴───┘
all: 35.4ms
