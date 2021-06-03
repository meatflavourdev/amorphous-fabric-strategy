import React from 'react';

import { Avatar, Anchor, Box, Header, Nav, Heading } from 'grommet';
import { Cube, Edit, Radial, StatusPlaceholder } from 'grommet-icons';

const items = [
  <Edit size="xlarge" />,
  <StatusPlaceholder size="xlarge" />,
  <Cube size="xlarge" />,
  <Radial size="xlarge" />,
];

const gravatarSrc = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

const OnHeaderNav = ({add}) => (
  <Header background="dark-1" pad={{"horizontal": "medium", "vertical": "small", "right": "large"}}  maxHeight='small'>
    <Box direction="row" align="center" gap="medium">
      <Anchor color="white" href="https://github.com/ShimiSun">
        <Heading margin="none">YFabric</Heading>
      </Anchor>
    </Box>
    <Nav direction="row" gap="medium">
      <Edit size="medium" />
      <StatusPlaceholder size="medium" onClick={() => add(window.canvas)} />
      <Cube size="medium" />
      <Radial size="medium" />
    </Nav>
  </Header>
);

export const OnHeader = ({add}) => <OnHeaderNav add={add} />;
OnHeader.storyName = 'On header';

const HeaderTitle = {
  title: 'Controls/Nav/On header',
};

export default HeaderTitle;
