const BotCollection = ({ data, dischargeBot, enlistBot }) => {
  return (
    <div className="collection">
      {data.map((bot, i) => (
        // parent
        <div onClick={() => enlistBot(bot)} key={i} className="bot-card">
          <img src={bot.avatar_url} alt="" />
          <p>{bot.name}</p>
          <p>{bot.bot_class}</p>
          <small>{bot.catchphrase}</small>
          <div>
            <div>Damage : {bot.damage}</div>
            <div>armor : {bot.armor}</div>
            <div>health : {bot.health}</div>
          </div>
          {/* child */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dischargeBot(bot.id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
