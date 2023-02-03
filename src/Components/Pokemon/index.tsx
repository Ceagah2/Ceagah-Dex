import React from 'react';
import styled from 'styled-components';

const Pokemon: React.FC = () => {
  return <S.Container />;
}



// at this point, i prefer to create the stylesheet at the same file of the component, it's better to handle everything at the same place, 
// once the component will be a singleton and a small file, you can manage everything at the same place
const S = {
  Container : styled.div``,
}

export default Pokemon;