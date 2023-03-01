import { FC, PropsWithChildren, SyntheticEvent, useEffect } from "react";

import { createPortal } from "react-dom";
import { useCallback } from "react";

import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

export const Modal: FC<PropsWithChildren<{ onClose: () => void }>> = ({
  onClose,
  children,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleBackdropClick = (e: SyntheticEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <>
      <div onClick={handleBackdropClick} className={css.overlay}>
        <div className={css.modalContent}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};
