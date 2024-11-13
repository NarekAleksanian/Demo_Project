# Getting Started Frontend

### First, create next.js
```bash
npx create-next-app@latest
```

1. Ok to proceed? - y
2. What is your project named? - .
3. Would you like to use TypeScript? - Yes
4. Would you like to use ESLint? - Yes
5. Would you like to use Tailwind CSS? - Yes
6. Would you like your code inside a `src/` directory? - Yes
7. Would you like to use App Router? (recommended) - Yes
8. Would you like to use Turbopack for next dev? - Yes
9. Would you like to customize the import alias (@/* by default)? - No


### Second install dependencies
```bash
yarn install
```


### Third, run the development server:

```bash
npm run dev
```


# Getting Started Backend

### Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```


### If you don't have poetry than run in terminal
```bash
brew install pipx
pipx ensurepath
pipx install poetry
```

### Then install dependencies

```bash
cd backend/
poetry install
poetry lock
```

### Change run as executable file
```bash
cd backend/
chmod +x ./run
```

### Now run with command
```bash
./run
```