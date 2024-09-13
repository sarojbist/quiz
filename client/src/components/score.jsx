import { useNavigate } from 'react-router-dom';
const Score = ({ score, totalQuestions }) => {
  const navigate = useNavigate();
  return (
      <div className="text-center p-4 ">
        <h2 className="text-xl font-semibold">Your Score: {score}/{totalQuestions}</h2>
     <div className='flex flex-wrap gap-[10px] my-[10px] justify-center items-center'>

  
        <button
        onClick={() => window.location.reload()}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >Play Again</button>
        <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-blue-600"
        >Return to Home</button>
           </div>
      </div>
    );
  };
  
  export default Score;