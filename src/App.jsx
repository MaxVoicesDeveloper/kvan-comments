import { useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form.jsx';
import { comments as commentsData } from './components/Comments/data.js';

export default function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(prev => !prev);

  const [comments, setComments] = useState(commentsData);
  const addComment = (newComment) => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const avatar = newComment.name.charAt(0).toUpperCase();
    
    const comment = {
      ...newComment,
      id: Math.max(...comments.map(c => c.id), 0) + 1,
      time: time,
      avatar: avatar,
      replies: []
    };
    setComments([...comments, comment]);
  };

  const addReply = (parentCommentId, replyData) => {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const avatar = replyData.name.charAt(0).toUpperCase();
    const newReply = {
      ...replyData,
      id: Math.max(...comments.flatMap(c => [c.id, ...c.replies.map(r => r.id)]), 0) + 1,
      time: time,
      avatar: avatar
    };

    const updatedComments = comments.map(comment => {
      if (comment.id === parentCommentId) {

        return {
          ...comment,
          replies: [...comment.replies, newReply]
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  return (
    <>
      <div className='container'>
        <div className="main-block-comments">
          <button onClick={toggleForm} className='button-view-form'>{isFormOpen ? `Скрыть форму` : `Написать комментарий`}</button>
          <Form onAddComment={addComment} isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
          <Comments comments={comments} onAddReply={addReply} />
        </div>
      </div>
    </>
  )
}