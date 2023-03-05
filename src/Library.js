import React, { useState } from "react";
import App from "./App";
import { games } from "./DataListGames";
import DataListGames from "./DataListGames";
import Card from "./Card";

export default function Cards() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [bet, setBet] = useState(0);
  const [value, setValue] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const betAmounts = [10, 20, 30];

  // localStorage to save the state when user logged out
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleGameClick = (game) => {
    setSelectedGame(game);
    // Set bet to 0 if other game is selected
    setBet(0);
  };

  const confirmBet = () => {
    setBet(value);
  };

  // Change value of bet
  const setBetAmount = (minBet) => {
    setBet(minBet);
    setValue(0);
  };

  const restBet = () => {
    setBet(0);
    setValue(0);
  };

  return (
    <div>
      {loggedIn ? (
        // if true, display the App component
        <App />
      ) : (
        // otherwise, display the list of games
        <div>
          {/* Here i capture the data from DataListGames */}
          <DataListGames />
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-10">
              <h2 className="text-white text-2xl font-bold">LIST OF GAMES</h2>
              <p className="text-white relative w-full overflow-hidden text-gray-500 text-1xl">
                Choose 1 of the game listed and set your bet
              </p>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-5 lg:space-y-0 ">
                {games.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleGameClick(game)}
                    className="rounded-lg rounded group relative "
                  >
                    {/* I use here the prop "game" to call the info from Card.js */}
                    <Card game={game} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
          {selectedGame && (
            <div>
              <div className="flex justify-center">
                <div className="betblock border max-w-sm rounded-lg p-10">
                  <h5 className="flex mb-4 text-xl justify-center font-bold text-neutral-800 dark:text-neutral-50">
                    {selectedGame.name}
                  </h5>
                  <img
                    className="relative h-30 w-full overflow-hidden bg-white group-hover:opacity-60 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 mb-5 border"
                    src={selectedGame.imageSrc}
                    alt={selectedGame.imageAlt}
                  />
                  <p className="mb-4 text-4xl font-bold text-neutral-600 dark:text-neutral-200">
                    Your bet is ${bet}
                  </p>
                  <div className="flex justify-center mt-5">
                    <div>
                      {betAmounts.map((amount) => (
                        // Button to bet $10, $20, $30
                        <button
                          key={amount}
                          className="bgcolor hover:bg-gray-900 text-white hover:btnConfirm font-bold py-2 px-2 rounded mr-3"
                          onClick={() => setBetAmount(amount)}
                        >
                          Bet ${amount}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-center mb-4 mt-5 justify-item-center text-gray-400">
                    -- or enter the amount and then sumit--
                  </p>
                  <div>
                    <label className="justify-center mb-5 flex text-center">
                      <input
                        type="text"
                        value={value}
                        onChange={handleChange}
                        className="text-center"
                      />
                    </label>
                  </div>
                  <div className="mx-auto flex mt-4 grid justify-item-center">
                    <button
                      type="button"
                      onClick={confirmBet}
                      class="btnConfirm text-black hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-5"
                    >
                      Sumit amount
                    </button>

                    <hr></hr>

                    <button
                      type="button"
                      class="bgcolor mt-5 hover:bg-gray-900 text-white hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-2"
                      onClick={restBet}
                    >
                      Restore your bet
                    </button>

                    <button
                      type="button"
                      class="bgcolor hover:bg-gray-900 text-white hover:btnConfirm focus:outline-none  font-medium rounded-lg text-sm px-7 py-2.5 mb-3"
                      onClick={() => setSelectedGame(setBet(bet - bet))}
                    >
                      Deselect game
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Sign Out button here */}
          <div class="mx-auto mt-5 relative h-32 w-32">
            <button
              onClick={handleLogout}
              type="button"
              class="text-white mt-5 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-1 mb-2 btnSignOut dark:focus:ring-gray-700 dark:border-gray-700"
            >
              SIGN OUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
