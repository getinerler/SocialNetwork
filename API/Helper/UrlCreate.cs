namespace API.Helper
{
    public static class UrlCreate
    {
        public static string baseUrl = "";

        public static string GetPhotoUrl(Guid guid) 
        {
            return "http://localhost:5253/profilePhotos/" + guid + ".jpg";
        }
    }
}