import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pokemon from '../../Components/Pokemon';
import api from '../../service/api';
import { Container, Footer, Header, HeaderTitle, Section } from './styles';

interface Pokeprops {
  name: string;
  url: string
}

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokeprops[]>([]);
  const navigation = useNavigate();

  useEffect(() => {
    api.get('/').then((response) => {
      setPokemons(response.data.results);
    });
  },[])
  
    if(pokemons === null){
      return <></>
    }

  return(
    <Container>
      <Header>
        <HeaderTitle>
          Tekever Pokedex
        </HeaderTitle>
      </Header>
      <Section>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} url={pokemon.url} name={pokemon.name} data={pokemon} onClick={() => navigation(`/details/${pokemon.name}`)}/>
        ))}
      </Section>
      <Footer></Footer>
    </Container>
  );
}

export default Home;