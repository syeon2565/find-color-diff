/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

type BoardProps = {
  stage: number;
  onClick: () => void;
};

type BlockProps = {
  size: number;
  color: string;
};

const Board = ({ stage, onClick }: BoardProps) => {
  const row = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const size = 360 / Math.sqrt(row);
  const baseColor = `#${Math.floor(Math.random() * 256)}`;

  return (
    <BoardWrapper row={Math.sqrt(row)}>
      {new Array(row).fill(null).map((r, i) => (
        <Block key={i} size={size} color={baseColor} onClick={onClick} />
      ))}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div<{ row: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.row}, 1fr);
  width: 360px;
  height: 360px;
  border: 2px solid black;
`;

const Block = styled.div<BlockProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  box-sizing: border-box;
  border: 1px solid white;
`;

export default Board;
