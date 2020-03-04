import React, {PropsWithChildren} from 'react';

const ProppedButton = (props: PropsWithChildren<{}>) => (
  <button {...props}>
    {props.children}
  </button>
);
export default ProppedButton;
