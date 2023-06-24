import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showCocosGame, setShowCocosGame] = useState(false);

  const loadCocosGame = () => {
    setShowCocosGame(true);
  };

  return (
    <div>
      <h1>Trang Next.js</h1>
      <div className="flex items-center justify-center h-[90vh]">
        {!showCocosGame && (
          <button onClick={loadCocosGame}>Chuyển sang trò chơi Cocos</button>
        )}
        {showCocosGame && (
          <iframe src="http://localhost:7458/" width="960" height="640" />
        )}
      </div>
    </div>
  );
}
