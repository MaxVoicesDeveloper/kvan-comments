import Comment from './Comment/Comment'
import './Comments.css'

export default function Comments({ comments, onAddReply }){
    return(
        <>
            <div className="comments">
                {comments.map(comment => (
                    <Comment 
                        key={comment.id} 
                        id={comment.id}
                        avatar={comment.avatar} 
                        name={comment.name} 
                        time={comment.time} 
                        text={comment.text}
                        replies={comment.replies}
                        onAddReply={onAddReply}
                    />
                ))}
            </div>
        </>
    )
}