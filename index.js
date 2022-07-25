

let countries = ['England', 'Denmark', 'Norway', 'Finland', 'Sweden', 'Italy', 'Netherlands', 'Poland', 'Croatia', 'Malta', 'Ireland', 'Romania', 'Belgium', 'Germany', 'Greece', 'Switzerland'];

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

// Sets the group of each team and orders the list
function setGroups(countries)
{
    let i = 0;
    for (y=0; y<4;y++)
    {
        for (x=0;x<4;x++)
        {
            //console.log(x);
            countries[i].group = x+1;
            i++;
        }
    }

    countries.sort((a, b) => (a.group > b.group) ? 1 : -1);
}

fillUp(countries);
shuffle(countries);
setGroups(countries);
console.table(countries);