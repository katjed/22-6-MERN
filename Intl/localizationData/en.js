export default {
  locale: 'en',
  messages: {
    siteTitle: 'MERN Starter Blog',
    addPost: 'Add post',
    switchLanguage: 'Switch language',
    twitterMessage: 'We are on Twitter',
    by: 'By',
    deletePost: 'Delete post',
    editPost: 'Edit post',
    thumbUp: 'Thumb up',
    thumbDown: 'Thumb down',
    createNewPost: 'Create new post',
    authorName: 'Author\'s name',
    postTitle: 'Post title',
    postContent: 'Post content',
    submit: 'Submit',
    comment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	}`,
    HTMLComment: `user <b style='font-weight: bold'>{name} </b> {value, plural,
    	  =0 {does not have <i style='font-style: italic'>any</i> comments}
    	  =1 {has <i style='font-style: italic'>#</i> comment}
    	  other {has <i style='font-style: italic'>#</i> comments}
    	}`,
    nestedDateComment: `user {name} {value, plural,
    	  =0 {does not have any comments}
    	  =1 {has # comment}
    	  other {has # comments}
    	} as of {date}`,
  },
};
