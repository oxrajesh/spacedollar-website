import React, { useCallback } from "react";
import styled from "styled-components";
import Modal from ".";
import { AutoColumn } from "../Column";

const ComingSoonText = styled(AutoColumn)`
  font-family: "Montserrat";
  font-size: 1.5rem;
  width: 100%;
  height: 96px;
`;

interface CommingSoonModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function CommingSoonModal({
  isOpen,
  onDismiss,
}: CommingSoonModalProps) {
  const wrappedOnDismiss = useCallback(() => {
    onDismiss();
  }, [onDismiss]);

  return (
    <Modal isOpen={isOpen} onDismiss={wrappedOnDismiss} maxHeight={90}>
      <ComingSoonText justify="center" align="center">
        Coming Soon...
      </ComingSoonText>
    </Modal>
  );
}
