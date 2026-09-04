namespace AngularSocialNetwork.API.Models
{
    public class Like
    {
        public int LikeId { get; set; }
        public int UserId { get; set; }
        public int PostId { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}