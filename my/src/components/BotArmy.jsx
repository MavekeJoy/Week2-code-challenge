const BotArmy = ({ myBots, releaseBot }) => {
  return (
    <div className="collection">
      {myBots.map((bot, i) => (
        <div onClick={() => releaseBot(bot.id)} key={i} className="bot-card">
          <img src={bot.avatar_url} alt="" />
          <p>{bot.name}</p>
          <p>{bot.bot_class}</p>
          <small>{bot.catchphrase}</small>
          <div>
            <div>Damage : {bot.damage}</div>
            <div>armor : {bot.armor}</div>
            <div>health : {bot.health}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
