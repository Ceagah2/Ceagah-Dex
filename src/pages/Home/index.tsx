import { useEffect, useState } from 'react';
import Pokemon from '../../Components/Pokemon';
// import Pokemon from '../../Components/Pokemon';
import api from '../../service/api';
import { Container, Footer, Header, Section } from './styles';

interface Pokeprops {
  name: string;
  url: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokeprops[]>([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setPokemons(response.data.results);
    });
  },[])

  return(
    <Container>
      <Header>Tekever Pokedex</Header>
      <Section>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} url={pokemon.url} name={pokemon.name} />
        ))}
      </Section>
      <Footer></Footer>
    </Container>
  );
}

export default Home;