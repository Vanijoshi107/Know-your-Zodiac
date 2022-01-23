import { Sign } from "./sign";

export const SIGNS: Sign[] = [
    {
        id: "0",
        name: "Aries",
        image: "assets/images/aries.webp",
        image2: "assets/images/sign/aries.webp",
        date: "Mar 21 - Apr 19",
        heading1: "Aries dates",
        heading2: "Aries traits",
        traits: "eager, dynamic quick, competetive",
        description: "The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life.",
        overview: [{
            element: "fire",
            color: "red",
            ruler: "mars",
            number: "1,8,17",
            gem: "diamond"
        }]
    },
    {
        id: "1",
        name: "Taurus",
        image: "assets/images/taurus.webp",
        image2: "assets/images/sign/taurus.webp",
        heading1: "Taurus dates",
        heading2: "Taurus traits",
        date: "Apr 20 - May 20",
        traits: "Dependable, musical, practical",
        description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most reliable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction.",
        overview: [{
            element: "earth",
            color: "Green, pink",
            ruler: "venus",
            number: "2,6,9,12,24",
            gem: "emerald"
        }]
    },
    {
        id: "2",
        name: "gemini",
        image: "assets/images/gemini.webp",
        image2: "assets/images/sign/gemini.webp",
        date: "May 21- Jun 20",
        heading1: "gemini dates",
        heading2: "gemini traits",
        traits: "CURIOUS, AFFECTIONATE, KIND",
        description: "Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs.",
        overview: [{
            element: "air",
            color: "light-green, yellow",
            ruler: "mercury",
            number: "5,7,14,23",
            gem: "Tiger's Eye & Emerald"
        }]
    },
    {
        id: "3",
        name: "cancer",
        image: "assets/images/cancer.webp",
        image2: "assets/images/sign/crab.png",
        heading1: "cancer dates",
        heading2: "cancer traits",
        date: "Jun 21 - Jul 22",
        traits: "INTUITIVE, EMOTIONAL, INTELLIGENT, PASSIONATE",
        description: "Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancer signs may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life.",
        overview: [{
            element: "water",
            color: "white",
            ruler: "moon",
            number: "2,3,15,20",
            gem: "Ruby, pearl"
        }]
    },
    {
        id: "4",
        name: "leo",
        image: "assets/images/leo.webp",
        image2: "assets/images/sign/leo.webp",
        date: "Jul 23- Aug 22",
        heading1: "leo dates",
        heading2: "leo traits",
        traits: "Dramatic, outgoing, fiery and self-assured",
        description: "Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader.",
        overview: [{
            element: "fire",
            color: "gold, yellow,orange",
            ruler: "sun",
            number: "1,3,10,19",
            gem: "Carnelian"
        }]
    },
    {
        id: "5",
        name: "virgo",
        image: "assets/images/virgo.jpg",
        image2: "assets/images/sign/virgo.webp",
        heading1: "virgo dates",
        heading2: "virgo traits",
        date: "Aug 23- Sep 22",
        traits: "Practical, loyal, gentle and analytical",
        description: "Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure.",
        overview: [{
            element: "earth",
            color: "grey, beige, pale-yellow",
            ruler: "mercury",
            number: "5,14,15,23,32",
            gem: "Peridot"
        }]
    },
    {
        id: "6",
        name: "libra",
        image: "assets/images/libra.jpg",
        image2: "assets/images/sign/libra.png",
        date: "Sep 23 - Oct 22",
        heading1: "libra dates",
        heading2: "libra traits",
        traits: "Social, fair-minded, diplomatic and gracious",
        description: "Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count",
        overview: [{
            element: "air",
            color: "pink,green",
            ruler: "venus",
            number: "4,6,13,15,24",
            gem: "Sapphire"
        }]
    },
    {
        id: "7",
        name: "scorpio",
        image: "assets/images/scorpio.webp",
        image2: "assets/images/sign/scorpio.webp",
        heading1: "scorpio dates",
        heading2: "scorpio traits",
        date: "Oct 23 - Nov 21",
        traits: "Passionate, stubborn, resourceful and brave",
        description: "Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpio signs make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty.",
        overview: [{
            element: "water",
            color: "scarley, red, rust",
            ruler: "pluto, mars",
            number: "8,11,18,22",
            gem: "Topaz & opal"
        }]
    },
    {
        id: "8",
        name: "sagittarius",
        image: "assets/images/saggitaurius.webp",
        image2: "assets/images/sign/sagittarius.webp",
        heading1: "sagittarius dates",
        heading2: "sagittarius traits",
        date: "Nov 22 - Dec 21",
        traits: "Extroverted, optimistic, funny and generous",
        description: "Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie.",
        overview: [{
            element: "fire",
            color: "blue",
            ruler: "jupiter",
            number: "3,7,9,12,21",
            gem: "Topaz"
        }]
    },
    {
        id: "9",
        name: "capricorn",
        image: "assets/images/capricorn.webp",
        image2: "assets/images/sign/capricorn.webp",
        heading1: "capricorn dates",
        heading2: "capricorn traits",
        date: "Dec 22 - Jan 19",
        traits: "Serious, independent, disciplined and tenacious",
        description: "Smart, hardworking, and fully in control of their destiny, Capricorn signs will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave.",
        overview: [{
            element: "earth",
            color: "brown, black",
            ruler: "saturn",
            number: "4,8,13,22",
            gem: "Lapis lazuli"
        }]
    },
    {
        id: "10",
        name: "aquarius",
        image: "assets/images/aquarius.webp",
        image2: "assets/images/sign/aquarius.webp",
        heading1: "aquarius dates",
        heading2: "aquarius traits",
        date: "Jan 20 - Feb 18",
        traits: "Deep, imaginative, original and uncompromising",
        description: "Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born.",
        overview: [{
            element: "air",
            color: "light-blue, silver",
            ruler: "uranus, saturn",
            number: "4,7,11,22,29",
            gem: "Amethyst"
        }]
    },
    {
        id: "11",
        name: "pisces",
        image: "assets/images/pisces.webp",
        image2: "assets/images/sign/pisces.webp",
        heading1: "pisces dates",
        heading2: "pisces traits",
        date: "Feb 19 - Mar 20",
        traits: "Affectionate, empathetic, wise and artistic",
        description: "Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind.",
        overview: [{
            element: "water",
            color: "mauve, lilac, purple, violet, sea green",
            ruler: "neptune, jupiter",
            number: "3,9,12,15,18,24",
            gem: "Moonstone"
        }]
    },
]