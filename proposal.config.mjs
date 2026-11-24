// ThirdRockMD proposal: every editable commercial term, date, count, and link lives in this file.
//
// How placeholders work
// - A value of `null` (or any value wrapped in tbd('...')) renders on the page as a highlighted
//   "To be confirmed" marker, so a draft price can never be mistaken for a final one.
// - Replace a placeholder by typing the real value as a plain string, for example:
//     december: { fee: '$X,XXX' }  becomes  december: { fee: '$4,500' }
// - `npm run check` lists every placeholder still open. With `draft: false`, the build refuses to
//   finish while any placeholder remains, so an unfinished proposal cannot be shipped by accident.

export const tbd = (label) => ({ tbd: true, label });

export default {
  // Shows the "Draft for review" banner. Set to false only after every item in REVIEW_CHECKLIST.md is approved.
  draft: true,

  client: 'ThirdRockMD',
  preparedBy: 'No Alumni',
  preparedDate: 'November 2026',
  validThrough: tbd('Proposal valid through (date)'),

  // Primary contact for the call to action. Verified No Alumni addresses (noalumni.com, November 2026).
  contact: {
    name: 'Matt LaFleur',
    email: 'matt@noalumni.com',
    emailSubject: 'ThirdRockMD proposal: next steps',
    // Optional scheduling link. This is No Alumni's existing booking page; replace or set to null.
    bookingUrl: 'https://fantastical.app/mattlafleur/new-game-readiness-assessment',
    bookingLabel: 'Schedule a call',
  },

  facilitators: ['greg', 'matt', 'josh'], // ids from FACILITATORS in src/page.mjs

  december: {
    participants: tbd('Number of participants, e.g. up to 10'),
    sessionLength: tbd('Session length, e.g. up to 2 hours'),
    sessionWindow: tbd('Target date window, e.g. week of December 14'),
    assessmentsOutBy: tbd('Assessments sent by (date)'),
    leadershipFollowUp: tbd('Leadership follow-up length, e.g. 45 minutes'),
    officeHours: tbd('Office hours: number and length, e.g. up to four 30-minute conversations'),
    officeHoursIncluded: tbd('Office hours included in the December fee, or priced separately'),
    fee: tbd('December virtual foundation fee'),
  },

  inPerson: {
    when: tbd('Target month and date, January or February 2027'),
    location: tbd('Location'),
    format: tbd('Session length and number of sessions, e.g. one full day'),
    facilitators: tbd('Facilitators attending'),
    participantLimit: tbd('Participant limit'),
    preparation: tbd('Planning and preparation included'),
    deliverables: tbd('Tangible deliverables'),
    fee: tbd('In-person facilitation fee'),
    travel: tbd('Travel and lodging: included or billed at cost'),
    venueMeals: tbd('Venue and meals: client provided or billed separately'),
    decisionBy: tbd('Decision date or planning lead time'),
  },

  terms: {
    followUpPricing: tbd('Additional individual or small-group follow-up: rate or package'),
    assessmentFees: tbd('Assessment fees: included for up to N participants, or per-person price'),
    paymentSchedule: tbd('Payment schedule, e.g. 50% at signing, 50% after the session'),
    cancellation: tbd('Cancellation and rescheduling terms'),
  },
};
