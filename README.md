# MyDex: Decentralized Exchange Application

MyDex is a web3-based decentralized exchange application that leverages the Moralis API for fetching current values of ERC20 tokens and the 1inch API for checking allowance and executing swap transactions.

## Getting Started

To set up the project locally, follow these steps:

### 1. Backend Setup (dexBack folder)

1. Navigate to the `dexBack` folder.
2. Create a `.env` file.
3. Add your Moralis API key:

   ```plaintext
   MORALIS_KEY=your_moralis_api_key
   ```

## Install dependencies:

```plaintext
npm install
```


## Start the backend server:

```plaintext
nodemon index.js
```

## 2. Frontend Setup (dex folder)
Navigate to the dex folder.
```cd dex```
Create a .env file.
Add your 1inch API key:

```plaintext
REACT_APP_1INCH_KEY=your_1inch_api_key
```
Install dependencies:

```bash
npm install
```
## Start the frontend application:

```bash
npm start
```
Running the Application
Visit http://localhost:3000 to access the MyDex decentralized exchange locally.

## Important Notes
Ensure your internet connection is stable.
Protect your API keys and do not expose them in public repositories.

## Technologies Used
- Moralis API
- 1inch API
- React.js
- Express.js
  
## Contributing
Feel free to contribute by opening issues or submitting pull requests.





