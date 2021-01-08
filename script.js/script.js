
let date1 = new Date("Wednesday, March 10, 2021");

function countdown() {
    let date = new Date();
    let gap = date1 - date;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / hour);
    let m = Math.floor((gap % (hour)) / minute);
    let s = Math.floor((gap % (minute)) / second);
    if (s < 10) {
        s = `0${s}`;
    }

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('seconds').innerHTML = s;


}

function displayQuote() {
    let quote_display = document.getElementById('quote_value');
    let quote = ["“Just another Magic Monday“",
        "“One day or day one. You decide.“",
        "“It’s Monday… time to motivate and make dreams and goals happen. Let’s go!”",
        "“It was a Monday and they walked on a tightrope to the sun.“",
        "“Goodbye blue Monday.”",
        "“So.Monday.We meet again.We will never be friends—but maybe we can move past our mutual enmity toward a more - positive partnership.”",
        "“When life gives you Monday, dip it in glitter and sparkle all day.”",
        "Monday c’est Mon Day",
        "All Motivation Mondays need are a little more coffee and a lot more mascara",
        "I’m alive, motivated and ready to slay the day",
        "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” ",
        "“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.”",
        "“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.”",
        "“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.”",
        "“How wonderful it is that nobody need wait a single moment before starting to improve the world.”",
        "“Some people want it to happen, some wish it would happen, others make it happen.”",
        "“Great things are done by a series of small things brought together”",
        "“If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.”",
        "“Very often, a change of self is needed more than a change of scene.’ ",
        "“Leaders can let you fail and yet not let you be a failure.”",
        "“It’s not the load that breaks you down, it’s the way you carry it.”"];
    let number = Math.floor(Math.random() * quote.length);
    console.log(quote_display);
    console.log(number);
    quote_display.textContent = quote[number];
}

setInterval(() => {
    countdown();
}, 1000);

setInterval(() => {
    displayQuote();
}, 10000);