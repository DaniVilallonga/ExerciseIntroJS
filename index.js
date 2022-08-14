
// We set the countries taht will participate
let countries = ['England', 'Denmark', 'Norway', 'Finland', 'Sweden', 'Italy', 'Netherlands', 'Poland', 'Croatia', 'Malta', 'Ireland', 'Romania', 'Belgium', 'Germany', 'Greece', 'Switzerland'];

// Parameter to control the day in the tournament
let matchDay = 1;

// Parameters to control the score and the winner in the final stages of the competition
let a = 0;
let b = 0;
let winner;
let loser;

// We create arrays to control the groups in the final stages of the competition
let semiFinalTeams = [];
let finalTeams = [];
let losers = [];

// We create the four arrays of the four groups
let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];

// Arrays to control and print the results of the matches
let resultsA = [];
let resultsB = [];
let resultsC = [];
let resultsD = [];

// Gets a random number of goals
function getGoals()
{
    min = Math.ceil(0);
    max = Math.floor(7);
    return Math.floor(Math.random() * (7 - 0) + 0);
}

// Fills Up the array of countries with the variables needed to control the Cup
function fillUpCountries ()
{
    for (let i=0; i<countries.length;i++)
    {
        let name = countries[i];
        countries[i] = ({country: name,
                        group: 0});
    }
}

// Creates the array to control the results in the first phase of a given group
function fillUpResults (group, results)
{
    for (i=0; i<4; i++)
    {
        results[i]  = ({
            team: group[i].country,
            score: 0,
            myGoals: 0,
            theirGoals: 0,
            difference: 0

        })
    }
}

// Shuffles the array of teams
function shuffle(array)
{
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

// Sets the group of each team and orders the list in one array
function setGroups(countries)
{
    let i = 0;
    for (y=0; y<4;y++)
    {
        for (x=0;x<4;x++)
        {
            switch (x)
            {
                case x=0:
                    countries[i].group = "A";
                    break;
                case x=1:
                    countries[i].group = "B";
                    break;
                case x=2:
                    countries[i].group = "C";
                    break;
                case x=3:
                    countries[i].group = "D";
                    break;
            }
            
            i++;
        }
    }

    countries.sort((a, b) => (a.group > b.group) ? 1 : -1);
}

// Divide the teams in the four arrays
function divideGroups(x)
{
    for(i=0;i<4;i++)
    {
        switch (x)
        {
            case x=1:
                groupA[i] = countries[i];
                break;
            case x=2:
                groupB[i] = countries[i+4];
                break;
            case x=3:
                groupC[i] = countries[i+8];
                break;
            case x=4:
                groupD[i] = countries[i+12];
                break;
        }
    }
}

// Display group and team matches of every day for the group phase
function displayGroupPhase (group)
{
    console.log("");
    console.log("== Group " + group[0].group + " ==");


    console.log(group[0].country);
    console.log(group[1].country);
    console.log(group[2].country);
    console.log(group[3].country);
    console.log("");

    console.log("Day 1");
    console.log(group[0].country + " vs " + group[3].country);
    console.log(group[1].country + " vs " + group[2].country);
    console.log("");

    console.log("Day 2");
    console.log(group[3].country + " vs " + group[2].country);
    console.log(group[0].country + " vs " + group[1].country);
    console.log("");

    console.log("Day 3");
    console.log(group[1].country + " vs " + group[3].country);
    console.log(group[2].country + " vs " + group[0].country);

    console.log("");
    console.log("");
}

// Play the playoff phase matches of a day for a given group, distribute the points and orders the array
function playMatchesDay (group, results)
{

    x = getGoals();
    y = getGoals();
    z = getGoals();
    w = getGoals();

    results[0].myGoals = x;
    results[1].myGoals = z;
    results[2].myGoals = w;
    results[3].myGoals = y;

    results[0].theirGoals = y;
    results[1].theirGoals = w;
    results[2].theirGoals = z;
    results[3].theirGoals = x;

    results[0].difference = x-y;
    results[1].difference = z-w;
    results[2].difference = w-z;
    results[3].difference = y-x;

    for (i=0; i<4; i++)
    {
        if (results[i].difference>0)
        {
            results[i].score = results[i].score + 3;
        }else if (results[i].difference===0)
        {
            results[i].score = results[i].score + 1;
        }
    }

    results.sort((a, b) => {return b.score - a.score;});

    console.log("Group " + group[0].group + " - Day " + matchDay + ":");
    console.log("---------------------");

    switch (matchDay)
    {
        case 1:
            console.log(group[0].country + " " + x + " - " + y + " " + group[3].country);
            console.log(group[1].country + " " + z + " - " + w + " " + group[2].country);
        break;

        case 2:
            console.log(group[3].country + " " + y + " - " + w + " " + group[2].country);
            console.log(group[0].country + " " + x + " - " + z + " " + group[1].country);
        break;

        case 3:
            console.log(group[1].country + " " + z + " - " + y + " " + group[3].country);
            console.log(group[2].country + " " + w + " - " + x + " " + group[0].country);
        break;
    }

    console.table(results);
    console.log(" ");
}

// Play a match in the quarters of finals
function quartersMatches(teamA, teamB, i)
{
    a = getGoals();
    b = getGoals();

    while (a===b)
    {
        a = getGoals();
        b = getGoals();
    }

    if (a>b)
    {
        winner = teamA;
        semiFinalTeams[i] = teamA;
    }else
    {
        winner = teamB;
        semiFinalTeams[i] = teamB;
    }
}

// Play a game in the semi finals
function semiFinalMatches(teamA, teamB, i)
{
    a = getGoals();
    b = getGoals();

    while (a===b)
    {
        a = getGoals();
        b = getGoals();
    }

    if (a>b)
    {
        winner = teamA;
        loser = teamB;
    }else
    {
        winner = teamB;
        loser = teamA;
    }

    finalTeams[i] = winner;
    losers[i] = loser;
}

// Play the match for the 3d and 4th positions
function losersMatch (teamA, teamB)
{
    a = getGoals();
    b = getGoals();

    while (a===b)
    {
        a = getGoals();
        b = getGoals();
    }

    if (a>b)
    {
        winner = teamA;
    }else
    {
        winner = teamB;
    }
}


// =======================
// Start of the Execution
// =======================

console.log("Groups and teams");
console.log("==============================")
fillUpCountries(countries);
shuffle(countries);
setGroups(countries);
divideGroups(1);
divideGroups(2);
divideGroups(3);
divideGroups(4);
fillUpResults(groupA, resultsA);
fillUpResults(groupB, resultsB);
fillUpResults(groupC, resultsC);
fillUpResults(groupD, resultsD);

displayGroupPhase(groupA);
displayGroupPhase(groupB);
displayGroupPhase(groupC);
displayGroupPhase(groupD);

console.log("===================================");
console.log("===== START OF THE WOMEN'S CUP ====");
console.log("===================================");
console.log(" ");

playMatchesDay(groupA, resultsA);
playMatchesDay(groupB, resultsB);
playMatchesDay(groupC, resultsC);
playMatchesDay(groupD, resultsD);
matchDay++;

playMatchesDay(groupA, resultsA);
playMatchesDay(groupB, resultsB);
playMatchesDay(groupC, resultsC);
playMatchesDay(groupD, resultsD);
matchDay++;

playMatchesDay(groupA, resultsA);
playMatchesDay(groupB, resultsB);
playMatchesDay(groupC, resultsC);
playMatchesDay(groupD, resultsD);


console.log("=========================================");
console.log("===== START OF THE ELIMINATION PHASE ====");
console.log("=========================================");
console.log(" ");

console.log("Participating teams:");
console.log("GROUP A: " + resultsA[0].team + ", " + resultsA[1].team);
console.log("GROUP B: " + resultsB[0].team + ", " + resultsB[1].team);
console.log("GROUP C: " + resultsC[0].team + ", " + resultsC[1].team);
console.log("GROUP D: " + resultsD[0].team + ", " + resultsD[1].team);

console.log(" ");

console.log("=== QUARTERS OF FINALS ===");

quartersMatches(resultsA[0].team, resultsB[1].team, 0)
console.log(resultsA[0].team + " " + a + " - " + b + " " + resultsB[1].team + " => " + winner);

quartersMatches(resultsB[0].team, resultsA[1].team, 1)
console.log(resultsB[0].team + " " + a + " - " + b + " " + resultsA[1].team + " => " + winner);

quartersMatches(resultsC[0].team, resultsD[1].team, 2)
console.log(resultsC[0].team + " " + a + " - " + b + " " + resultsD[1].team + " => " + winner);

quartersMatches(resultsD[0].team, resultsC[1].team, 3)
console.log(resultsD[0].team + " " + a + " - " + b + " " + resultsC[1].team + " => " + winner);

console.log("");

console.log("=== SEMI FINALS ===");
semiFinalMatches(semiFinalTeams[0], semiFinalTeams[2], 0)
console.log(semiFinalTeams[0] + " " + a + " - " + b + " " + semiFinalTeams[2] + " => " + winner);

semiFinalMatches(semiFinalTeams[1], semiFinalTeams[3], 1)
console.log(semiFinalTeams[1] + " " + a + " - " + b + " " + semiFinalTeams[3] + " => " + winner);
console.log("");

console.log("=== 3d AND 4th ===");
losersMatch(losers[0], losers[1])
console.log(losers[0] + " " + a + " - " + b + " " + losers[1] + " => " + winner);
console.log("");

console.log("=== FINAL ===");
quartersMatches(finalTeams[0], finalTeams[1], 0)
console.log(finalTeams[0] + " " + a + " - " + b + " " + finalTeams[1] + " => " + winner);

console.log("");
console.log("================================================");
console.log(winner + " is the champion of the EURO WOMEN'S CUP!");
console.log("================================================");