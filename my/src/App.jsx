import { useEffect, useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [data, setData] = useState([]);
  const [myBots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/bots")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // todo make a delete request
  const dischargeBot = (id) => {
    releaseBot(id);
    fetch(`http://localhost:8000/bots/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // enlist bot
  const enlistBot = (bot) => {
    const findBot = myBots.find((b) => b.id === bot.id);
    if (findBot === undefined) {
      setBots([...myBots, bot]);
    }
  };

  // todo release a bot
  const releaseBot = (id) => {
    setBots(myBots.filter((bot) => bot.id !== id));
  };

  return (
    <main>
      <h1>My Personal bot army</h1>
      <BotArmy myBots={myBots} releaseBot={releaseBot} />
      <h1>Bot collection</h1>
      <BotCollection
        data={data}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </main>
  );
}

export default App;
