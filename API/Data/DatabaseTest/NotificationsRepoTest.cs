using API.Models;

namespace API.Data.DatabaseTest
{
    public class NotificationsRepoTest : INotificationsRepo
    {
        public List<Notification> GetNotifications(int userId)
        {
            return DatabaseContextTest
               .Notifications
               .Where(x => x.UserId == userId)
               .ToList();
        }
    }
}