import React, { useState } from "react";
import App from "./App";
import blackjack from "./img/blackjack.png";
import poker from "./img/poker.png";
import roulette from "./img/roulette.png";

export default function Cards() {
  // list if games here
  const [game] = useState([
    {
      id: 1,
      name: "BlackJack",
      description:
        "Let's play BlackJack, the most widely played casino banking game in the world!",
      imageSrc: blackjack,
      imageAlt: "BlackJack",
    },
    {
      id: 2,
      name: "Poker",
      description:
        "Poker is a gambling game which involves some luck, but also some skill.",
      imageSrc: poker,
      imageAlt: "Poker",
    },
    {
      id: 3,
      name: "Roulette",
      description:
        "A gambling game in which a ball is dropped onto a wheel with numbered holes in it while the wheel is spinning round.",
      imageSrc: roulette,
      imageAlt: "Roulette",
    },
  ]);

  const nameadmin = "Admin";

  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameClick = (game) => {
    setSelectedGame(game);
    // Set bet to 0 if other game is selected
    setBet(0);
  };

  const confirmBet = (game) => {
    setBet(value);
  };

  const [bet, setBet] = useState(0);

  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    // localStorage to save the state when user logged out
    localStorage.removeItem("loggedIn");
    setLoggedIn(true);
  };

  const setBetMin10 = (event) => {
    setBet(10);
    setValue(0);
  };

  const setBetMin20 = (event) => {
    setBet(20);
    setValue(0);
  };

  const setBetMin30 = (event) => {
    setBet(30);
    setValue(0);
  };

  const restBet = (event) => {
    setBet(0);
    setValue(0);
  };

  return (
    <div>
      {loggedIn ? (
        // if false, display the log in screen
        <App />
      ) : (
        <div>
          <div className="text-white flex justify-center text-3xl font-bold text-gray-900 mx-auto p-5">
            <h1>
              Welcome {""}
              <u>
                <strong>{nameadmin}</strong>
              </u>
              , log in success!
            </h1>
          </div>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-8 sm:py-24 lg:max-w-none lg:py-10">
              <h2 className="text-white text-2xl font-bold">LIST OF GAMES</h2>
              <p className="text-white relative w-full overflow-hidden text-gray-500 text-1xl">
                Choose 1 of the game listed and set your bet
              </p>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {game.map((game) => (
                  <div
                    key={game.id}
                    onClick={() => handleGameClick(game)}
                    className="border rounded-lg group relative bgcolor"
                  >
                    <div className="border-gray rounded-lg relative h-80 w-full overflow-hidden bg-white group-hover:opacity-60 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={game.imageSrc}
                        alt={game.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="ml-5 mt-8 text-lg text-gray-300">
                      <span className="absolute inset-0" />
                      <strong>{game.name}</strong>
                    </h3>
                    <p className="text-base text-lg ml-5 mb-5 font-semibold text-gray-600">
                      {game.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
          {selectedGame && (
            <div>
              <div class="flex justify-center">
                <div class="betblock border  max-w-sm rounded-lg p-10">
                  <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {selectedGame.name}
                  </h5>
                  <img
                    className="relative h-30 w-full overflow-hidden bg-white group-hover:opacity-60 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 mb-5 border"
                    src={selectedGame.imageSrc}
                    alt={selectedGame.imageAlt}
                  />
                  <p class="mb-4 text-4xl font-bold text-neutral-600 dark:text-neutral-200">
                    Your bet is ${bet}
                  </p>
                  <div className="flex justify-center space-x-4 mt-5">
                    <button
                      className="bgcolor hover:bg-gray-900 text-white hover:btnConfirm font-bold py-2 px-2 rounded"
                      onClick={setBetMin10}
                    >
                      Bet $10
                    </button>
                    <button
                      className="bgcolor hover:bg-gray-900 text-white hover:btnConfirm font-bold py-2 px-2 rounded"
                      onClick={setBetMin20}
                    >
                      Bet $20
                    </button>
                    <button
                      className="bgcolor hover:bg-gray-900 text-white hover:btnConfirm font-bold py-2 px-2 rounded"
                      onClick={setBetMin30}
                    >
                      Bet $30
                    </button>
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
          {/*  */}
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
