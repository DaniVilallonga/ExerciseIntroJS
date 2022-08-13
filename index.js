
// We set the countries taht will participate
let countries = ['England', 'Denmark', 'Norway', 'Finland', 'Sweden', 'Italy', 'Netherlands', 'Poland', 'Croatia', 'Malta', 'Ireland', 'Romania', 'Belgium', 'Germany', 'Greece', 'Switzerland'];

// We create the four arrays of the four groups
let groupA = [];
let groupB = [];
let groupC = [];
let groupD = [];
let matchResultsA = [];
let matchResultsB = [];
let matchResultsC = [];
let matchResultsD = [];

// Array to control and print the results of the matches
//let matchResults = {team, score, myGoals, theirGoals, difference};

// Fills Up the array of countries with the variables needed to control the Cup
function fillUp ()
{
    for (let i=0; i<countries.length;i++)
    {
        let name = countries[i];
        countries[i] = ({country: name,
                        totalGoals: 0,
                        matchGoals: 0,
                        teamPoints: 0,
                        matchDay: 0,
                        group: 0,
                        position: 0});
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

// Sets the group of each team and orders the list in one array (Working Version)
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

// Play matches of a day for a given group and distribute the points
function playMatchesDay (group, results)
{
    
}






fillUp(countries);
shuffle(countries);
setGroups(countries);
divideGroups(1);
divideGroups(2);
divideGroups(3);
divideGroups(4);


//console.table(countries);
console.table(groupA);
console.table(groupB);
console.table(groupC);
console.table(groupD);


displayGroupPhase(groupA);
displayGroupPhase(groupB);
displayGroupPhase(groupC);
displayGroupPhase(groupD);

console.log("===================================");
console.log("===== START OF THE WOMEN'S CUP ====");
console.log("===================================");

