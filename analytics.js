/**
 * Logic for calculating the amount of participants for a given raffle.
 */

const TreasuryAccounts = [
  1262695,
  839634
]

const analytics = () => {

  const snapshot = require('./snapshots/feb-23/01-02-23.json')

  const cleaned = snapshot.data.token_balance.filter(elem => TreasuryAccounts.indexOf(elem.account_id) < 0);

  const totalVotes = cleaned.reduce((acc, elem) => acc + elem.balance ,0)
  const totalAccounts = cleaned.length

  const fullVotes = []

  cleaned.map(elem => {
    fullVotes.push(...Array(elem.balance).fill(elem.account_id))
  })

  console.log('Full Vote Data for selection')
  console.log(fullVotes)

  console.log('Total Votes for giveaway')
  console.log(totalVotes);

  console.log('Total Accounts for giveaway')
  console.log(totalAccounts);
}

analytics()
