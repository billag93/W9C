var tweets = ['Not sure which is harder on a relationship: sharing a dresser for three years or sharing an iPhone charger for one day.', 'You can fail at what you don’t want—so you might as well take a chance at doing what you love.', 'Whoever established the high road and how high it should be should be fired', 'Instant gratification takes too long', 'I admit that I live in the past, but only because housing is so much cheaper.', 'One of my biggest fears is that I’ll marry into a family that runs 5Ks on holidays.', 'Mapquest really needs to start its directions on number five. Pretty sure I know how to get out of my neighborhood.', 'My parents said marrying was an optimistic thing to do in pessimistic times', 'If you are not yelling at your kids, you are not spending enough time with them.', 'It is better to live one day as a lion than 100 years as a sheep.'];
arraylength = tweets.length;
for (index = 0; index < arraylength; index++) {
    console.log(tweets[index])
}
var users = [
    {
        tweet: 'Not sure which is harder on a relationship: sharing a dresser for three years or sharing an iPhone charger for one day.',
        username: 'Johnathon',
        createdAt: 05 - 26 - 2017,
        age: 23,
    },
    
{
        tweet: 'You can fail at what you don’t want—so you might as well take a chance at doing what you love.',
        username: 'BillyBob',
        createdAt: 04 - 13 - 2018,
        age: 28,
    },
{
        tweet: 'Whoever established the high road and how high it should be should be fired',
        username: 'Michael',
        createdAt: 11 - 08 - 2016,
        age: 17,
    },
{
        tweet: 'Instant gratification takes too long',
        username: 'Steven',
        createdAt: 07 - 22 - 2013,
        age: 18,
    },
{
        tweet: 'I admit that I live in the past, but only because housing is so much cheaper.',
        username: 'George',
        createdAt: 03 - 11 - 2017,
        age: 54,
    },
{
        tweet: 'One of my biggest fears is that I’ll marry into a family that runs 5Ks on holidays.',
        username: 'Kade',
        createdAt: 09 - 04 - 2018,
        age: 42,
    },
{
        tweet: 'Mapquest really needs to start its directions on number five. Pretty sure I know how to get out of my neighborhood.',
        username: 'Cassandra',
        createdAt: 08 - 22 - 2019,
        age: 38,
    },
{
        tweet: 'My parents said marrying was an optimistic thing to do in pessimistic times',
        username: 'Nick',
        createdAt: 01 - 09 - 2016,
        age: 46,
    },
{
        tweet: 'If you are not yelling at your kids, you are not spending enough time with them.',
        username: 'Mary',
        createdAt: 02 - 26 - 2015,
        age: 31,
    },
{
        tweet: 'It is better to live one day as a lion than 100 years as a sheep.',
        username: 'Stephanie',
        createdAt: 07 - 11 - 2018,
        age: 22,
    }
]

function filterage(user) {
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    }
}

var tweetage = users.filter(filterage);
console.log(tweetage);
