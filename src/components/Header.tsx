type HeaderProps = {
  stage: number;
  time: number;
  score: number;
};

const Header = ({ stage, time, score }: HeaderProps) => {
  return (
    <div>
      스테이지:{stage}, 시간: {time}, 점수: {score}
    </div>
  );
};

export default Header;
