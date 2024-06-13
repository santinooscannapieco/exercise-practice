/* export const Board = () => {
  return (
    <main>
      <h3>Laberinto</h3>
      <section
        id="mazeContainer"
        className="w-[700px] h-[700px] border-[10px] rounded-lg"
      >
        <div id="start" className="w-[10px] h-[90px] bg-zinc-800"></div>
        <div
          id="wall"
          className="top-[300px] left-[0px] w-[110px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[100px] w-[10px] h-[410px]"
        ></div>
        <div
          id="wall"
          className="top-[100px] left-[100px] w-[210px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[100px] w-[110px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[200px] w-[10px] h-[110px]"
        ></div>
        <div
          id="wall"
          className="top-[400px] left-[200px] w-[10px] h-[210px]"
        ></div>
        <div
          id="wall"
          className="top-[400px] left-[200px] w-[410px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[600px] left-[200px] w-[210px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[0px] left-[300px] w-[10px] h-[110px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[300px] w-[10px] h-[100px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[300px] w-[100px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[300px] left-[300px] w-[310px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[500px] left-[300px] w-[310px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[100px] left-[400px] w-[210px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[600px] left-[400px] w-[10px] h-[90px]"
        ></div>
        <div
          id="wall"
          className="top-[100px] left-[500px] w-[10px] h-[110px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[500px] w-[110px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[600px] left-[500px] w-[10px] h-[90px]"
        ></div>
        <div
          id="wall"
          className="top-[600px] left-[500px] w-[110px] h-[10px]"
        ></div>
        <div
          id="wall"
          className="top-[200px] left-[600px] w-[10px] h-[310px]"
        ></div>
        <div id="exit" className="text-center w-[90px] h-[10px] bg-zinc-800">
          LLEGADA
        </div>
      </section>
    </main>
  );
};
 */

export const Board = () => {
  return (
    <main>
      <h3>Laberinto</h3>
      <section
        id="mazeContainer"
        className="w-[700px] h-[700px] border-[10px] rounded-lg relative"
      >
        <div id="start" className="w-[30px] h-[100px]">
          ENTRADA
        </div>
        <div className="wall top-[300px] left-[0px] w-[110px] h-[10px] absolute"></div>
        <div className="wall top-[200px] left-[100px] w-[10px] h-[410px] absolute"></div>
        <div className="wall top-[100px] left-[100px] w-[210px] h-[10px] absolute"></div>
        <div className="wall top-[200px] left-[100px] w-[110px] h-[10px] absolute"></div>
        <div className="wall top-[200px] left-[200px] w-[10px] h-[110px] absolute"></div>
        <div className="wall top-[400px] left-[200px] w-[10px] h-[210px] absolute"></div>
        <div className="wall top-[400px] left-[200px] w-[410px] h-[10px] absolute"></div>
        <div className="wall top-[600px] left-[200px] w-[210px] h-[10px] absolute"></div>
        <div className="wall top-[0px] left-[300px] w-[10px] h-[110px] absolute"></div>
        <div className="wall top-[200px] left-[300px] w-[10px] h-[100px] absolute"></div>
        <div className="wall top-[200px] left-[300px] w-[100px] h-[10px] absolute"></div>
        <div className="wall top-[300px] left-[300px] w-[310px] h-[10px] absolute"></div>
        <div className="wall top-[500px] left-[300px] w-[310px] h-[10px] absolute"></div>
        <div className="wall top-[100px] left-[400px] w-[210px] h-[10px] absolute"></div>
        <div className="wall top-[600px] left-[400px] w-[10px] h-[90px] absolute"></div>
        <div className="wall top-[100px] left-[500px] w-[10px] h-[110px] absolute"></div>
        <div className="wall top-[200px] left-[500px] w-[110px] h-[10px] absolute"></div>
        <div className="wall top-[600px] left-[500px] w-[10px] h-[90px] absolute"></div>
        <div className="wall top-[600px] left-[500px] w-[110px] h-[10px] absolute"></div>
        <div className="wall top-[200px] left-[600px] w-[10px] h-[310px] absolute"></div>
        <div id="exit" className="text-center w-[90px] h-[30px]">
          LLEGADA
        </div>
      </section>
    </main>
  );
};

export default Board;
