/* eslint-disable object-curly-newline */
import React, { useCallback } from 'react';
import { FiChevronLeft, FiLogOut, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import {
  AddButton,
  BackButton,
  Container,
  Flex1,
  LogoutButton,
  ProfileButton,
} from './styles';

type MenuProps = {
  hasProfileButton?: boolean;
  hasBackButton?: boolean;
  hasAddButton?: boolean;
};

const Menu: React.FC<MenuProps> = ({
  hasProfileButton = true,
  hasBackButton = false,
  hasAddButton = true,
  children,
}) => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleNavigate = useCallback(() => {
    history.push('/profile');
  }, [history]);

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      {hasProfileButton && (
        <ProfileButton src={user.avatar_url} onClick={handleNavigate} />
      )}
      {hasBackButton && (
        <BackButton onClick={() => history.goBack()}>
          <FiChevronLeft size={32} />
        </BackButton>
      )}
      {hasAddButton && (
        <AddButton>
          <FiPlus size={20} />
        </AddButton>
      )}
      {children}
      <Flex1 />
      <LogoutButton onClick={handleLogout}>
        <FiLogOut size={20} />
      </LogoutButton>
    </Container>
  );
};

export default Menu;
