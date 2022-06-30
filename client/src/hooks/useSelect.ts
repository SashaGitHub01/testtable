import { useEffect, useRef, useState } from "react";

export const useSelect = () => {
   const ref = useRef<HTMLInputElement>(null);
   const [active, setActive] = useState(false)
   const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 })

   const handleOpen = (e: React.MouseEvent) => {
      e.stopPropagation()
      if (!ref.current) return;
      const select = ref.current?.getBoundingClientRect(); // get coords of select to calculate position

      setCoords({
         left: select.left,
         top: select.bottom - window.scrollY,
         width: select.width
      })

      setActive(true)
   }

   const handleClose = () => {
      setActive(false)
   }

   useEffect(() => {
      if (active) {
         document.addEventListener('click', handleClose)
      } else {
         document.removeEventListener('click', handleClose)
      }

      return () => document.removeEventListener('click', handleClose)
   }, [active])

   return {
      handleOpen,
      ref,
      active,
      coords,
   }
}