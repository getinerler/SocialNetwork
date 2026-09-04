namespace AngularSocialNetwork.API.Dtos.Posts
{
    public class LikedUserDto
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }        
        public string PhotoPath { get; set; }
    }
}