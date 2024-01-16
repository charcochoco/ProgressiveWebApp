import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

function PokemonDetail(props){
    const params = useParams();
    const name = params['name'];

    return(
        <div>
            PokemonDetail
        </div>
    )
}

export default PokemonDetail