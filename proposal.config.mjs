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
  draft: false,

  client: 'ThirdRockMD',
  preparedBy: 'No Alumni',
  preparedDate: 'November 2026',
  validThrough: 'December 5, 2026',

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
    participants: 'up to 10',
    sessionLength: 'up to 2 hours',
    sessionWindow: 'December 2026',
    assessmentsOutBy: 'December 7, 2026',
    leadershipFollowUp: '90-minute',
    officeHours: 'three one-hour sessions during December 2026',
    officeHoursIncluded: 'included in the December per-participant fee',
    fee: '$525 per participant ($5,250 for 10 participants)',
  },

  inPerson: {
    when: 'January or February 2027',
    location: 'To be determined together',
    format: 'One full day (proposed)',
    facilitators: 'Greg Snyder, Matt LaFleur, and Josh Muller',
    participantLimit: 'Up to 10',
    preparation: 'Planning and preparation included',
    deliverables: 'To be agreed together during planning',
    fee: '$7,500',
    travel: 'billed at cost, once the location is set',
    venueMeals: 'venue billed at cost; meals included in the fee',
    decisionBy: 'To be determined together',
  },

  terms: {
    followUpPricing: 'To be determined together, based on need',
    assessmentFees: 'Included in the per-participant rate for up to 10 participants',
    paymentSchedule: 'For each component: 50% due when the agreement is signed, and 50% due five days before the session.',
    cancellation: 'Each session may be rescheduled once at no charge with at least 10 business days of notice. Cancellations made 10 or more business days before a session are refunded, less the cost of any assessments already issued. Within 10 business days, the deposit is non-refundable, and for the in-person session any non-refundable travel or venue costs already committed are not refunded.',
  },
};
