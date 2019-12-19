import React, { Component } from 'react';

class PostItem extends Component {

  render() {

    const { author, date, content, comments } = this.props;

    return (
      <div className="post-item">
        <div className="header">
          <img className="avatar" src={author.avatar} />
          <div className="details">
            <span className="username">{author.name}</span>
            <span>{date}</span>
          </div>
        </div>

        <div className="content">
          <p>{content}</p>
        </div>

        <div className="divider"></div>

        <div className="comments-list">
          {
            comments.map(comment => (
              <div key={comment.id} className="comment-item">
                <img className="avatar" src={comment.author.avatar} />
                <p className="content">
                  <span className="username">{comment.author.name}</span>
                  {comment.content}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

}

export default PostItem;