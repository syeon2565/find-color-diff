/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

type BoardProps = {
  stage: number;
  onClick?: () => void;
};

type BlockProps = {
  size: number;
  color: string;
};

const Board = ({ stage, onClick }: BoardProps) => {
  const row = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const size = 360 / Math.sqrt(row);
  const answerIdx = Math.round(Math.random() * (row - 0));
  const color = `${Math.floor(Math.random() * 256)}`;
  const baseColor = `rgb(${color},${color},${color})`;
  const answerColor = `rgba(${color},${color},${color},0.1)`;

  return (
    <BoardWrapper row={Math.sqrt(row)}>
      {new Array(row)
        .fill(null)
        .map((r, i) =>
          i === answerIdx ? (
            <Block key={i} size={size} color={answerColor} onClick={onClick} />
          ) : (
            <Block key={i} size={size} color={baseColor} onClick={onClick} />
          ),
        )}
    </BoardWrapper>
  );
};

const BoardWrapper = styled.div<{ row: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.row}, 1fr);
  width: 360px;
  height: 360px;
`;

const Block = styled.div<BlockProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  box-sizing: border-box;
  border: 1px solid white;
`;

export default React.memo(Board);
