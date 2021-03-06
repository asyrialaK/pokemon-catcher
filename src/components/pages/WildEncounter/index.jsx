import React from "react";
import styled from "styled-components";
import PokemonCard from "../../molecules/PokemonCard";
import { Grid, Container, Typography } from "@material-ui/core";
import { usePokemonContext } from "../../../context/PokemonContext";

const MainHeader = styled(Typography)`
  margin-bottom: 40px;
  text-align: center;
`;

const WildEncounter = () => {
  const { wildPokemon } = usePokemonContext();

  return (
    <Container>
      <MainHeader component="h1" variant="h3">
        Wild Encounter - Route 102
      </MainHeader>
      {wildPokemon && (
        <Grid container spacing={4}>
          {wildPokemon.map((pokemon) => {
            return (
              <Grid item lg={6}>
                <PokemonCard key={pokemon.id} {...pokemon} captureControls />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

export default WildEncounter;
