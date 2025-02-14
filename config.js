const CONFIG = {
    valentineName: "Fernanda",
    pageTitle: "Will You Be My Valentine? 💝",

    // https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🐵', '🙈', '🙊', '🙉']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you love me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "Por su pollo que Chiii! ❤️"
        },
        second: {
            text: "How much?",
            startText: "This much!",
            nextBtn: "Next ❤️" ,
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes!",
            noBtn: "No" ,
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Mil choco mil 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰",
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yaaaay! I'm truly the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come here mi changuita to get a big hug! I love u with all my ❤️",
        emojis: "🎁💖🐵💝🐵💕"
    },

    // Use https://colorhunt.co or https://coolors.co
    colors: {
        backgroundStart: "#BFD4DB",      
        backgroundEnd: "#78A2CC",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dlkmcyayt/video/upload/v1739564425/Roa_-_Better_Days_fljvpw.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;