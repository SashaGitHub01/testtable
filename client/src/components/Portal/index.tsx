import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom';

interface PortalProps {
   isOpen: boolean
}

const Portal: React.FC<PropsWithChildren<PortalProps>> = ({ children, isOpen }) => {
   return (
      <>
         {isOpen
            ? createPortal(children, document.body)
            : null}
      </>
   )
}

export default Portal;