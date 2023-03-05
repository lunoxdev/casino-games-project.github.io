import copycat from "./img/copycat.jpeg";
import dancingdrums from "./img/dancingdrums.jpeg";
import pirategold from "./img/pirategold.png";
import epicjackpot from "./img/JackPot.png";
import cashfriend from "./img/cashfriend.png";
import fivewishes from "./img/fivewishes.jpeg";
import diamondfiesta from "./img/diamondfiesta.jpeg";
import jackpot from "./img/jackpot.jpeg";

// list of games here
export const games = [
  {
    id: 0,
    name: "Copy Cat",
    imageSrc: copycat,
    imageAlt: "Copy Cat",
  },
  {
    id: 1,
    name: "Dancing Drums",
    imageSrc: dancingdrums,
    imageAlt: "Dancing Drums",
  },
  {
    id: 2,
    name: "Pirate Gold",
    imageSrc: pirategold,
    imageAlt: "Pirate Gold",
  },
  {
    id: 3,
    name: "Cash Friend",
    imageSrc: cashfriend,
    imageAlt: "Cash Friend",
  },
  {
    id: 4,
    name: "Epic JackPot",
    imageSrc: epicjackpot,
    imageAlt: "Epic JackPot",
  },
  {
    id: 5,
    name: "5 Wishes",
    imageSrc: fivewishes,
    imageAlt: "5 Wishes",
  },
  {
    id: 6,
    name: "Diamond Fiesta",
    imageSrc: diamondfiesta,
    imageAlt: "Diamond Fiesta",
  },
  {
    id: 7,
    name: "JackPot Crush",
    imageSrc: jackpot,
    imageAlt: "JackPot Crush",
  },
];

function DataListGames() {
  return (
    <div className="text-white flex justify-center text-3xl font-bold text-gray-900 mx-auto p-5">
      {/* Successful login message */}
      <h1>
        Welcome {""}
        <u>
          <strong>Admin</strong>
        </u>
        , log in success!
      </h1>
    </div>
  );
}

export default DataListGames;
