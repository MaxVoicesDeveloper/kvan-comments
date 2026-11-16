import { useState } from 'react';
import './Comment.css';
import ReplyComment from './ReplyComment/ReplyComment.jsx';
import ReplyForm from './ReplyForm/ReplyForm.jsx';


export default function Comment(props){
    const [isReplyFormVisible, setIsReplyFormVisible] = useState(false);

    return(
        <>
            <div className="comment-block">
                <div className="content-block">
                    <div className="avatar-comment">
                        { props.avatar }
                    </div>
                    <div className="info-comment">
                        <div className="top-block-info-name-comment">
                            <div className="name-comment">
                                <span>{ props.name }</span>
                            </div>
                            <div className="time-comment">
                                <span>{ props.time }</span>
                            </div>
                        </div>
                        <div className="bottom-block-info-content-comment">
                            <span className="text">{ props.text }</span>
                        </div>
                    </div>
                </div>
                
                <ReplyComment replies={props.replies} />
                
                <div className="panel-block">
                    <div className="button-reply-comment">
                        <button 
                            className="reply-comment"
                            onClick={() => setIsReplyFormVisible(!isReplyFormVisible)}
                        >
                            Ответить
                        </button>
                    </div>
                </div>

                {isReplyFormVisible && (
                    <ReplyForm 
                        parentCommentId={props.id}
                        onAddReply={props.onAddReply}
                        onCancel={() => setIsReplyFormVisible(false)}
                    />
                )}
            </div>
        </>
    )
}