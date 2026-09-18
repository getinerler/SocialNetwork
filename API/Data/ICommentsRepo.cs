using API.Models;

namespace API.Data
{
    public interface ICommentsRepo
    {
        List<Comment> GetComments(int postId);
    }
}