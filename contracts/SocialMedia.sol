// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialMedia {
    // Struct to represent a post
    struct Post {
        address author;
        string content;
    }

    // Mapping to store user posts
    mapping(address => Post[]) private userPosts;

    // Event to log post creation
    event PostCreated(address indexed author, string content);

    // Function to create a new post
    function createPost(string memory _content) public {
        require(bytes(_content).length > 0, "Content must not be empty");
        
        Post memory newPost = Post(msg.sender, _content);
        userPosts[msg.sender].push(newPost);

        // Emit an event to log the post creation
        emit PostCreated(msg.sender, _content);
    }

    // Function to retrieve a user's post by index
    function getPosts(address user_address) public view returns (Post[] memory) {
        Post[] memory posts = userPosts[user_address];
        return posts;
    }
}