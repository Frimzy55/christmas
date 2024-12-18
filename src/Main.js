import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaTree } from 'react-icons/fa'; // Import Christmas Tree icon
import Confetti from 'react-confetti'; // Import Confetti
import santaHat from './image/santa1.png'; // Import Santa hat image

function Main() {
  const [comments, setComments] = useState([]); // State to store comments
  const [newComment, setNewComment] = useState(''); // State for the new comment input

  // Function to handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      {/* Sidebar with dark blue background */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-dark text-white p-3">
            {/* Continuously animated Merry Christmas text with icon */}
            <motion.h4
              className="text-center d-flex justify-content-center align-items-center"
              animate={{
                opacity: [0, 1, 0], // Fade in and out continuously
                scale: [1, 1.2, 1], // Scale up and down continuously
              }}
              transition={{
                duration: 3, // Duration of each loop cycle
                repeat: Infinity, // Infinite loop
                repeatType: 'loop', // Looping style
                ease: 'easeInOut', // Smooth animation
              }}
            >
              {/* Christmas Tree Icon and Animated Text */}
              <FaTree style={{ fontSize: '2rem', marginRight: '10px', color: 'green' }} /> {/* Green Christmas Tree Icon */}
              <span style={{ color: 'red' }}>Merry Christmas</span>
            </motion.h4>

            {/* Sidebar content with hover effect */}
            <ul className="list-unstyled">
              <li>
                <motion.a
                  href="#"
                  className="text-white"
                  whileHover={{ scale: 1.1, color: '#FF6347' }} // Slightly scale up and change color on hover
                  transition={{ duration: 0.2 }} // Quick transition
                >
                  Home
                </motion.a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main content with Confetti */}
      <div className="container mt-4 text-center">
        {/* Confetti effect */}
        <Confetti width={window.innerWidth} height={window.innerHeight} />

        <motion.h1
          className="mb-3 d-flex justify-content-center align-items-center"
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {/* Santa Hat Image */}
          <img
            src={santaHat}
            alt="Santa Hat"
            style={{
              width: '50px',
              marginRight: '10px',
              position: 'relative',
              top: '-10px', // Adjust vertical alignment
            }}
          />
          Wishing You a Merry Christmas!
        </motion.h1>

        <motion.p
          className="lead"
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
        >
          May this festive season bring you joy, peace, and prosperity. Enjoy the warmth of love and togetherness with your loved ones. Merry Christmas!
        </motion.p>

        {/* Congratulations message */}
        <motion.div
          className="congratulations"
          animate={{ x: [100, 0, 100], opacity: [0, 1, 0] }} // Horizontal animation
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop' }}
        >
          <h2 className="text-success">Congratulations and Happy Holidays!</h2>
        </motion.div>
      </div>

      {/* Comment Section */}
      <div className="container mt-5">
        <h3 className="text-center">Leave a Comment</h3>
        <form onSubmit={handleCommentSubmit} className="mb-3">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {/* Display Comments */}
        <div className="comments-section">
          <h4>Comments:</h4>
          {comments.length > 0 ? (
            <ul className="list-group">
              {comments.map((comment, index) => (
                <li key={index} className="list-group-item">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      {/* Footer with "Design by Frimz" */}
      <div className="footer text-center text-primary p-1 mt-4">
        <p>Developed by Frimz</p>
      </div>
    </div>
  );
}

export default Main;
