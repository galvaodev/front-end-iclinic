import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { ArrowLeftShort as ArrowLeft } from '@styled-icons/bootstrap/ArrowLeftShort';
import { LoaderCircle as Loader } from '@styled-icons/boxicons-regular/LoaderCircle';
import Button from 'components/Button';
import { Container } from 'components/Container';
import Heading from 'components/Heading';

import * as S from './styles';
import MediaMatch from 'components/MediaMatch';
import { useProfileContext } from 'hooks/profileContext';
import { choosePath } from 'services/choosePath';

export type ThemeProps = {
  hasTheme?: 'darth' | 'luke' | string;
};

const Single = () => {
  const [loading, setLoading] = useState(false);

  const Router = useRouter();
  const { profile, setProfile } = useProfileContext();
  const [theme, setTheme] = useState('');

  const hasBack = useCallback(() => {
    setLoading(true);
    sessionStorage.removeItem('single');
    setProfile({ name: '' });
    Router.push('/');
    setLoading(false);
  }, [setProfile, Router]);

  const hasClick = async () => {
    setLoading(true);
    const response = await choosePath();
    setProfile(response);
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem('single')) {
      const name = sessionStorage.getItem('single');
      setProfile({
        name: name === 'Luke Skywalker' ? 'Luke Skywalker' : 'Darth Vader',
      });
      setTheme(profile.name === 'Luke Skywalker' ? 'luke' : 'darth');
    } else {
      Router.push('/');
    }
  }, [profile.name, Router, setProfile]);

  return (
    <>
      <Head>
        <title>IClinic - Your master is {profile.name}</title>
      </Head>
      <S.Wrapper hasTheme={theme}>
        {loading && (
          <S.Loading>
            <Loader />
          </S.Loading>
        )}
        <S.Back onClick={hasBack}>
          <ArrowLeft aria-label="To home" /> back
        </S.Back>
        <Container>
          <MediaMatch greaterThan="medium">
            <S.Header>
              <Button
                onClick={hasClick}
                color={theme === 'darth' ? 'white' : 'black'}
                size="medium"
              >
                choose your path again, Padawan
              </Button>
            </S.Header>
          </MediaMatch>

          <S.Thumbnail>
            <Image
              src={`/img/${
                theme === 'darth' ? 'darth-vader.png' : 'luke-skywalker.png'
              }`}
              alt={profile.name}
              width={400}
              height={400}
            />
          </S.Thumbnail>

          <S.Body>
            <Heading color={theme === 'darth' ? 'white' : 'black'}>
              Your master is <span>{profile.name}</span>
            </Heading>
          </S.Body>

          <MediaMatch lessThan="medium">
            <S.Header>
              <Button
                onClick={hasClick}
                color={theme === 'darth' ? 'white' : 'black'}
                size="medium"
              >
                choose your path again, Padawan
              </Button>
            </S.Header>
          </MediaMatch>
        </Container>
      </S.Wrapper>
    </>
  );
};

export default Single;
