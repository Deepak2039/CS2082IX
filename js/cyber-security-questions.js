const cyberSecurityQuestions = [
    {
        question: "What are the three principles of the CIA Triad in cybersecurity?",
        options: [
            "Confidentiality, Integrity, Availability",
            "Confidentiality, Internet, Authentication",
            "Cybersecurity, Integrity, Access",
            "Control, Integrity, Authorization"
        ],
        answer: 0,
        explanation: "The CIA Triad stands for Confidentiality (protecting information from unauthorized access), Integrity (ensuring information is accurate and unaltered), and Availability (ensuring systems and data are accessible when needed)."
    },
    {
        question: "What is the primary goal of a phishing attack?",
        options: [
            "To encrypt your files for ransom",
            "To trick you into revealing sensitive information",
            "To slow down your computer",
            "To display unwanted advertisements"
        ],
        answer: 1,
        explanation: "Phishing attacks aim to deceive individuals into revealing sensitive information such as usernames, passwords, or credit card details by masquerading as a trustworthy entity."
    },
    {
        question: "Which of the following is NOT a characteristic of a strong password?",
        options: [
            "At least 12 characters long",
            "Contains personal information like your birthdate",
            "Includes a mix of uppercase and lowercase letters",
            "Contains numbers and special characters"
        ],
        answer: 1,
        explanation: "Strong passwords should never contain personal information like birthdates, as this information can be easily guessed or found online by attackers."
    },
    {
        question: "What does two-factor authentication (2FA) add to the login process?",
        options: [
            "An additional password",
            "A second form of verification",
            "Longer login time",
            "Automatic login"
        ],
        answer: 1,
        explanation: "Two-factor authentication adds a second layer of security by requiring not just a password and username but also something that only the user has on them, such as a physical token or a phone-generated code."
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        options: [
            "To increase internet speed",
            "To create a secure connection over a public network",
            "To block all advertisements",
            "To store passwords securely"
        ],
        answer: 1,
        explanation: "A VPN creates a secure, encrypted connection over a public network (like the internet) to protect your online privacy and secure your data from eavesdropping."
    },
    {
        question: "What is 'doxxing' in the context of online behavior?",
        options: [
            "Posting multiple comments on a forum",
            "Publicly revealing someone's private information without consent",
            "Creating multiple social media accounts",
            "Sharing memes online"
        ],
        answer: 1,
        explanation: "Doxxing is the malicious act of publicly revealing previously private personal information about an individual or organization, usually through the internet."
    },
    {
        question: "What is the best practice when you receive an email attachment from an unknown sender?",
        options: [
            "Open it immediately to check the contents",
            "Forward it to your friends to see if they know the sender",
            "Delete it without opening",
            "Reply to ask who they are"
        ],
        answer: 2,
        explanation: "Email attachments from unknown senders may contain malware. The safest practice is to delete such emails without opening any attachments."
    },
    {
        question: "What is 'netiquette'?",
        options: [
            "A type of fishing net",
            "Rules for internet safety",
            "Etiquette for online communication",
            "A social media platform"
        ],
        answer: 2,
        explanation: "Netiquette (internet + etiquette) refers to the rules of polite and respectful behavior that should be followed when communicating online."
    },
    {
        question: "What is the purpose of a firewall?",
        options: [
            "To block all internet access",
            "To monitor and control incoming and outgoing network traffic",
            "To increase internet speed",
            "To store website passwords"
        ],
        answer: 1,
        explanation: "A firewall acts as a barrier between a trusted network and an untrusted network, monitoring and controlling incoming and outgoing network traffic based on predetermined security rules."
    },
    {
        question: "What does 'https://' in a website URL indicate?",
        options: [
            "The website is a government site",
            "The connection to the website is encrypted",
            "The website contains high-definition content",
            "The website is a social media platform"
        ],
        answer: 1,
        explanation: "The 'https://' indicates that the connection to the website is encrypted and secure, using SSL/TLS protocol to protect data in transit."
    },
    {
        question: "What is 'social engineering' in cybersecurity?",
        options: [
            "A type of computer programming",
            "The study of social media algorithms",
            "Psychological manipulation to trick people into revealing confidential information",
            "A method for organizing social events"
        ],
        answer: 2,
        explanation: "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information, often for malicious purposes."
    },
    {
        question: "What should you do if you suspect your account has been hacked?",
        options: [
            "Ignore it and hope it gets better",
            "Change your password immediately and enable 2FA",
            "Share the incident on social media",
            "Create a new account with the same password"
        ],
        answer: 1,
        explanation: "If you suspect your account has been compromised, immediately change your password to a strong, unique one and enable two-factor authentication if available."
    },
    {
        question: "What is 'ransomware'?",
        options: [
            "Software that protects against viruses",
            "Malicious software that blocks access to a computer system until a sum of money is paid",
            "A type of firewall",
            "A secure method of online payment"
        ],
        answer: 1,
        explanation: "Ransomware is a type of malicious software designed to block access to a computer system or data, often by encrypting it, until a sum of money is paid."
    },
    {
        question: "What is 'digital footprint'?",
        options: [
            "A type of shoe size measurement",
            "The information about a person that exists on the internet as a result of their online activity",
            "A security feature for online banking",
            "A method for compressing digital files"
        ],
        answer: 1,
        explanation: "A digital footprint is the trail of data you create while using the internet, including websites you visit, emails you send, and information you submit online."
    },
    {
        question: "What is the purpose of a password manager?",
        options: [
            "To remember all your passwords for you",
            "To create and store strong, unique passwords for each of your accounts",
            "To share your passwords with friends",
            "To store your credit card information"
        ],
        answer: 1,
        explanation: "A password manager helps generate and store strong, unique passwords for all your accounts, so you don't have to remember them all while maintaining good security practices."
    },
    {
        question: "What is 'cyberbullying'?",
        options: [
            "A type of computer virus",
            "The use of technology to harass, threaten, or target another person",
            "A security protocol",
            "A method for organizing files"
        ],
        answer: 1,
        explanation: "Cyberbullying is the use of digital communication tools to make another person feel angry, sad, or scared, often repeatedly and intentionally."
    },
    {
        question: "What is 'encryption'?",
        options: [
            "The process of compressing files to save space",
            "The process of converting information into a secret code to prevent unauthorized access",
            "The process of backing up data",
            "The process of deleting sensitive information"
        ],
        answer: 1,
        explanation: "Encryption is the process of converting information or data into a code, especially to prevent unauthorized access, making it unreadable to anyone except those who possess the key to decode it."
    },
    {
        question: "What should you do before connecting to a public Wi-Fi network?",
        options: [
            "Disable your firewall",
            "Share your personal information to log in",
            "Verify the network name with staff",
            "Perform online banking transactions"
        ],
        answer: 2,
        explanation: "When using public Wi-Fi, always verify the network name with staff to ensure you're connecting to a legitimate network, as attackers often set up fake networks with similar names."
    },
    {
        question: "What is 'catfishing' in online dating?",
        options: [
            "Posting pictures of cats",
            "Creating a fake online identity to deceive others",
            "A type of fishing game",
            "A social media challenge"
        ],
        answer: 1,
        explanation: "Catfishing is the practice of creating a fake online identity, often with fake profile pictures and information, to deceive others, particularly in online dating."
    },
    {
        question: "What is 'clickbait'?",
        options: [
            "A type of fishing equipment",
            "Content designed to attract attention and encourage visitors to click on a link",
            "A security feature that blocks unwanted ads",
            "A method of organizing bookmarks"
        ],
        answer: 1,
        explanation: "Clickbait is online content designed to attract attention and entice visitors to click on a particular link, often using sensationalist headlines or thumbnails that may be misleading."
    },
    {
        question: "What is 'spyware'?",
        options: [
            "Software that protects your privacy",
            "Malicious software that secretly gathers information about a user's activities",
            "A type of antivirus program",
            "A tool for monitoring children's internet usage"
        ],
        answer: 1,
        explanation: "Spyware is malicious software that secretly gathers information about a person or organization and sends this information to another entity without the user's consent."
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
        question: "What is 'zero-day vulnerability'?",
        options: [
            "A software bug that is fixed before release",
            "A security hole in software that is unknown to the vendor",
            "A type of strong password",
            "A security feature in web browsers"
        ],
        answer: 1,
        explanation: "A zero-day vulnerability is a software security flaw that is unknown to the party or parties responsible for patching or fixing the flaw, leaving systems vulnerable to attack."
    },
    {
        question: "What is 'whaling' in cybersecurity?",
        options: [
            "A type of phishing attack targeting high-profile individuals",
            "A method of encrypting data",
            "A type of computer virus",
            "A security certification"
        ],
        answer: 0,
        explanation: "Whaling is a type of phishing attack that specifically targets high-profile individuals such as CEOs, CFOs, or other executives to steal sensitive information or gain access to their computer systems."
    },
    {
        question: "What is 'brute force attack'?",
        options: [
            "A physical attack on computer hardware",
            "A trial-and-error method to decode encrypted data",
            "A type of social engineering",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "A brute force attack is a trial-and-error method used to obtain information such as a user password or personal identification number (PIN) by systematically trying all possible combinations."
    },
    {
        question: "What is 'multi-factor authentication' (MFA)?",
        options: [
            "Using multiple passwords for one account",
            "A security system that requires multiple methods of verification",
            "Having multiple user accounts",
            "Using the same password for multiple accounts"
        ],
        answer: 1,
        explanation: "Multi-factor authentication is a security system that requires more than one method of authentication from independent categories of credentials to verify the user's identity for a login or other transaction."
    },
    {
        question: "What is 'shoulder surfing'?",
        options: [
            "A type of computer monitor",
            "Looking over someone's shoulder to get their password or PIN",
            "A social media trend",
            "A method for organizing files"
        ],
        answer: 1,
        explanation: "Shoulder surfing is a type of social engineering technique where an attacker looks over someone's shoulder to get information such as passwords, PINs, or other sensitive data."
    },
    {
        question: "What is 'data breach'?",
        options: [
            "A type of computer virus",
            "An incident where information is stolen or taken from a system without the knowledge or authorization of the system's owner",
            "A security feature in web browsers",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "A data breach is a security incident in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen, or used by an individual unauthorized to do so."
    },
    {
        question: "What is 'cookie' in web browsing?",
        options: [
            "A type of malware",
            "A small piece of data stored on the user's computer by the web browser",
            "A security certificate",
            "A type of firewall"
        ],
        answer: 1,
        explanation: "A cookie is a small piece of data stored on the user's computer by the web browser while browsing a website, used to remember stateful information or record the user's browsing activity."
    },
    {
        question: "What is 'DDoS attack'?",
        options: [
            "A type of phishing attack",
            "A method for encrypting data",
            "An attempt to make an online service unavailable by overwhelming it with traffic from multiple sources",
            "A security protocol"
        ],
        answer: 2,
        explanation: "A Distributed Denial of Service (DDoS) attack is a malicious attempt to disrupt normal traffic of a targeted server, service, or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic."
    },
    {
        question: "What is 'end-to-end encryption'?",
        options: [
            "A method for compressing files",
            "A security system where only the communicating users can read the messages",
            "A type of firewall",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "End-to-end encryption is a method of secure communication that prevents third-parties from accessing data while it's transferred from one end system or device to another."
    },
    {
        question: "What is 'firewall' in computer networking?",
        options: [
            "A physical barrier that protects against fire damage",
            "A security system that monitors and controls incoming and outgoing network traffic",
            "A type of computer virus",
            "A method for increasing internet speed"
        ],
        answer: 1,
        explanation: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies."
    },
    {
        question: "What is 'keylogger'?",
        options: [
            "A device for creating secure passwords",
            "A type of computer virus that records keystrokes",
            "A security certificate",
            "A method for encrypting data"
        ],
        answer: 1,
        explanation: "A keylogger is a type of surveillance technology used to monitor and record each keystroke typed on a specific computer's keyboard, often used maliciously to steal passwords and other sensitive information."
    },
    {
        question: "What is 'malware'?",
        options: [
            "Software that protects against viruses",
            "Malicious software designed to harm or exploit any device, service, or network",
            "A type of firewall",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "Malware (malicious software) is any software intentionally designed to cause damage to a computer, server, client, or computer network, or to gain unauthorized access to data."
    },
    {
        question: "What is 'pharming' in cybersecurity?",
        options: [
            "A type of farming simulation game",
            "A cyber attack intended to redirect a website's traffic to a fake site",
            "A method for organizing files",
            "A security protocol"
        ],
        answer: 1,
        explanation: "Pharming is a cyber attack intended to redirect a website's traffic to a fake site, where the attacker can steal personal information such as usernames, passwords, and credit card details."
    },
    {
        question: "What is 'ransomware'?",
        options: [
            "Software that protects against viruses",
            "Malicious software that blocks access to a computer system until a sum of money is paid",
            "A type of firewall",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "Ransomware is a type of malicious software designed to block access to a computer system or data, often by encrypting it, until a sum of money is paid."
    },
    {
        question: "What is 'social engineering'?",
        options: [
            "The study of social media algorithms",
            "A type of computer programming",
            "Psychological manipulation of people into performing actions or divulging confidential information",
            "A method for organizing social events"
        ],
        answer: 2,
        explanation: "Social engineering is the psychological manipulation of people into performing actions or divulging confidential information, often for malicious purposes."
    },
    {
        question: "What is 'spyware'?",
        options: [
            "Software that protects your privacy",
            "Malicious software that secretly gathers information about a user's activities",
            "A type of antivirus program",
            "A tool for monitoring children's internet usage"
        ],
        answer: 1,
        explanation: "Spyware is malicious software that secretly gathers information about a person or organization and sends this information to another entity without the user's consent."
    },
    {
        question: "What is 'Trojan horse' in cybersecurity?",
        options: [
            "A type of firewall",
            "A method for encrypting data",
            "Malicious software that misleads users of its true intent",
            "A security protocol"
        ],
        answer: 2,
        explanation: "A Trojan horse is any malicious computer program which misleads users of its true intent, often disguised as legitimate software, similar to the ancient Greek story of the wooden horse."
    },
    {
        question: "What is 'virus' in computing?",
        options: [
            "A type of malware that spreads by inserting copies of itself into other computer programs",
            "A security feature in web browsers",
            "A method for backing up data",
            "A type of firewall"
        ],
        answer: 0,
        explanation: "A computer virus is a type of malicious code or program written to alter the way a computer operates and is designed to spread from one computer to another by inserting or attaching itself to a legitimate program or document."
    },
    {
        question: "What is 'worm' in cybersecurity?",
        options: [
            "A type of computer virus that replicates itself in order to spread to other computers",
            "A security feature in web browsers",
            "A method for backing up data",
            "A type of firewall"
        ],
        answer: 0,
        explanation: "A computer worm is a standalone malware computer program that replicates itself in order to spread to other computers, often using a computer network to spread itself, relying on security failures on the target computer to access it."
    },
    {
        question: "What is 'zero-day exploit'?",
        options: [
            "A type of computer virus",
            "A security feature in web browsers",
            "A cyber attack that occurs on the same day a weakness is discovered in software",
            "A method for backing up data"
        ],
        answer: 2,
        explanation: "A zero-day exploit is a cyber attack that occurs on the same day a weakness is discovered in software, before the software vendor has a chance to create a patch to fix the vulnerability."
    },
    {
        question: "What is 'biometric authentication'?",
        options: [
            "A type of password",
            "A security process that relies on the unique biological characteristics of an individual",
            "A method for encrypting data",
            "A type of firewall"
        ],
        answer: 1,
        explanation: "Biometric authentication is a security process that relies on the unique biological characteristics of an individual, such as fingerprints, facial recognition, or iris scans, to verify their identity."
    },
    {
        question: "What is 'CAPTCHA'?",
        options: [
            "A type of computer virus",
            "A security feature in web browsers",
            "A test to determine whether the user is human",
            "A method for backing up data"
        ],
        answer: 2,
        explanation: "CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart) is a type of challenge-response test used in computing to determine whether the user is human."
    },
    {
        question: "What is 'data encryption standard' (DES)?",
        options: [
            "A type of computer virus",
            "A symmetric-key algorithm for the encryption of digital data",
            "A security feature in web browsers",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "The Data Encryption Standard (DES) is a symmetric-key algorithm for the encryption of digital data, now considered to be insecure for many applications due to its small key size."
    },
    {
        question: "What is 'identity theft'?",
        options: [
            "A type of computer virus",
            "The fraudulent acquisition and use of a person's private identifying information",
            "A security feature in web browsers",
            "A method for backing up data"
        ],
        answer: 1,
        explanation: "Identity theft is the fraudulent acquisition and use of a person's private identifying information, usually for financial gain, often resulting in financial loss or other related problems for the victim."
    },
    {
        question: "What is 'man-in-the-middle attack'?",
        options: [
            "A type of computer virus",
            "A security feature in web browsers",
            "A method for backing up data",
            "A cyber attack where the attacker secretly relays and possibly alters the communications between two parties"
        ],
        answer: 3,
        explanation: "A man-in-the-middle attack is a cyber attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other."
    }
];
