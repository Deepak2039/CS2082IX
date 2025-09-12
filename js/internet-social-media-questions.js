// Internet & Social Media MCQ Questions
const internetSocialMediaQuestions = [
    {
        question: "What does URL stand for?",
        options: [
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Uniform Reference Link"
        ],
        answer: 1,
        explanation: "URL stands for Uniform Resource Locator, which is the address of a resource on the internet."
    },
    {
        question: "Which of the following is NOT a social media platform?",
        options: ["Facebook", "Twitter", "Netflix", "Instagram"],
        answer: 2,
        explanation: "Netflix is a streaming service, not a social media platform."
    },
    {
        question: "What is the purpose of a VPN?",
        options: [
            "To increase internet speed",
            "To create a secure connection over the internet",
            "To block ads on websites",
            "To increase storage space"
        ],
        answer: 1,
        explanation: "A VPN (Virtual Private Network) creates a secure, encrypted connection over the internet to protect your online privacy."
    },
    {
        question: "What does 'https://' at the beginning of a URL indicate?",
        options: [
            "The website has high-definition content",
            "The website is a hypertext document",
            "The connection to the website is encrypted and secure",
            "The website is hosted on a high-performance server"
        ],
        answer: 2,
        explanation: "The 'https://' indicates that the connection to the website is encrypted and secure, using SSL/TLS protocol."
    },
    {
        question: "What is the maximum character limit for a standard tweet on Twitter?",
        options: ["140", "240", "280", "320"],
        answer: 2,
        explanation: "As of 2017, the character limit for a standard tweet on Twitter is 280 characters."
    },
    {
        question: "Which of the following is NOT a web browser?",
        options: ["Chrome", "Firefox", "Safari", "Outlook"],
        answer: 3,
        explanation: "Outlook is an email client, not a web browser."
    },
    {
        question: "What does 'DM' stand for in social media?",
        options: [
            "Direct Message",
            "Digital Mail",
            "Daily Message",
            "Data Management"
        ],
        answer: 0,
        explanation: "DM stands for Direct Message, which is a private message between users on social media platforms."
    },
    {
        question: "Which social media platform is known for its disappearing messages feature?",
        options: ["Facebook", "Twitter", "Snapchat", "LinkedIn"],
        answer: 2,
        explanation: "Snapchat is known for its disappearing messages feature, where messages and photos are automatically deleted after being viewed."
    },
    {
        question: "What is the purpose of a hashtag (#) in social media?",
        options: [
            "To tag friends in posts",
            "To categorize content and make it discoverable",
            "To increase font size",
            "To create a bullet list"
        ],
        answer: 1,
        explanation: "A hashtag is used to categorize content and make it discoverable to others interested in the same topic."
    },
    {
        question: "Which of the following is a professional networking site?",
        options: ["Instagram", "LinkedIn", "TikTok", "Pinterest"],
        answer: 1,
        explanation: "LinkedIn is a professional networking site focused on business and employment."
    },
    {
        question: "What is 'phishing' in the context of internet security?",
        options: [
            "A type of online fishing game",
            "A method of catching spam emails",
            "A fraudulent attempt to obtain sensitive information",
            "A way to organize bookmarks"
        ],
        answer: 2,
        explanation: "Phishing is a cybercrime where targets are contacted by email, telephone, or text message by someone posing as a legitimate institution to lure individuals into providing sensitive data."
    },
    {
        question: "Which social media platform is primarily focused on sharing photos and videos?",
        options: ["Twitter", "Instagram", "LinkedIn", "Reddit"],
        answer: 1,
        explanation: "Instagram is primarily focused on sharing photos and videos, with features like Stories, Reels, and IGTV."
    },
    {
        question: "What does 'URL shortening' do?",
        options: [
            "Makes web pages load faster",
            "Reduces the length of a URL",
            "Increases internet speed",
            "Compresses website content"
        ],
        answer: 1,
        explanation: "URL shortening creates an alternative, shorter version of a URL, making it easier to share, especially on platforms with character limits."
    },
    {
        question: "Which of the following is NOT a common social media metric?",
        options: ["Likes", "Shares", "Downloads", "Impressions"],
        answer: 2,
        explanation: "While downloads are important for apps, they are not typically considered a primary social media metric like likes, shares, or impressions."
    },
    {
        question: "What is 'netiquette'?",
        options: [
            "A type of internet hardware",
            "Rules for internet safety",
            "Etiquette for online communication",
            "A social media platform"
        ],
        answer: 2,
        explanation: "Netiquette (internet + etiquette) refers to the rules of etiquette that apply to online communication."
    },
    {
        question: "Which social media platform is known for its 280-character limit per post?",
        options: ["Facebook", "Instagram", "Twitter", "TikTok"],
        answer: 2,
        explanation: "Twitter is known for its character limit per post, which was increased from 140 to 280 characters in 2017."
    },
    {
        question: "What is 'catfishing' in the context of social media?",
        options: [
            "Posting pictures of cats",
            "Creating a fake online identity to deceive others",
            "A type of online fishing game",
            "A social media challenge"
        ],
        answer: 1,
        explanation: "Catfishing is the practice of creating a fake online identity, often to deceive or scam others."
    },
    {
        question: "Which of the following is NOT a common social media platform for businesses?",
        options: ["LinkedIn", "Facebook", "Instagram", "Microsoft Word"],
        answer: 3,
        explanation: "Microsoft Word is a word processing application, not a social media platform."
    },
    {
        question: "What is 'trolling' in online communities?",
        options: [
            "A type of fishing",
            "Posting inflammatory or off-topic messages",
            "A social media feature",
            "A way to organize content"
        ],
        answer: 1,
        explanation: "Trolling is the act of posting inflammatory, extraneous, or off-topic messages in an online community with the intent of provoking readers or disrupting normal discussion."
    },
    {
        question: "Which social media platform is known for its 'Stories' feature that disappears after 24 hours?",
        options: ["Facebook", "Instagram", "Snapchat", "All of the above"],
        answer: 3,
        explanation: "While Snapchat originated the disappearing stories feature, it has since been adopted by Instagram, Facebook, and other platforms."
    },
    {
        question: "What is 'two-factor authentication' used for?",
        options: [
            "To create multiple social media accounts",
            "To increase internet speed",
            "For additional security when logging in",
            "To organize email folders"
        ],
        answer: 2,
        explanation: "Two-factor authentication adds an extra layer of security by requiring two forms of identification before granting access to an account."
    },
    {
        question: "What is the main purpose of a social media algorithm?",
        options: [
            "To determine what content users see in their feeds",
            "To encrypt private messages",
            "To create hashtags automatically",
            "To block spam accounts"
        ],
        answer: 0,
        explanation: "Social media algorithms analyze user behavior to determine which content to show in their feeds, prioritizing content that is most likely to engage them."
    },
    {
        question: "Which of the following is NOT a common social media platform for sharing short videos?",
        options: ["TikTok", "Instagram Reels", "YouTube Shorts", "Pinterest"],
        answer: 3,
        explanation: "While Pinterest supports video content, it's primarily known for image sharing and inspiration boards, not short-form video content like TikTok, Instagram Reels, or YouTube Shorts."
    },
    {
        question: "What is 'doxxing' in the context of online behavior?",
        options: [
            "A type of online shopping",
            "Publicly revealing someone's private information without consent",
            "A method of organizing digital files",
            "A social media trend"
        ],
        answer: 1,
        explanation: "Doxxing is the malicious act of publicly revealing previously private personal information about an individual or organization, usually through the internet."
    },
    {
        question: "Which social media platform is primarily focused on professional networking and career development?",
        options: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
        answer: 1,
        explanation: "LinkedIn is specifically designed for professional networking and career development, allowing users to connect with colleagues, find jobs, and share professional content."
    },
    {
        question: "What is 'shadow banning' on social media?",
        options: [
            "Blocking all light from a user's profile",
            "A type of photo filter",
            "Limiting the visibility of a user's content without their knowledge",
            "A privacy setting for night mode"
        ],
        answer: 2,
        explanation: "Shadow banning is when a social media platform limits the visibility of a user's content in others' feeds without notifying the user, often used as a moderation technique."
    },
    {
        question: "Which of the following is NOT a common type of social media content?",
        options: ["Blog posts", "Status updates", "Spreadsheets", "Live videos"],
        answer: 2,
        explanation: "While spreadsheets can be shared on social media, they are not a common or native content type specifically designed for social media platforms."
    },
    {
        question: "What is the purpose of 'end-to-end encryption' in messaging apps?",
        options: [
            "To compress messages for faster sending",
            "To ensure only the sender and recipient can read the messages",
            "To translate messages between languages",
            "To add special effects to messages"
        ],
        answer: 1,
        explanation: "End-to-end encryption ensures that only the communicating users can read the messages, preventing potential eavesdroppers from accessing the cryptographic keys needed to decrypt the conversation."
    },
    {
        question: "Which social media platform is known for its 'pins' and 'boards' features?",
        options: ["Pinterest", "Twitter", "Facebook", "Snapchat"],
        answer: 0,
        explanation: "Pinterest is known for its 'pins' (saved images or videos) and 'boards' (collections of pins) that users create to organize and share ideas and inspiration."
    },
    {
        question: "What is 'clickbait' in the context of online content?",
        options: [
            "A type of fishing equipment",
            "Content designed to attract attention and encourage visitors to click on a link",
            "A feature that blocks unwanted ads",
            "A method of organizing bookmarks"
        ],
        answer: 1,
        explanation: "Clickbait is online content designed to attract attention and entice visitors to click on a particular link, often using sensationalist headlines or thumbnails that may be misleading."
    },
    {
        question: "Which of the following is NOT a common social media platform for sharing professional work portfolios?",
        options: ["Behance", "Dribbble", "GitHub", "WhatsApp"],
        answer: 3,
        explanation: "While WhatsApp is a popular messaging app, it's not typically used as a platform for sharing professional work portfolios like Behance (design), Dribbble (design), or GitHub (code)."
    },
    {
        question: "What is 'geotagging' in social media?",
        options: [
            "Adding location information to digital content",
            "A type of hashtag",
            "A method for organizing photos by color",
            "A privacy setting that hides your location"
        ],
        answer: 0,
        explanation: "Geotagging is the process of adding geographical identification metadata to various media such as photos, videos, or social media posts, which can then be used to plot the content on a map."
    },
    {
        question: "Which social media platform is known for its 'fleets' feature (since discontinued)?",
        options: ["Facebook", "Instagram", "Twitter", "Snapchat"],
        answer: 2,
        explanation: "Twitter introduced 'Fleets' as its version of disappearing stories in 2020, but the feature was discontinued in 2021 due to low user engagement."
    },
    {
        question: "What is 'digital footprint'?",
        options: [
            "A type of shoe size measurement",
            "The information about a particular person that exists on the internet as a result of their online activity",
            "A security feature for online banking",
            "A method for compressing digital files"
        ],
        answer: 1,
        explanation: "A digital footprint is the trail of data you create while using the internet, including websites you visit, emails you send, and information you submit online."
    },
    {
        question: "Which of the following is NOT a common social media platform for sharing code and software development projects?",
        options: ["GitHub", "GitLab", "Bitbucket", "Patreon"],
        answer: 3,
        explanation: "Patreon is a membership platform that provides business tools for creators to run a subscription content service, while the others are platforms for version control and collaboration on software development projects."
    },
    {
        question: "What is 'ghosting' in the context of online communication?",
        options: [
            "A Halloween-themed filter",
            "When someone stops responding to messages without explanation",
            "A type of internet speed",
            "A security feature that hides your online status"
        ],
        answer: 1,
        explanation: "Ghosting refers to the practice of ending a personal relationship with someone by suddenly and without explanation withdrawing from all communication."
    },
    {
        question: "Which social media platform is known for its 'subreddits'?",
        options: ["Reddit", "Tumblr", "Discord", "Telegram"],
        answer: 0,
        explanation: "Reddit is organized into 'subreddits,' which are individual communities focused on specific topics, each with its own rules and moderators."
    },
    {
        question: "What is 'deepfake' technology?",
        options: [
            "A type of high-resolution display",
            "A method for compressing video files",
            "Synthetic media where a person's likeness is replaced with someone else's",
            "A security protocol for online transactions"
        ],
        answer: 2,
        explanation: "Deepfake technology uses artificial intelligence to create convincing images, audio, and video hoaxes, often superimposing one person's face onto another's body or altering their speech."
    },
    {
        question: "Which of the following is NOT a common social media platform for sharing short, looping videos?",
        options: ["Vine (discontinued)", "TikTok", "Instagram Reels", "YouTube"],
        answer: 3,
        explanation: "While YouTube supports short-form content, it's primarily known for longer-form videos, unlike Vine (now defunct), TikTok, and Instagram Reels which are specifically designed for short, looping videos."
    },
    {
        question: "What is 'doxxing' in the context of online behavior?",
        options: [
            "A type of online shopping",
            "Publicly revealing someone's private information without consent",
            "A method of organizing digital files",
            "A social media trend"
        ],
        answer: 1,
        explanation: "Doxxing is the malicious act of publicly revealing previously private personal information about an individual or organization, usually through the internet."
    },
    {
        question: "Which social media platform is primarily focused on professional networking and career development?",
        options: ["Facebook", "LinkedIn", "Twitter", "Instagram"],
        answer: 1,
        explanation: "LinkedIn is specifically designed for professional networking and career development, allowing users to connect with colleagues, find jobs, and share professional content."
    },
    {
        question: "What is 'shadow banning' on social media?",
        options: [
            "Blocking all light from a user's profile",
            "A type of photo filter",
            "Limiting the visibility of a user's content without their knowledge",
            "A privacy setting for night mode"
        ],
        answer: 2,
        explanation: "Shadow banning is when a social media platform limits the visibility of a user's content in others' feeds without notifying the user, often used as a moderation technique."
    },
    {
        question: "Which of the following is NOT a common type of social media content?",
        options: ["Blog posts", "Status updates", "Spreadsheets", "Live videos"],
        answer: 2,
        explanation: "While spreadsheets can be shared on social media, they are not a common or native content type specifically designed for social media platforms."
    },
    {
        question: "What is the purpose of 'end-to-end encryption' in messaging apps?",
        options: [
            "To compress messages for faster sending",
            "To ensure only the sender and recipient can read the messages",
            "To translate messages between languages",
            "To add special effects to messages"
        ],
        answer: 1,
        explanation: "End-to-end encryption ensures that only the communicating users can read the messages, preventing potential eavesdroppers from accessing the cryptographic keys needed to decrypt the conversation."
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["src", "alt", "title", "longdesc"],
        answer: 1,
        explanation: "The 'alt' attribute provides alternative information for an image."
    },
    {
        question: "What is the primary purpose of a content delivery network (CDN)?",
        options: [
            "To store user passwords securely",
            "To deliver web content faster to users based on their geographic location",
            "To block malicious websites",
            "To create virtual private networks"
        ],
        answer: 1,
        explanation: "A CDN is a network of servers that delivers web content to users based on their geographic location, improving load times and reducing latency."
    },
    {
        question: "What is 'phishing' in the context of internet security?",
        options: [
            "A fishing game played online",
            "A method of organizing email messages",
            "A fraudulent attempt to obtain sensitive information",
            "A type of video streaming"
        ],
        answer: 2,
        explanation: "Phishing is a cyber attack where attackers pose as trustworthy entities to trick individuals into revealing sensitive information like passwords or credit card numbers."
    },
    {
        question: "Which social media platform has a character limit of 280 characters per post?",
        options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
        answer: 2,
        explanation: "Twitter increased its character limit from 140 to 280 characters in 2017, allowing for longer tweets."
    },
    {
        question: "What does 'URL' stand for?",
        options: [
            "Universal Resource Locator",
            "Uniform Resource Locator",
            "Universal Reference Link",
            "Uniform Reference Link"
        ],
        answer: 1,
        explanation: "URL stands for Uniform Resource Locator, which is the address of a resource on the internet."
    },
    {
        question: "Which of the following is NOT a social media platform?",
        options: ["Facebook", "Twitter", "Netflix", "Instagram"],
        answer: 2,
        explanation: "Netflix is a streaming service, not a social media platform."
    },
    {
        question: "What is the purpose of a VPN?",
        options: [
            "To increase internet speed",
            "To create a secure connection over the internet",
            "To block ads on websites",
            "To increase storage space"
        ],
        answer: 1,
        explanation: "A VPN (Virtual Private Network) creates a secure, encrypted connection over the internet to protect your online privacy."
    },
    {
        question: "What does 'https://' at the beginning of a URL indicate?",
        options: [
            "The website has high-definition content",
            "The website is a hypertext document",
            "The connection to the website is encrypted and secure",
            "The website is hosted on a high-performance server"
        ],
        answer: 2,
        explanation: "The 'https://' indicates that the connection to the website is encrypted and secure, using SSL/TLS protocol."
    },
    {
        question: "What is the maximum character limit for a standard tweet on Twitter?",
        options: ["140", "240", "280", "320"],
        answer: 2,
        explanation: "As of 2017, the character limit for a standard tweet on Twitter is 280 characters."
    },
    {
        question: "Which of the following is NOT a web browser?",
        options: ["Chrome", "Firefox", "Safari", "Outlook"],
        answer: 3,
        explanation: "Outlook is an email client, not a web browser."
    }
];
