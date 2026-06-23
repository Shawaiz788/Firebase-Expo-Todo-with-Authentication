# Firebase Todo App (Expo Router)


https://github.com/user-attachments/assets/89566f8b-e2e5-42fc-95cb-5ba8e506da48


A React Native **Todo app** built with **Expo Router** and powered by **Firebase**:
- **Authentication** (sign up, sign in, sign out)
- **Firestore** for storing your todo data

---

## Tech Stack

- **Expo** (React Native)
- **expo-router** (file-based routing)
- **Firebase**
  - Auth (`firebase/auth`)
  - Firestore (`firebase/firestore`)
- **JavaScript/TypeScript**

---

## Requirements

- Node.js (LTS recommended)
- npm
- An Android environment for emulator/device (optional if using Expo Go)
- A Firebase project with:
  - Email/Password authentication enabled
  - Firestore database created

---

## Setup & Installation

### 1) Install dependencies

```bash
npm install
```

### 2) Configure Firebase

Update `FirebaseConfig.ts` with your Firebase project values (e.g. `apiKey`, `authDomain`, `projectId`, etc.).

### 3) Run the app

```bash
npx expo start
```

Then open:
- **Expo Go** (recommended for quick testing), or
- Android/iOS emulator/simulator.

---

## How Authentication Works

- Users can **Sign Up** and **Sign In** with email/password.
- After authentication, the app navigates to the main tab layout.
- **Sign Out** logs the user out and returns to the login screen.

---

## How Todos Work

- Todos are created/updated in **Firestore**.
- Each authenticated user can store and fetch their todo data from Firestore.

---

## Project Structure (high level)

- `app/` - Expo Router screens
- `FirebaseConfig.ts` - Firebase initialization + Auth/Firestore exports
- `app/(tabs)/` - Tab-based navigation screens

---

## Scripts

- Start the app:
  - `npm start`
- Run on Android:
  - `npm run android`
- Run on iOS:
  - `npm run ios`
- Reset project (if using the Expo starter reset script):
  - `npm run reset-project`

---

## Notes

If you face any port conflict warnings while starting Expo, choose the suggested alternate port shown in the terminal.

