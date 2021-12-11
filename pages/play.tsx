import { Box, Flex } from "@chakra-ui/layout";
import * as ChessJS from "chess.js";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainChessboard from "../components/MainChessboard";
import MoveList from "../components/MoveList";
import OptionPanel from "../components/OptionPanel";
import styles from "../styles/Play.module.css";

const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;

export type ChessGame = ChessJS.ChessInstance;
export type Orientation = "white" | "black";

const updateGame = (
  game: ChessGame,
  setGame: (game: ChessGame) => void,
  newFEN: string
) => {
  const gameCopy = { ...game };
  gameCopy.load(newFEN);
  setGame(gameCopy);
};

const newGame = new Chess();

const PlayPage: NextPage = () => {
  const [game, setGame] = useState(newGame);
  // const [fen, setFen] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<string>("");
  const players = {
    white: {
      username: "altstream",
      account: "0x246fd79365CA79BEB812B5635E8bE38453e2BF1C",
    },
    black: {
      username: "rehesamay",
      account: "0xC89337a02D3A3b913147aACF8F5b06Ad046663A9",
    },
  };
  const currentPlayerSide: Orientation =
    players.white.account.toLowerCase() === currentUser.toLowerCase()
      ? "white"
      : "black";

  useEffect(() => {
    if (typeof window !== undefined) {
      setCurrentUser(localStorage.getItem("user"));
    }
  }, [setCurrentUser]);

  return (
    <Box height="100vh" className={styles.root}>
      <Header account={currentUser} />
      <Flex alignItems="center" justifyContent="space-between" px="16rem">
        <Box flexBasis="65%">
          <MainChessboard
            game={game}
            setGame={setGame}
            boardOrientation={currentPlayerSide}
          />
        </Box>
        <Box
          display="flex"
          flexDir="column"
          flexBasis="35%"
          bg="whiteAlpha.200"
          borderRadius="4px"
          padding="1rem"
          height="560px"
        >
          <MoveList game={game} />
          <OptionPanel
            players={players}
            currentPlayerSide={currentPlayerSide}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayPage;
