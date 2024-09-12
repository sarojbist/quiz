const Score = ({ score, totalQuestions }) => {
    return (
      <div className="text-center p-4 ">
        <h2 className="text-xl font-semibold">Your Score: {score}/{totalQuestions}</h2>
      </div>
    );
  };
  
  export default Score;