import React from 'react';
import Type from '../icons/Type';

import { Nav, Button, DropButton, ResponsiveContext } from 'grommet';
import { Cursor, Edit, StatusPlaceholder } from 'grommet-icons';
import styled from 'styled-components';
import useResponsive from '../../hooks/useResponsive';

const ToolButton = styled(Button)`
  border-radius: 10px;
`;

function Toolbox({ add }) {
  const thisContext = useResponsive();

  return (
    <ResponsiveContext.Consumer>
    {(responsive) =>
      responsive === 'xsmall' ? (
        <Nav direction="column" gap="xsmall">
          <DropButton
            plain={false}
            icon={<Cursor />}
            onClick={() => console.log('Cursor')}
            primary={true}
            dropAlign={{ top: 'bottom' }}
            dropContent={
              <>
                <Button plain={false} icon={<Edit />} onClick={() => console.log('Draw')} />
                <Button plain={false} icon={<StatusPlaceholder />} onClick={() => add(window.canvas)} />
                <Button plain={false} icon={<Type />} onClick={() => { console.log('Text'); }} />
              </>
            }
          />
        </Nav>
      ) : (
        <Nav direction="row" gap={['xsmall', 'small'].includes(responsive) ? 'small' : 'medium'}>
          <ToolButton plain={false} icon={<Cursor />} onClick={() => console.log('Cursor')} primary={true} label="Arrow" />
          <ToolButton plain={false} icon={<Edit />} onClick={() => console.log('Draw')} label="Pencil" />
          <ToolButton plain={false} icon={<StatusPlaceholder />} onClick={() => add(window.canvas)} label="Shape" size="medium" />
          <ToolButton plain={false} icon={<Type />} onClick={() => { console.log('Text'); }} label="Text" size="large" />
        </Nav>
      )
    }
  </ResponsiveContext.Consumer>
  )
}

export default Toolbox;
