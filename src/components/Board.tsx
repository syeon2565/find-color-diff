/* eslint-disable react/no-array-index-key */
import React from "react";
import styled from "styled-components";

type BoardProps = {
  stage: number;
  handleSuccess: React.MouseEventHandler<HTMLDivElement>;
  handleFailure: React.MouseEventHandler<HTMLDivElement>;
};

type BlockProps = {
  size: number;
  color: string;
};

const Board = ({ stage, handleSuccess, handleFailure }: BoardProps) => {
  const row = (Math.round((stage + 0.5) / 2) + 1) ** 2;
  const size = 360 / Math.sqrt(row);
  const answerIdx = Math.round(Math.random() * (row - 1));
  const r = `${Math.floor(Math.random() * 256)}`;
  const g = `${Math.floor(Math.random() * 256)}`;
  const b = `${Math.floor(Math.random() * 256)}`;
  const baseColor = `rgb(${r},${g},${b})`;
  const answerColor = `rgba(${r},${g},${b},0.7)`;

  return (
    <BoardWrapper row={Math.sqrt(row)}>
      {new Array(row).fill(null).map((r, i) => (
        <Block
          key={i}
          size={size}
          color={i === answerIdx ? answerColor : baseColor}
          onClick={i === answerIdx ? handleSuccess : handleFailure}
        />
      ))}
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
