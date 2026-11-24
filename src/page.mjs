// Client-facing proposal page for ThirdRockMD. All editable terms come from proposal.config.mjs.
// Copy rules: no em or en dashes; no personnel history, client names, or transaction details (see README).

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Renders a config value. Placeholders are always visibly marked so they cannot read as final terms.
const v = (x) => {
  if (x === null || x === undefined) return '<mark class="tbd"><span class="tbd-k">To be confirmed</span></mark>';
  if (typeof x === 'object' && x.tbd) return `<mark class="tbd"><span class="tbd-k">To be confirmed</span> ${esc(x.label)}</mark>`;
  return esc(x);
};

const FACILITATORS = {
  greg: { name: 'Greg Snyder', role: 'Co-founder and CEO, No Alumni. Certified Working Genius Facilitator.', img: 'greg.webp' },
  matt: { name: 'Matt LaFleur', role: 'Co-founder, No Alumni. CPA, fractional CFO, and Working Genius facilitator.', img: 'matt.webp' },
  josh: { name: 'Josh Muller', role: 'Chief Visionary, No Alumni. Business coach who built and sold a company of his own.', img: 'josh.webp' },
};

// Decorative network motif: points of contact across a dispersed team.
const network = () => {
  const n = [[60, 70], [170, 40], [270, 95], [120, 160], [230, 190], [330, 170], [60, 250], [180, 280], [300, 270], [380, 60]];
  const e = [[0, 1], [1, 2], [0, 3], [1, 3], [2, 4], [3, 4], [2, 5], [4, 5], [3, 6], [4, 7], [6, 7], [7, 8], [5, 8], [2, 9], [5, 9], [4, 8]];
  return `<svg class="net" viewBox="0 0 420 320" aria-hidden="true" focusable="false">
    ${e.map(([a, b]) => `<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}"/>`).join('')}
    ${n.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 3 === 0 ? 9 : 6}"/>`).join('')}
  </svg>`;
};

export function renderPage(cfg) {
  const d = cfg.december;
  const p = cfg.inPerson;
  const t = cfg.terms;
  const mail = `mailto:${cfg.contact.email}?subject=${encodeURIComponent(cfg.contact.emailSubject)}`;
  const people = cfg.facilitators.map((id) => FACILITATORS[id]).filter(Boolean);

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>A proposal for ${esc(cfg.client)} | ${esc(cfg.preparedBy)}</title>
<meta name="description" content="A proposal prepared for ${esc(cfg.client)} by ${esc(cfg.preparedBy)}.">
<link rel="icon" type="image/png" href="assets/img/favicon-32.png">
<link rel="stylesheet" href="assets/styles.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${cfg.draft ? '<div class="draft-banner" role="note"><strong>Draft for review.</strong> Highlighted items are placeholders and are not final terms.</div>' : ''}
<header class="top">
  <div class="wrap top-row">
    <span class="brand"><img src="assets/img/no-alumni-badge.webp" alt="" width="44" height="44"><span>No Alumni</span></span>
    <nav aria-label="Proposal sections">
      <ul>
        <li><a href="#start">Start here</a></li>
        <li><a href="#investment">Investment</a></li>
        <li><a href="#build">Build on it</a></li>
        <li><a href="#next">What comes next</a></li>
      </ul>
    </nav>
  </div>
</header>

<main id="main">
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <p class="kicker">A proposal prepared for ${esc(cfg.client)} by ${esc(cfg.preparedBy)}</p>
      <h1>Building a more connected ${esc(cfg.client)}</h1>
      <p class="lead">A practical path to understanding how your team works best, strengthening collaboration, and building on the momentum already underway.</p>
      <p>Thank you for the conversation, Scott and Catherine. You described a team that is already leaning toward each other: more conversation across the organization, more shared problem solving, and real energy for doing it well. This proposal is a simple way to start in December, keep that momentum through the new year, and make the gains part of how the team works every day.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#start">See the proposed engagement</a>
        <a class="btn btn-ghost" href="${mail}">Discuss the proposal</a>
      </div>
      <p class="meta">Prepared ${esc(cfg.preparedDate)}. Valid through ${v(cfg.validThrough)}.</p>
    </div>
    <div class="hero-art">${network()}</div>
  </div>
</section>

<section class="s1" id="start" aria-labelledby="start-h">
  <div class="wrap">
    <p class="kicker">Section 1 &middot; The initial engagement</p>
    <h2 id="start-h">Start here: Working Genius for your team</h2>
    <p class="lead">Two stages. A focused virtual foundation in December, then an optional in-person working session in early 2027 if it is the right next step.</p>

    <div class="why">
      <div>
        <h3>Why begin with Working Genius</h3>
        <p>The 6 Types of Working Genius, a model by Patrick Lencioni and The Table Group, gives every person a simple way to name the kinds of work that energize them and the kinds that drain them. For a team spread across many states, that shared language does a lot of quiet work: it makes it easier to ask for help, hand work off cleanly, and see how each person's strengths fit with everyone else's.</p>
      </div>
      <ul class="six" aria-label="The six types of working genius">
        <li><b>Wonder</b> Asking whether there is a better way</li>
        <li><b>Invention</b> Creating new ideas and solutions</li>
        <li><b>Discernment</b> Judging what will work</li>
        <li><b>Galvanizing</b> Rallying people to act</li>
        <li><b>Enablement</b> Providing the help others need</li>
        <li><b>Tenacity</b> Carrying the work to completion</li>
      </ul>
    </div>

    <div class="stage stage-a">
      <div class="stage-head">
        <span class="stage-tag">Stage A &middot; Included in this proposal</span>
        <h3>December 2026: begin virtually</h3>
        <p>Target window: ${v(d.sessionWindow)}</p>
      </div>
      <ol class="steps">
        <li><span class="n">1</span><div><h4>Planning conversation</h4><p>A working call with Scott and Catherine to confirm participants, goals, timing, and how the session should be facilitated for this team.</p></div></li>
        <li><span class="n">2</span><div><h4>Working Genius assessments</h4><p>Assessments for ${v(d.participants)} participants. Each person receives an individual link and simple instructions. Sent by ${v(d.assessmentsOutBy)}.</p></div></li>
        <li><span class="n">3</span><div><h4>Results in hand before the session</h4><p>Every participant receives their own results ahead of time, so they can read them, reflect, and arrive with questions instead of meeting their results for the first time in front of the group.</p></div></li>
        <li><span class="n">4</span><div><h4>Your Working Genius Team Map</h4><p>A customized map of the group's results showing where the team's energy is concentrated, where it is thin, and how individual strengths connect. It is built from completed assessments and the information participants agree to share.</p></div></li>
        <li><span class="n">5</span><div><h4>One facilitated virtual team session</h4><p>Length: ${v(d.sessionLength)}. Interactive, practical, and built around the team's real work. In the session we will:</p>
          <ul class="ticks">
            <li>Introduce the Working Genius model and its six types.</li>
            <li>Help each person understand what energizes them and what drains them.</li>
            <li>Walk through the Team Map and discuss how the team's strengths fit together.</li>
            <li>Apply the insights to real examples of collaboration, handoffs, support, and communication at ${esc(cfg.client)}.</li>
            <li>Agree on a short list of practical actions the team can use in its everyday work.</li>
          </ul></div></li>
        <li><span class="n">6</span><div><h4>Leadership follow-up and written recap</h4><p>A ${v(d.leadershipFollowUp)} follow-up conversation with Scott and Catherine, plus a concise written recap of what the team learned and the next steps agreed in the session.</p></div></li>
        <li><span class="n">7</span><div><h4>Office hours, clearly bounded</h4><p>For anyone who wants to talk through their results: ${v(d.officeHours)}. Status: ${v(d.officeHoursIncluded)}.</p></div></li>
      </ol>
      <p class="note"><b>About sharing results.</b> Individual results belong to the person who took the assessment. Before anything appears on the shared Team Map or in the group session, participants will know what will be shared and how. We will agree on that approach with you during planning.</p>
      <p class="note"><b>Team Map and Collaboration Map.</b> The Working Genius Team Map is included in this stage. It shows how people are wired. The broader Collaboration Map that Catherine has begun, which shows how recurring work actually flows between people, is a separate piece of work described in Stage B and Section 2.</p>
    </div>

    <div class="stage stage-b">
      <div class="stage-head">
        <span class="stage-tag tag-optional">Stage B &middot; Optional next step, not included in the December fee</span>
        <h3>January or February 2027: an in-person working session</h3>
        <p>If December goes well, bring the team together to put what they learned to work on how the team actually collaborates, building on the December results and on the Collaboration Map concept.</p>
      </div>
      <div class="cols">
        <div>
          <h4>What the session could cover</h4>
          <ul class="ticks">
            <li>Revisit what the team learned from its Working Genius results.</li>
            <li>Look at how recurring work flows between people.</li>
            <li>Make important dependencies, handoffs, decisions, and areas for collaboration visible.</li>
            <li>Explore where work could align better with people's strengths and energy, without assuming any roles need to change.</li>
            <li>Agree on a small number of practical team commitments and follow-up actions.</li>
          </ul>
        </div>
        <dl class="facts">
          <div><dt>When</dt><dd>${v(p.when)}</dd></div>
          <div><dt>Where</dt><dd>${v(p.location)}</dd></div>
          <div><dt>Format</dt><dd>${v(p.format)}</dd></div>
          <div><dt>Facilitators</dt><dd>${v(p.facilitators)}</dd></div>
          <div><dt>Participants</dt><dd>${v(p.participantLimit)}</dd></div>
          <div><dt>Preparation</dt><dd>${v(p.preparation)}</dd></div>
          <div><dt>Deliverables</dt><dd>${v(p.deliverables)}</dd></div>
          <div><dt>Decide by</dt><dd>${v(p.decisionBy)}</dd></div>
        </dl>
      </div>
    </div>

    <div class="invest" id="investment" aria-labelledby="invest-h">
      <h3 id="invest-h">Investment and terms</h3>
      <p>Each item is priced on its own. Nothing optional is bundled into the December fee.</p>
      <table>
        <thead><tr><th scope="col">Item</th><th scope="col">Investment</th></tr></thead>
        <tbody>
          <tr><th scope="row">December virtual foundation <span class="sub">Stage A: planning, assessments, Team Map, virtual session, leadership follow-up, recap</span></th><td>${v(d.fee)}</td></tr>
          <tr><th scope="row">Optional in-person working session <span class="sub">Stage B, only if you choose to proceed</span></th><td>${v(p.fee)}<span class="sub">Travel and lodging: ${v(p.travel)}</span><span class="sub">Venue and meals: ${v(p.venueMeals)}</span></td></tr>
          <tr><th scope="row">Optional individual or small-group follow-up</th><td>${v(t.followUpPricing)}</td></tr>
          <tr><th scope="row">Assessment and participant fees</th><td>${v(t.assessmentFees)}</td></tr>
          <tr><th scope="row">Payment schedule</th><td>${v(t.paymentSchedule)}</td></tr>
          <tr><th scope="row">Cancellation and rescheduling</th><td>${v(t.cancellation)}</td></tr>
          <tr><th scope="row">Scope changes and additional work</th><td>Approved separately, in writing, before any work begins.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="sequence">
      <h3>How we would begin</h3>
      <ol>
        <li>Confirm scope and dates.</li>
        <li>Finalize the agreement and investment.</li>
        <li>Receive the participant list and any existing materials you would like to share.</li>
        <li>Send assessments.</li>
        <li>Hold the December virtual session.</li>
        <li>Decide together whether and how to proceed with an in-person gathering.</li>
      </ol>
      <div class="actions">
        <a class="btn btn-primary" href="${mail}">Discuss the proposed engagement</a>
        ${cfg.contact.bookingUrl ? `<a class="btn btn-ghost" href="${esc(cfg.contact.bookingUrl)}" rel="noopener">${esc(cfg.contact.bookingLabel)}</a>` : ''}
      </div>
    </div>

    <div class="team">
      <h3>Who you would work with</h3>
      <ul>
        ${people.map((f) => `<li><img src="assets/img/${f.img}" alt="" width="88" height="88" loading="lazy"><div><b>${esc(f.name)}</b><span>${esc(f.role)}</span></div></li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>

<section class="s2" id="build" aria-labelledby="build-h">
  <div class="wrap">
    <p class="kicker">Section 2 &middot; Possible later</p>
    <h2 id="build-h">Build on the foundation</h2>
    <p class="lead">You told us you do not want a workshop that is remembered fondly and then forgotten. These are ways we could help the work become part of daily practice. Each one would be its own conversation, scope, and agreement. None is part of the December proposal.</p>
    <div class="later-grid">
      <article class="later">
        <h3>Collaboration Map development</h3>
        <p>Build on Catherine's concept: capture recurring work, what each person delivers, the inputs they need, who they work with, and who depends on the result. Where useful, combine it with the Working Genius Team Map to produce a usable visual and a working document the team keeps current. Format, scope, and level of detail to be decided together.</p>
      </article>
      <article class="later">
        <h3>Culture by design</h3>
        <p>Turn the culture you want into things people can actually see and practice: shared expectations, meeting habits, decision principles, onboarding, and simple ways to check progress. Facilitation and accountability support available as separately scoped services.</p>
      </article>
      <article class="later">
        <h3>Leadership and operating practices</h3>
        <p>Practical help with priorities, ownership, delegation, handoffs, meeting rhythm, and the balance between vision and execution. We draw where helpful on ideas from Rocket Fuel and the Visionary and Integrator roles (Gino Wickman and Mark C. Winters), the Entrepreneurial Operating System, The Time-Rich Company, and Science of People, explained in plain English and applied to your team. These names belong to their authors and owners; we reference their ideas and do not reproduce their proprietary programs.</p>
      </article>
      <article class="later">
        <h3>An internal Collaboration Hub</h3>
        <p>A concept to explore, not an existing product: one inward-facing place for the team directory, responsibilities, the Collaboration Map, resources, team norms, and action tracking. It would start with a short discovery and prototype phase before any commitment to custom software. It would not hold patient information, and any security or compliance requirements would be defined and verified as part of that work.</p>
      </article>
      <article class="later">
        <h3>Continued team development</h3>
        <p>Facilitation, coaching, focused small-group conversations, and periodic check-ins. If the leadership experience is valuable, we would be glad to explore a separate Working Genius experience for your wider medic team, with its own scope, participant count, and pricing.</p>
      </article>
    </div>
  </div>
</section>

<section class="s3" id="next" aria-labelledby="next-h">
  <div class="wrap narrow">
    <p class="kicker">Section 3 &middot; Longer term</p>
    <h2 id="next-h">Ready for what comes next</h2>
    <p>Strong teams are ready for change, whatever form it takes: growth, new leadership responsibilities, or other future transitions. Over the longer term, we could help ${esc(cfg.client)} build that readiness. The value holds regardless of what the future brings.</p>
    <ul class="ticks">
      <li>Strengthen a leadership team that can carry the work forward.</li>
      <li>Document important processes and reduce dependence on any one person.</li>
      <li>Make responsibilities, relationships, and decision making clearer.</li>
      <li>Preserve client experience, continuity, culture, and institutional knowledge through change.</li>
      <li>Help leaders communicate well and keep the team aligned during any transition.</li>
      <li>Support integration planning, if and when it becomes relevant.</li>
    </ul>
    <p class="note">We would work alongside your existing legal, financial, and other advisors and complement their work. No Alumni does not act as a broker, investment banker, legal counsel, or valuation advisor, and we make no promises about the outcome or value of any future transaction.</p>
  </div>
</section>

<section class="close">
  <div class="wrap narrow center">
    <h2>Let's talk it through</h2>
    <p>We would be glad to walk through this proposal, adjust anything that does not fit, and settle the details together.</p>
    <div class="actions center-actions">
      <a class="btn btn-primary" href="${mail}">Discuss the proposed engagement</a>
      ${cfg.contact.bookingUrl ? `<a class="btn btn-ghost" href="${esc(cfg.contact.bookingUrl)}" rel="noopener">${esc(cfg.contact.bookingLabel)}</a>` : ''}
    </div>
    <p class="meta">${esc(cfg.contact.name)} &middot; <a href="${mail}">${esc(cfg.contact.email)}</a></p>
  </div>
</section>
</main>

<footer class="foot">
  <div class="wrap">
    <p>Prepared for ${esc(cfg.client)} by ${esc(cfg.preparedBy)}, ${esc(cfg.preparedDate)}. This proposal is not an agreement; terms become binding only in a signed agreement.</p>
    <p>The 6 Types of Working Genius is a model by Patrick Lencioni and The Table Group.</p>
  </div>
</footer>
</body>
</html>
`;
}

// Collects every open placeholder for the checklist and the build guard.
export function openPlaceholders(cfg, path = '') {
  const out = [];
  for (const [k, val] of Object.entries(cfg)) {
    const here = path ? `${path}.${k}` : k;
    if (val && typeof val === 'object' && val.tbd) out.push(`${here}: ${val.label}`);
    else if (val === null) out.push(`${here}: (empty)`);
    else if (val && typeof val === 'object' && !Array.isArray(val)) out.push(...openPlaceholders(val, here));
  }
  return out;
}
