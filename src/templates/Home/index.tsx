import { useState } from 'react';
import { useRouter } from 'next/router';

import { choosePath } from '../../services/choosePath';
import Button from 'components/Button';
import { Container } from 'components/Container';
import Heading from 'components/Heading';

import { LoaderCircle as Loader } from '@styled-icons/boxicons-regular/LoaderCircle';
import { useProfileContext } from 'hooks/profileContext';

import * as S from './styles';

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { setProfile } = useProfileContext();
  const Router = useRouter();

  const hasClick = async () => {
    setLoading(true);
    const response = await choosePath();
    setProfile(response);
    Router.push('/single');
    setLoading(false);
  };

  return (
    <S.Wrapper>
      <Container>
        <S.Header>
          <Heading>
            Welcome to <span>iClinic</span>
          </Heading>
          <Heading size="small">FRONTEND CHALLENGE</Heading>
        </S.Header>

        <S.Body>
          <Button disabled={loading} onClick={hasClick} size="large">
            {loading && <Loader />} START
          </Button>
        </S.Body>
      </Container>
    </S.Wrapper>
  );
};

export default Home;
