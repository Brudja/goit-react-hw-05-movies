import { useEffect, useState } from 'react';
import { getCastById } from '../../../services/Api';
import { Outlet, useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      const data = await getCastById(movieId);
      console.log(data);
      setCast(data.cast);
    };
    getCast();
  }, [movieId]);

return(<div>
    <ul></ul>
</div>

)

};
