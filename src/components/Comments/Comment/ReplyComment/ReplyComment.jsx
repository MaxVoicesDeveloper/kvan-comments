import '../ReplyComment/ReplyComment.css'

export default function ReplyComment({ replies }){
    if (!replies || replies.length === 0) {
        return null;
    }

    return(
        <>
            {replies.map(reply => (
                <div key={reply.id} className="reply-info-comment">
                    <div className="reply-top-block-info-name-comment">
                        <div className="reply-name-comment">
                            <span>{reply.name}</span>
                        </div>
                        <div className="reply-time-comment">
                            <span>{reply.time}</span>
                        </div>
                    </div>
                    <div className="reply-bottom-block-info-content-comment">
                        <span className="reply-text">{reply.text}</span>
                    </div>
                </div>
            ))}
        </>
    )
}