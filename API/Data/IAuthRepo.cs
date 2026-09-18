using API.Dtos.Users;
using API.Models;

namespace API.Data
{
    public interface IAuthRepo
    {
        User Register(UserForRegisterDto userForRegisterDto);
        User Login(string username, string password);
        bool UserExists(string username);
    }
}