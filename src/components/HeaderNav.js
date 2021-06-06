import React from 'react';

import { Anchor, Box, Header, Heading } from 'grommet';
import Toolbox from './toolbox/Toolbox'

function HeaderNav({ add }) {
  return (
    <Header background="dark-1" pad={{ horizontal: 'medium', vertical: 'small', right: 'large' }} maxHeight="small">
      <Box direction="row" align="center" gap="medium">
        <Anchor color="white" href="https://github.com/meatflavourdev/amorphous-fabric-strategy">
          <Heading margin="none">YFabric</Heading>
        </Anchor>
      </Box>
      <Toolbox add={add} />
    </Header>
  );
}

export default HeaderNav;
