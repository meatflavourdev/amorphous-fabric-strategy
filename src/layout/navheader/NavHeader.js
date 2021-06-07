import React from 'react';

import { Anchor, Box, Header, Heading } from 'grommet';
import Toolbox from '../toolbar/Toolbar'
import { ToolboxProvider } from '../context/ToolboxContext';

function NavHeader({ add }) {
  return (
    <Header background="dark-1" pad={{ horizontal: 'medium', vertical: 'small', right: 'large' }} maxHeight="small">
      <Box direction="row" align="center" gap="medium">
        <Anchor color="white" href="https://github.com/meatflavourdev/amorphous-fabric-strategy">
          <Heading margin="none">YFabric</Heading>
        </Anchor>
      </Box>
      <ToolboxProvider>
        <Toolbox add={add} />
      </ToolboxProvider>
    </Header>
  );
}

export default NavHeader;
