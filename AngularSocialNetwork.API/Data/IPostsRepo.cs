using AngularSocialNetwork.API.Dtos.Posts;

namespace AngularSocialNetwork.API.Data
{
    public interface IPostsRepo
    {
        List<PostForFeedDto> GetPosts(int userId);
        PostForFeedDto GetPostDetailed(int feedId);
        void SaveNewPost(PostAddDto postAddDto);
        PostLikeResultDto LikePost(PostLikeDto req);
        int RepostPost(PostLikeDto req);
        List<LikedUserDto> GetLikedUsers(int postId);
        void DeletePost(int postId);
    }
}