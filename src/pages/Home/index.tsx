import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Paginator from '../../Components/Paginator';
import Pokemon from '../../Components/Pokemon';
import api from '../../service/api';
import { Container, FavButton, FavButtonText, Footer, Header, HeaderTitle, Section } from './styles';

interface Pokeprops {
  name: string;
  url: string
}
const LIMIT = 20; // Limit of items per page
const OFFSET = 0; // Step to get the next page. 0 is the first page. 1 is the second page.
const TOTAL = 1279; // Total number of pokemons at this moment (07/02/2023)


const Home = () => {
  const [pokemons, setPokemons] = useState<Pokeprops[]>([]);
  const [offSet, setOffSet] = useState(OFFSET);
  const navigation = useNavigate();

  useEffect(() => {
    api.get(`/pokemon?limit=${LIMIT}&offset=${offSet}`).then((response) => {
      setPokemons(response.data.results);
    });
  },[offSet])
  
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
      <FavButton onClick={() => navigation('/favorites')}>
        <FavButtonText>
          Check your favorite pokemons !
        </FavButtonText>
      </FavButton>
      <Footer>
        <Paginator setOffset={setOffSet} limit={LIMIT} total={TOTAL} offset={offSet}/>
      </Footer>
    </Container>
  );
}

export default Home;