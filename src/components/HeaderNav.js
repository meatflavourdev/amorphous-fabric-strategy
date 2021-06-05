import React from 'react';
import Type from './icons/Type';

import { Anchor, Box, Header, Nav, Heading, Button, Menu, ResponsiveContext } from 'grommet';
import { Cursor, Notes, Edit, Radial, StatusPlaceholder } from 'grommet-icons';

function HeaderNav({ add }) {
  return (
    <Header background="dark-1" pad={{ horizontal: 'medium', vertical: 'small', right: 'large' }} maxHeight="small">
      <Box direction="row" align="center" gap="medium">
        <Anchor color="white" href="https://github.com/meatflavourdev/amorphous-fabric-strategy">
          <Heading margin="none">YFabric</Heading>
        </Anchor>
      </Box>

      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === 'xsmall' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'This is', onClick: () => {} },
                { label: 'The Menu', onClick: () => {} },
                { label: 'Component', onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row" gap={['xsmall', 'small'].includes(responsive) ? 'small' : 'medium'}>
              <Button plain={false} icon={<Cursor />} onClick={() => console.log('Cursor')} primary={true} />
              <Button plain={false} icon={<Edit />} onClick={() => console.log('Draw')} />
              <Button plain={false} icon={<StatusPlaceholder />} onClick={() => add(window.canvas)} />
              <Button
          plain={false}
          icon={<Radial />}
          onClick={() => {
            console.log('Circle');
          }}
              />
              <Button
                plain={false}
                icon={<Type />}
                onClick={() => {
            console.log('Text');
                }}
              />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
}

export default HeaderNav;
