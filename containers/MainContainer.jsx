<div>
        {infoDiv}
        <div id="board">
          {rowElements}
        </div>
        <button id="reset" onClick={() => this.setState(getInitialState())}>Reset board</button>
        <GameList gameList={gameList} />
        <Leaders />
      </div>