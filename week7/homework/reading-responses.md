# Reading Responses

Six quotes from each reading. For each one: the context around the quote (what comes before and after it in the text), followed by my response.

---

## "What do Prototypes Prototype?" (Houde & Hill, 1997)

### 1. "Is a brick a prototype? The answer depends on how it is used."

**Context:** This comes right after the authors point out that everyone on a design team means something different by "prototype": industrial designers mean a foam model, interaction designers mean an on-screen simulation, programmers mean a test program. The brick question cuts through that confusion. Immediately after, they answer it: if the brick stands in for the weight and scale of a future product, it *is* a prototype, and what matters is "not what media or tools were used to create them, but how they are used."

**Response:** This is the line that reframes the whole paper for me. It says a prototype isn't defined by what it's made of or how polished it is, but by the question it's answering. It also means almost anything on my desk can be a prototype if I'm clear about what I'm trying to learn from it.

### 2. "It is important to recognize that the degree of visual and behavioral refinement of a prototype does not necessarily correspond to the solidity of the design, or to a particular stage in the process."

**Context:** This closes the section on current terminology, where the authors criticize labels like "high-fidelity" and "low-fidelity." Just before it, they give examples: a polished 3D concept model might be made early for market research, while a rough one might be made late to test structure. They also separate "resolution" (amount of detail) from "fidelity" (closeness to the final design). Right after, they introduce their own model of role, look and feel, and implementation as a better way to describe prototypes.

**Response:** This pushes back on the idea that design goes neatly from rough sketch to polished mockup. A glossy render can come early and a scrappy test can come late. I find this freeing, because it means I should choose the level of polish based on the question, not on how far along I'm "supposed" to be.

### 3. "Ironically, while the design team understood the meaning of the hand-drawn graphics, other members of the organization became enamored with the sketchy style to the extent that they considered using it in the final artifact."

**Context:** This is from Example 5, an interactive story for a new operating system. The designers hand-drew and scanned the interface on purpose, so that discussion would stay on overall features instead of visual details. The quote describes how that plan backfired with people outside the team. The authors follow it with the lesson: "the effectiveness of some kinds of prototypes may be limited to a specific kind of audience."

**Response:** This is funny, but it's also a warning. A prototype's style can become the message even when the designer meant it as a placeholder. It shows that people outside the team read prototypes literally, so the designer has to say up front what is and isn't being tested.

### 4. "One issue with prototypes like this one is that inexperienced audiences tend to believe them to be more functional than they are just by virtue of being shown on a computer screen."

**Context:** This follows Example 8, a twenty-minute animation of a workspace for fashion designers. Before the quote, the authors praise it for letting the team design a new interface "without having first to implement complex underlying technologies." The quote is the catch, and right after it they admit the designers "needed to take great care to explain that the design was not implemented."

**Response:** This feels even more true today, when tools like Figma and AI generators can make something look finished in minutes. A screen gives a prototype authority it hasn't earned yet. Being honest about what's fake (the "smoke and mirrors") is part of the designer's job, not something to hide.

### 5. "The pizza box was a very efficient prototype. Spending virtually no time building it or considering options, the students got useful feedback on a basic design question—what physical form would be best for the user."

**Context:** This is from Example 10, a portable computer for architects visiting building sites. Before the quote, the authors describe how the students weighted a pizza box to the expected weight of the computer and handed it to an architect on a site visit, then watched how he carried it alongside his other materials. They saw the boxy shape was awkward. After the quote, they explain that this pushed the team past standard notebook shapes, toward ideas like a computer that feels "more like a soft shoulder bag."

**Response:** This is my favorite example in the paper. A weighted pizza box taught the team something that a beautiful CAD model never would have: that the form was wrong for how an architect actually carries things. It's a good reminder to test the cheapest version of an idea first, before I fall in love with the details.

### 6. "Implementation prototypes can be hard to build, and since they actually work, it is common for them to find their way directly into the final system."

**Context:** This comes at the end of the implementation prototypes section, after Example 12, a C++ engine-simulation program that was built to prove a point and "eventually used to create a deployable system." After the quote, the authors name two problems: code written to prove feasibility can be hard to maintain later, and its temporary interface "may never be properly redesigned." Their conclusion is to "treat even implementation prototypes as disposable."

**Response:** This is the controversial one for me, because it's the opposite of the usual advice to "just ship it." Code written only to prove something works can end up as the foundation of a real product, along with all its shortcuts. The authors argue that even working prototypes should be treated as disposable, which takes discipline when something already runs.

---

## *Programming Design Systems*, Introduction (Rune Madsen)

### 1. "All in all, digital products all share a common trait: They are created with programming languages."

**Context:** Just before this, Madsen argues that the purpose of graphic design hasn't changed, but its medium has moved from paper to screens. Screens come in different sizes, content changes, and users interact with it and move through branching states instead of a fixed sequence of pages. This sentence sums all of that up. Right after, he says the shift has been hard for a field rooted in the fine arts, and that many schools still train designers to come up with ideas that someone else builds.

**Response:** It's a simple statement, but it carries the whole argument of the book. If the medium is code, then a designer who can't touch code is always designing at a distance from the real thing. I felt this when building my responsive aquarium page, where many design decisions only made sense once I saw them in the browser.

### 2. "...static design tools like Illustrator and Sketch fail at prototyping digital systems."

**Context:** This sits in the paragraph where Madsen calls the "ideas here, production over there" model of design education fundamentally flawed. The point about static tools is part of his evidence for that. He follows it by saying even web design is held back when it's treated as styling a page, which leads into the Google question (quote 6).

**Response:** This is a bold claim, and I think it's mostly right, but a bit too absolute. Static tools are great for quickly exploring look and feel, which Houde and Hill would call a valid prototype. Where they fail is in showing behavior, like how a layout reflows across screen sizes or how content changes over time.

### 3. "Throwing a design over the wall for production is a bad legacy of the printed page."

**Context:** This closes the paragraph where Madsen lists his reasons for teaching design through code. Just before it, he makes his third point: code lets designers build dynamic systems that change based on time, place, or use. The "over the wall" line ties that back to his critique of the handoff model. After it, he moves on to how the book is organized, pairing basic visual design topics with algorithmic thinking for designers learning to code and programmers learning design.

**Response:** I like the image of "throwing it over the wall" because it captures how designers and developers often work separately. When the designer hands off a flat file, many decisions get made by someone who wasn't part of the design conversation. Learning to code lets the designer stay involved through the decisions that actually shape the experience.

### 4. "We use grid systems to balance our layouts and color circles to pick colors with proper distance to each other."

**Context:** This is Madsen's first reason that code suits designers. It opens with the idea that designers have always worked within systems, and this sentence gives the familiar examples. After it, he says systems help designers get past the fear of a blank page, so it makes sense to write those systems as software.

**Response:** This is a smart way to make code feel less foreign to designers. We already follow rules and systems, we just apply them by hand. Writing those rules as code is a natural next step, and it lets one system produce many variations, like a layout that adapts to a phone and a desktop.

### 5. "...randomization can be used to reveal designs that the designer would never have created with a pencil."

**Context:** This is part of Madsen's second reason: code lets designers do things they couldn't do before. Just before it, he notes that code makes it much faster to try out many variations of a design. Right after, he gives his third reason, that code lets designs change based on time, place, or use.

**Response:** This one challenges the idea that the designer must control every choice. Randomness can act like a collaborator that shows options outside my habits. The designer's role shifts from making each result to designing the system and then curating what it produces, which is a different kind of authorship.

### 6. "Is google.com a good website because of the look of the search field?"

**Context:** Just before this, Madsen argues that web design still leans on the page metaphor, and that treating design as page styling is limiting. The question is his example: the answer is obviously no. After it, he softens the critique by calling the fine arts tradition a real strength that the book builds on, but warns that designers who don't learn the digital medium risk becoming irrelevant.

**Response:** This question is meant to provoke, and it works. Google's value is almost entirely in what happens after you type, not in how the box looks. It connects directly to Houde and Hill's "role" dimension: judging a digital product only by its look and feel misses the most important part of the design.
