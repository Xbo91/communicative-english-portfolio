const fs = require('fs');
const filePath = '/Users/mr.hansulrahman/Documents/BICT NOTES/2nd sem/Communcative English/website/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// The new entries data
const newEntries = {
    "03": {
        track: "03", channel: "DOAC", channelLabel: "Diary of a CEO",
        title: "Simon Sinek: How To Build A Successful Business",
        dateAccessed: "17 Jun 2026", published: "14 May 2024",
        refText: "YouTube — “The Diary Of A CEO” channel, hosted by Steven Bartlett.",
        refLink: "https://www.youtube.com/watch?v=Z-4w0O49-Jk",
        embedUrl: "https://www.youtube-nocookie.com/embed/Z-4w0O49-Jk",
        summary: "Steven Bartlett interviews Simon Sinek, a renowned author and leadership expert. They discuss the critical difference between having a 'finite' versus an 'infinite' mindset in business and life. Sinek argues that true leaders focus on long-term sustainability and employee well-being rather than short-term profits.",
        opinion: "This interview completely reframed how I view leadership. Sinek’s concept of the 'infinite game' made me realize that trying to 'beat the competition' is a flawed metric. Instead, the focus should be on building something resilient that outlasts you. It was a refreshing contrast to the usual hustle-culture advice.",
        vocab: [
            { term: "infinite game", def: "a situation where the goal is not to win, but to keep playing and ensure the game's continuation" },
            { term: "resilient", def: "able to withstand or recover quickly from difficult conditions" }
        ]
    },
    "04": {
        track: "04", channel: "BBC", channelLabel: "BBC",
        title: "Is AI Taking Over? - BBC Click",
        dateAccessed: "17 Jun 2026", published: "10 Mar 2024",
        refText: "YouTube — BBC Click official technology show.",
        refLink: "https://www.youtube.com/watch?v=FwD6WGE-w4U",
        embedUrl: "https://www.youtube-nocookie.com/embed/FwD6WGE-w4U",
        summary: "The BBC Click team investigates the rapid acceleration of generative AI. They interview industry leaders and explore both the groundbreaking creative possibilities and the ethical dilemmas posed by tools that can generate photorealistic images and human-like text.",
        opinion: "I appreciated the balanced journalism in this piece. Rather than leaning entirely into hype or doomsday scenarios, it provided a grounded look at how AI is practically integrating into various industries. It made me feel less intimidated and more curious about leveraging these tools in my own workflow.",
        vocab: [
            { term: "generative", def: "relating to or capable of production or reproduction, specifically algorithms that can create new content" },
            { term: "dilemma", def: "a situation in which a difficult choice has to be made between two or more alternatives" }
        ]
    },
    "06": {
        track: "06", channel: "TED", channelLabel: "TED",
        title: "Sam Altman: The Inside Story of ChatGPT",
        dateAccessed: "17 Jun 2026", published: "19 Apr 2023",
        refText: "YouTube — TED channel.",
        refLink: "https://www.youtube.com/watch?v=reUZRyXxUs4",
        embedUrl: "https://www.youtube-nocookie.com/embed/reUZRyXxUs4",
        summary: "In this TED Talk, OpenAI CEO Sam Altman discusses the development, unexpected success, and profound implications of ChatGPT. He addresses the fears surrounding AGI (Artificial General Intelligence) and advocates for iterative deployment to allow society time to adapt.",
        opinion: "Hearing directly from the person at the helm of the AI revolution was fascinating. What stood out to me was his emphasis on 'iterative deployment'—the idea that releasing imperfect technology early gives humanity the chance to co-evolve with it. It changed my perspective on why tech companies push beta products.",
        vocab: [
            { term: "iterative", def: "relating to or involving repetition; doing something again and again to improve it" },
            { term: "implications", def: "the conclusion that can be drawn from something, although it is not explicitly stated" }
        ]
    },
    "07": {
        track: "07", channel: "Shetty", channelLabel: "Jay Shetty",
        title: "Kobe Bryant: How To Be A Master At What You Do",
        dateAccessed: "17 Jun 2026", published: "9 Sep 2019",
        refText: "YouTube — On Purpose with Jay Shetty.",
        refLink: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
        embedUrl: "https://www.youtube-nocookie.com/embed/hHW1oY26kxQ",
        summary: "Jay Shetty sits down with the late NBA legend Kobe Bryant to discuss his famous 'Mamba Mentality'. Bryant shares insights on discipline, curiosity, and how true mastery comes from an obsession with the tiny, mundane details of your craft rather than the spotlight.",
        opinion: "This was incredibly inspiring. Bryant’s relentless dedication to analyzing his mistakes rather than ignoring them really resonated with me. It taught me that greatness isn't an innate talent, but a byproduct of extreme consistency and a willingness to be a beginner every single day.",
        vocab: [
            { term: "mundane", def: "lacking interest or excitement; dull or ordinary" },
            { term: "byproduct", def: "an incidental or secondary product made in the manufacture or synthesis of something else" }
        ]
    },
    "09": {
        track: "09", channel: "NYT", channelLabel: "The New York Times",
        title: "The Rise of Artificial Intelligence | NYT",
        dateAccessed: "17 Jun 2026", published: "22 Nov 2023",
        refText: "YouTube — The New York Times.",
        refLink: "https://www.youtube.com/watch?v=u73ceE0N_L0",
        embedUrl: "https://www.youtube-nocookie.com/embed/u73ceE0N_L0",
        summary: "A New York Times visual investigation exploring the timeline and competitive arms race between major tech giants developing AI. The documentary highlights the hidden data harvesting practices used to train these models and the legal battles that have ensued.",
        opinion: "This documentary opened my eyes to the hidden costs of AI development. I had never considered the massive copyright and data privacy implications involved in scraping the internet to train these models. It made me much more critical of how tech companies source their 'training data'.",
        vocab: [
            { term: "harvesting", def: "the process of gathering or collecting (especially data) in large quantities" },
            { term: "ensued", def: "happened or occurred afterward or as a result" }
        ]
    }
};

// We need to parse the file and replace the specific track objects
// A simple way is to use regex to find each track block and replace it if it's in our list.
let modifiedHtml = html;

Object.keys(newEntries).forEach(trackId => {
    const entry = newEntries[trackId];

    // Convert object to a JS string representation
    const entryString = `{
        track: "${entry.track}", channel: "${entry.channel}", channelLabel: "${entry.channelLabel}",
        title: "${entry.title}",
        dateAccessed: "${entry.dateAccessed}", published: "${entry.published}",
        refText: "${entry.refText}",
        refLink: "${entry.refLink}",
        embedUrl: "${entry.embedUrl}",
        summary: "${entry.summary}",
        opinion: "${entry.opinion}",
        vocab: [
            ${entry.vocab.map(v => `{ term: "${v.term}", def: "${v.def}" }`).join(',\n            ')}
        ]
    }`;

    // Regex to match the entire object for this track in the entries array
    const regex = new RegExp(`{\\s*track:\\s*"${trackId}"[\\s\\S]*?vocab:[\\s\\S]*?}\\s*]`, 'g');

    // It's safer to just split by track ID and replace the block
    // Let's use a more robust regex:
    const blockRegex = new RegExp(`{\\s*track:\\s*"${trackId}"[\\s\\S]*?](?=\\s*\\n\\s*[},])`, 'g');

    modifiedHtml = modifiedHtml.replace(blockRegex, entryString);
});

fs.writeFileSync(filePath, modifiedHtml);
console.log("Replaced tracks 03, 04, 06, 07, 09 with new content.");
