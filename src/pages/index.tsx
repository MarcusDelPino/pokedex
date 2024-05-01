import ChurchIcon from "@mui/icons-material/Church";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SearchAppBar from "@/components/AppBar";
import LoadPosts from "@/components/LoadPost";
import { useState } from "react";
import { PokemonProvider } from "@/context/pokemon";

export default function Home() {
  return (
    <PokemonProvider>
      <div>
        <SearchAppBar />
        {/* <ChurchIcon />
      <CatchingPokemonIcon sx={{color: 'red'}}/> */}
        <div className="mt-3">
          <LoadPosts />
        </div>
      </div>
    </PokemonProvider>
  );
}
