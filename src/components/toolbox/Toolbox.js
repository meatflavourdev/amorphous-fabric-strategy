import React from 'react';
import Type from '../icons/Type';

import { Nav, Button, DropButton } from 'grommet';
import { Cursor, Edit, StatusPlaceholder } from 'grommet-icons';
import styled from 'styled-components';
import useResponsive from '../../hooks/useResponsive';

const ToolButton = styled(Button)`
  border-radius: 10px;
`;

function ToolboxNavRow({ responsive, add, handleClick }) {
  const responsiveLabel = (labelText) => {
    return responsive.value >= 4 ? labelText : null;
  };
  return (
    <Nav direction="row" gap="small">
      <ToolButton
        plain={false}
        icon={<Cursor />}
        onClick={() => handleClick('Arrow')}
        primary={true}
        label={responsiveLabel('Arrow')}
      />
      <ToolButton plain={false} icon={<Edit />} onClick={() => handleClick('Draw')} label={responsiveLabel('Pencil')} />
      <ToolButton
        plain={false}
        icon={<StatusPlaceholder />}
        onClick={() => add(window.canvas)}
        label={responsiveLabel('Shape')}
        size="medium"
      />
      <ToolButton
        plain={false}
        icon={<Type />}
        onClick={() => {
          handleClick('Text');
        }}
        label={responsiveLabel('Text')}
        size="large"
      />
    </Nav>
  );
}

function ToolboxNavCol({ add, handleClick }) {
  return (
    <DropButton
      plain={false}
      icon={<Cursor />}
      onClick={() => handleClick('Arrow')}
      primary={true}
      dropAlign={{ top: 'bottom' }}
      dropContent={
        <>
          <Button plain={false} icon={<Edit />} onClick={() => handleClick('Draw')} />
          <Button plain={false} icon={<StatusPlaceholder />} onClick={() => add(window.canvas)} />
          <Button
            plain={false}
            icon={<Type />}
            onClick={() => {
              handleClick('Text');
            }}
          />
        </>
      }
    />
  );
}

function Toolbox({ add }) {
  // Get size and value relative to the window size/device and responsive context
  const responsive = useResponsive();

  const handleClick = (name) => {
    console.log(`Click ${name}`);
  };

  return responsive.size !== 'xsmall' ? (
    <ToolboxNavRow responsive={responsive} add={add} handleClick={handleClick} />
  ) : (
    <ToolboxNavCol add={add} handleClick={handleClick} />
  );
}

export default Toolbox;
