using API.Models;

namespace API.Data
{
    public interface INotificationsRepo
    {
        List<Notification> GetNotifications(int userId);
    }
}