import { message, danger } from 'danger'

const modifiedMD = danger.git.modified_files.join('- ')
message(`Change Files in this PR: \n - ${modifiedMD}`)


// 90996e85478c2f560bf4b8a1a444cb83500910d2
