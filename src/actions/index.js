import * as PostCreators from './postAction';
import * as PostsCreators from './postsAction';
import * as UserCreators from './userAction';

export default {
    ...PostsCreators,
    ...PostCreators,
    ...UserCreators
}
