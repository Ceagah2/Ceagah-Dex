import styled from 'styled-components';

import { useEffect, useState } from 'react';

import api from '../../service/api';

interface DataProps {
  name: string;
  url: string;
  data?: Object;
}

interface Pokeprops {
  name: string;
  sprite: string;
  dexNumber: number;
  baseExp: number;
  weight: number;
  height: number;
  types: Array<string>;
  baseStats: Array<number>;
}


const Pokemon  = (data: DataProps) => {
  const[pokeDetails, setPokeDetails] = useState<Pokeprops[]>([]);
  const path = data.url.split('/')
  const dexNumber = path[6]

  useEffect(() => {
    api.get(`/${dexNumber}/`).then(
      (response) => {
        setPokeDetails(response.data);
      }
    )
  })

  console.log('pokemon data props:', pokeDetails[0])

  return (
    <span>{data.name}</span>
  )
}



// at this point, i prefer to create the stylesheet at the same file of the component, it's better to handle everything at the same place, 
// once the component will be a singleton and a small file, you can manage everything at the same place
const S = {
  Container : styled.div``,
}

export default Pokemon;