let numCandidates = parseInt(prompt('Enter the number of candidates:'));
let candidates = [];
for (let i = 0; i < numCandidates; i++) {
    let candidateName = prompt(`Enter the name of candidate #${i+1}`);
    candidates[i] = {
        name: candidateName,
        votes: 0
    }
}

let numVoters = parseInt(prompt('Enter the number of voters:'));
for (let i = 0; i < numVoters; i++) {
    let vote = prompt(`Which candidate will voter #${i+1} vote for? Enter a name:`);
    for (let candidate of candidates) {
        if (vote === candidate.name) {
            candidate.votes++;
        }
    }
}

candidates.sort((a,b) => b.votes - a.votes);

console.log('Results:');
for (let i = 0; i < candidates.length; i++) {
    console.log(`${i+1}. ${candidates[i].name}: ${candidates[i].votes} votes`);
}