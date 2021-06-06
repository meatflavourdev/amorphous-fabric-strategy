import React from 'react';
import { ResponsiveContext } from 'grommet';

/*
useResponsive hook maps Grommets ResponsiveContext value string to a numeric integer
This enable use cases like (value >= 3) ? 'case 1' : 'case 2' where we can test for all sizes
greater or less than a particular size, enabling more succint responsive syntax
*/
function useResponsive() {
  const context = React.useContext(ResponsiveContext)
  if (!context) {
    throw new Error(`useResponsive must be used within a Grommet component`)
  }

  const valueMap = {
    "xxsmall": 0,
    "xsmall": 1,
    "small": 2,
    "medium": 3,
    "large": 4,
    "xlarge": 5,
    "full": 6
  }

  return { size: context, value: valueMap[context] || -1 };
}
 export default useResponsive;
