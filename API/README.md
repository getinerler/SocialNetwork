# Social Network Project

* This is a social network project with a .NET Core backend and Angular + Next.js frontends. It was created to practice and demonstrate my skills with these technologies.

* AI is used to help troubleshoot problems and speed up the development process, but the code is primarily written, reviewed, and tested by me. SOLID principles and other clean code practices are followed throughout the project.

* Both frontends provide exactly the same functionality. Users can choose whichever frontend they prefer.

```mermaid
flowchart LR
    Angular[Angular Frontend] 
    NextJS[Next.js Frontend] 
    API[.NET Core API]
    DB[(Database)]
    
    Angular -->|HTTP Requests|API
    NextJS -->|HTTP Requests|API
    API -->|Entity Framework Core| DB
```

# Usage
* After running the API project, update the localhost address in the frontend you want to use.
* The password for all sample users is `123456`. The following usernames can be used to log in: `ethanbennett`, `ameliaross`, `benjaminsullivan`, `oliviafoster`, and `henryanderson`.

# Database
* Database tables are shown below.

```mermaid
erDiagram

    USER ||--o{ POST : creates
    USER ||--o{ COMMENT : writes
    USER ||--o{ LIKE : makes
    USER ||--o{ FOLLOW : follows

    POST ||--o{ COMMENT : has
    FEED ||--o{ POST : has
    POST ||--o{ LIKE : receives

    CONVERSATION ||--o{ MESSAGE : has

    COMMENT {
        int CommentId
        int PostId
        int UserId
        string Text
        int LikeCount
        int RetweetCount
        int CommentCount
        DateTime CreatedDate
    }

    COMMENTCOUNT {
        int CommentCountId
        int PostId
        int CommentId
        int UserId
        bool Liked
        bool Reposted
    }

    CONVERSATION {
        int ConversationId
        int User1
        int User2
        DateTime CreatedDate
    }

    FEED {
        int FeedId PK
        int RepostedUserId FK
        int UserId
        int PostId
        boolean Liked
        boolean  Reposted
    }

    FOLLOW {
        int FollowerId FK
        int FollowingId FK
        datetime CreatedDate
    }

    LIKE {
        int LikeId PK
        int UserId FK
        int PostId FK
        datetime CreatedDate
    }

    MESSAGE {
        int MessageId
        int ConversationId
        string Text
        DateTime CreatedDate
    }

    POST {
        int PostId PK
        int UserId FK
        string Text
        int LikeCount
        int RetweetCount
        int CommentCount
        datetime CreatedDate
    }

    USER {
        int Id PK
        string Username
        string FirstName
        string LastName
        string PasswordSalt
        string PasswordHash
        string Email
        string Bio
        string ProfileLink
        string ProfilePhoto
        string HeaderPhoto
        DateTime CreatedDate
        int FollowerCount
        int FollowingCount
        boolean IsActive
    }

```