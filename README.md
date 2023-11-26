# Twitter-Like Database Schema Design

## Users Table

**Table Name:** Users

**Attributes:**

- `id` (bigint, serial, primary key)
- `name` (string, max 100 chars, not null)
- `username` (string, unique, max 50 chars, not null)
- `email` (string, unique, max 120 chars, not null)
- `emailVerifiedAt` (timestamp, nullable)
- `passwordHash` (string, max 512 chars, not null)
- `bio` (string, max 160 chars, not null)
- `location` (string, max 50 chars, not null)
- `website` (string, max 100 chars, not null)
- `profilePicture` (string, max 1024 chars, not null)
- `coverPicture` (string, max 1024 chars, not null)
- `dateOfBirth` (timestamp, not null)
- `createdAt` (timestamp, not null, default: NOW)
- `updatedAt` (timestamp, not null, default: NOW)

## Posts Table

**Table Name:** Posts

**Attributes:**

- `id`: (bigint serial primary key)
- `type`: (enum ['post' | 'repost' | 'reply'] (not null, default: 'post'))
- `referenceId`: (bigint foreign key nullable (references: posts.id))
- `isRepost`: (bool not null)
- `userId`: (bigint foreign key (not null, references: users.id))
- `content`: (string 280 chars max (can be null))
- `postedAt`: (timestamp nullable)
- `createdAt`: (timestamp (not null, default: NOW))
- `updatedAt`: (timestamp (null, default: NOW))
- `deletedAt`: (timestamp nullable)

## User Follows Table

**Table Name:** user_follows

**Attributes:**

- `id` (bigint, primary key)
- `followerId` (bigint, foreign key, references users.id)
- `followedId` (bigint, foreign key, references users.id)
- `FollowedAt` (timestamp)

**Constraints:**

- Unique combination of (`followerId`, `followedId`)
- Check constraint: `followerId` != `followedId`

## Post Likes Table

**Table Name:** post_likes

**Attributes:**

- `id` (bigint, primary key)
- `userId` (bigint, foreign key, references users.id)
- `postId` (bigint, foreign key, references posts.id)
- `likedAt` (timestamp)

**Constraints:**

- Unique combination of (`userId`, `postId`)

## Relationships

- **Users <-> Posts:** One-to-Many (One user can have multiple posts)
- **Users <-> user_follows:** Self-Referencing Many-to-Many (Users can follow many users)
- **Posts <-> post_likes:** Many-to-Many (Posts can be liked by many users)
