// script.js - Corrected Word Formation Game

/**********************************************
 * 1. GAME DATA (Base Words + Common Affixes) *
 **********************************************/
const gameData = {
  base_words: [
{
  word: "act",
  level: "B2",
  derivatives: [
    { word: "action", level: "B2", definition: "The process or state of doing something." },
    { word: "active", level: "B2", definition: "Engaging or ready to engage in physical activity; energetic." },
    { word: "actively", level: "B2", definition: "In an active manner; with energy or movement." },
    { word: "actor", level: "B2", definition: "A person who portrays a character in a performance." },
    { word: "actress", level: "B2", definition: "A female actor." },
    { word: "activity", level: "B2", definition: "The condition in which things are happening or being done." },
    { word: "inactive", level: "B2", definition: "Not engaging in physical activity; idle." },
    { word: "inactivity", level: "C1", definition: "The state of lacking action or movement." },
    { word: "react", level: "C1", definition: "To respond or behave in reaction to something." },
    { word: "reaction", level: "C1", definition: "An action performed or feeling experienced in response to a situation." },
    { word: "reactive", level: "C1", definition: "Showing a response to a stimulus." },
    { word: "reactivate", level: "C2", definition: "To make something active again." },
    { word: "overact", level: "C1", definition: "To act in an exaggerated manner, typically on stage or in film." },
    { word: "enact", level: "C1", definition: "To make into law; to act out on stage." },
    { word: "enactment", level: "C2", definition: "The process of passing legislation; the act of performing something." },
    { word: "interact", level: "C1", definition: "To act together or influence each other mutually." },
    { word: "interaction", level: "C1", definition: "Reciprocal action or influence between two or more entities." }
  ]
},
{
  word: "analyse",
  level: "B2",
  derivatives: [
    { word: "analysis", level: "B2", definition: "Detailed examination of the elements or structure of something." },
    { word: "analyses", level: "B2", definition: "Plural of analysis: multiple detailed examinations." },
    { word: "analyst", level: "B2", definition: "A person who conducts analysis or specialized examination." },
    { word: "analytical", level: "C1", definition: "Relating to or using analysis or logical reasoning." },
    { word: "analytically", level: "C1", definition: "In an analytical manner; using logical reasoning." },
    { word: "reanalyse", level: "C2", definition: "To analyze again." }
  ]
},
{
  word: "argue",
  level: "B2",
  derivatives: [
    { word: "argument", level: "B2", definition: "A reason or set of reasons given to persuade others that an action or idea is right or wrong." },
    { word: "argumentation", level: "C1", definition: "The process of reasoning systematically in support of an idea or theory." },
    { word: "argumentative", level: "C1", definition: "Given to expressing divergent or opposite views; disputatious." },
    { word: "arguable", level: "B2", definition: "Able to be shown by argument; open to debate." },
    { word: "arguably", level: "C1", definition: "Used to qualify the statement of an opinion or belief to indicate that it is open to argument." },
    { word: "inarguable", level: "C1", definition: "Impossible to argue against; indisputable." },
    { word: "reargue", level: "C2", definition: "To argue again; to present new arguments for a point." }
  ]
},
{
  word: "assess",
  level: "B2",
  derivatives: [
    { word: "assessment", level: "B2", definition: "The evaluation or estimation of the nature, quality, or ability of someone or something." },
    { word: "assessor", level: "C1", definition: "A person who evaluates or estimates the quality, ability, or value of something." },
    { word: "reassess", level: "C1", definition: "To assess again; to re-evaluate." },
    { word: "reassessment", level: "C2", definition: "The action of assessing something again; a re-evaluation." }
  ]
},
{
  word: "attain",
  level: "C1",
  derivatives: [
    { word: "attainment", level: "B2", definition: "The action or fact of achieving a goal or reaching a level of proficiency." },
    { word: "attainable", level: "B2", definition: "Able to be achieved or reached." },
    { word: "attainably", level: "C1", definition: "In a manner that can be achieved." },
    { word: "unattainable", level: "C1", definition: "Not able to be reached or achieved." },
    { word: "preattain", level: "C2", definition: "To attain beforehand; to achieve earlier than expected." }
  ]
},
{
  word: "attract",
  level: "B2",
  derivatives: [
    { word: "attraction", level: "B2", definition: "The action or power of evoking interest, pleasure, or liking in someone." },
    { word: "attractive", level: "B2", definition: "Pleasing or appealing to the senses." },
    { word: "attractively", level: "C1", definition: "In an attractive or appealing manner." },
    { word: "attractiveness", level: "C1", definition: "The quality of being attractive or appealing." },
    { word: "unattractive", level: "B2", definition: "Not pleasing or appealing to the senses." },
    { word: "unattractively", level: "C1", definition: "In a manner that is not pleasing or appealing." },
    { word: "distract", level: "B2", definition: "To draw someone's attention away from something." },
    { word: "distraction", level: "B2", definition: "A thing that prevents someone from concentrating on something else." },
    { word: "distractive", level: "C1", definition: "Serving to distract; diverting attention." },
    { word: "re-attract", level: "C2", definition: "To attract again or anew." }
  ]
},
{
  word: "avoid",
  level: "B1",
  derivatives: [
    { word: "avoidance", level: "B2", definition: "The action of keeping away from or not doing something." },
    { word: "avoidable", level: "B2", definition: "Able to be avoided or prevented." },
    { word: "unavoidable", level: "B2", definition: "Not able to be avoided or prevented." },
    { word: "unavoidably", level: "C1", definition: "In a manner that cannot be avoided or prevented." },
    { word: "overavoid", level: "C2", definition: "To avoid excessively." }
  ]
},
{
  word: "believe",
  level: "A2",
  derivatives: [
    { word: "belief", level: "A2", definition: "An acceptance that something exists or is true, especially without proof." },
    { word: "believable", level: "B2", definition: "Able to be believed; credible." },
    { word: "unbelievable", level: "B1", definition: "Not able to be believed; extraordinary." },
    { word: "believer", level: "B1", definition: "A person who believes in a particular thing." },
    { word: "disbelieve", level: "B2", definition: "To be unable or unwilling to believe something." },
    { word: "disbelief", level: "B2", definition: "Inability or refusal to accept that something is true or real." }
  ]
},
{
  word: "calculate",
  level: "B1",
  derivatives: [
    { word: "calculation", level: "B1", definition: "The process of using mathematics; careful thought or planning." },
    { word: "calculator", level: "B1", definition: "A small electronic device or software used for mathematical calculations." },
    { word: "calculable", level: "B2", definition: "Able to be calculated or computed." },
    { word: "incalculable", level: "C1", definition: "Too great to be calculated or measured." },
    { word: "recalculate", level: "B2", definition: "To calculate something again." },
    { word: "recalculation", level: "C1", definition: "The action of calculating something again." },
    { word: "miscalculate", level: "B2", definition: "To calculate incorrectly or make an error in calculation." },
    { word: "miscalculation", level: "C1", definition: "An error in calculation." }
  ]
},
{
  word: "categorise",
  level: "C1",
  derivatives: [
    { word: "category", level: "B2", definition: "A class or division of people or things regarded as having particular shared characteristics." },
    { word: "categorisation", level: "B2", definition: "The process of placing items into categories." },
    { word: "categorizer", level: "C1", definition: "A person or thing that categorizes." },
    { word: "categorical", level: "C1", definition: "Unambiguously expressive and direct; relating to categories." },
    { word: "categorically", level: "C1", definition: "In a way that is unambiguously explicit and direct." },
    { word: "uncategorisable", level: "C2", definition: "Impossible to place into a category." },
    { word: "precategorise", level: "C2", definition: "To categorize beforehand." },
    { word: "recategorise", level: "C2", definition: "To categorize again or differently." }
  ]
},
{
  word: "challenge",
  level: "B2",
  derivatives: [
    { word: "challenger", level: "B2", definition: "A person who contests or disputes something." },
    { word: "challenging", level: "B2", definition: "Testing one's abilities; demanding." },
    { word: "challenged", level: "B2", definition: "Having difficulties or obstacles to overcome." },
    { word: "unchallenged", level: "C1", definition: "Not disputed or resisted; without challenge." },
    { word: "unchallenging", level: "C1", definition: "Not demanding or testing one's abilities." },
    { word: "challengeable", level: "C2", definition: "Able to be challenged or disputed." },
    { word: "rechallenge", level: "C2", definition: "To challenge again." }
  ]
},
{
  word: "choose",
  level: "A2",
  derivatives: [
    { word: "choice", level: "A2", definition: "An act of selecting or making a decision when faced with two or more possibilities." },
    { word: "chooser", level: "B2", definition: "A person who chooses or selects." },
    { word: "choosy", level: "B1", definition: "Placing very high demands on one's choice; hard to please." },
    { word: "choiceless", level: "C1", definition: "Having no choice; not able to select from alternatives." },
    { word: "choicely", level: "C2", definition: "In a manner that is carefully or discriminatingly chosen." },
    { word: "choosable", level: "C2", definition: "Able to be chosen or selected." }
  ]
},
{
  word: "combine",
  level: "B2",
  derivatives: [
    { word: "combination", level: "B2", definition: "A joining or merging of different parts or qualities in which the component elements are individually distinct." },
    { word: "combinable", level: "C1", definition: "Able to be combined or joined together." },
    { word: "uncombinable", level: "C2", definition: "Not able to be combined or joined." },
    { word: "recombine", level: "B2", definition: "To combine again in a different way." },
    { word: "recombination", level: "C1", definition: "The act or process of recombining; especially in genetics, the exchange of genetic material." },
    { word: "combinatorial", level: "C1", definition: "Relating to the arrangement or combination of elements in sets." },
    { word: "combinatorics", level: "C2", definition: "The branch of mathematics dealing with combinations of objects." },
    { word: "uncombined", level: "C1", definition: "Not joined or merged; separate." }
  ]
},
{
  word: "communicate",
  level: "B1",
  derivatives: [
    { word: "communication", level: "B1", definition: "The imparting or exchange of information or news." },
    { word: "communicative", level: "B2", definition: "Willing or eager to talk or impart information." },
    { word: "communicator", level: "C1", definition: "A person who is able to convey information or ideas effectively." },
    { word: "miscommunicate", level: "B2", definition: "To communicate something incorrectly or inadequately." },
    { word: "miscommunication", level: "C1", definition: "A failure to communicate ideas or intentions successfully." },
    { word: "telecommunication", level: "B2", definition: "Communication over a distance by cable, telegraph, telephone, or broadcasting." },
    { word: "telecommunications", level: "C1", definition: "The industry or science of transmitting information by electrical means." },
    { word: "uncommunicative", level: "C1", definition: "Unwilling to talk or impart information." }
  ]
},
{
  word: "compare",
  level: "B1",
  derivatives: [
    { word: "comparison", level: "B1", definition: "The act of examining similarities and/or differences between two or more things." },
    { word: "comparable", level: "B2", definition: "Able to be likened to another; similar." },
    { word: "comparably", level: "B2", definition: "In a comparable manner; to a similar degree." },
    { word: "comparative", level: "B2", definition: "Performed or happening by comparison." },
    { word: "comparatively", level: "B2", definition: "To a moderate degree as compared to something else." },
    { word: "incomparable", level: "C1", definition: "Without an equal in quality or extent; matchless." },
    { word: "incomparably", level: "C2", definition: "In a manner that is without equal; to a matchless degree." },
    { word: "comparability", level: "C1", definition: "The quality of being comparable or similar in nature." }
  ]
},
{
  word: "compete",
  level: "B1",
  derivatives: [
    { word: "competition", level: "B1", definition: "The activity or condition of striving to gain or win something by defeating others." },
    { word: "competitor", level: "B1", definition: "A person, team, or company that competes against others." },
    { word: "competitive", level: "B1", definition: "Having a strong desire to be more successful than others." },
    { word: "competitively", level: "B2", definition: "In a manner that relates to or involves competition." },
    { word: "competitiveness", level: "C1", definition: "The quality of being competitive; eagerness to compete." },
    { word: "uncompetitive", level: "B2", definition: "Not able to compete successfully." },
    { word: "uncompetitively", level: "C2", definition: "In a manner not suited to or lacking the ability to compete." }
  ]
},
{
  word: "complete",
  level: "A2",
  derivatives: [
    { word: "completion", level: "B1", definition: "The action or process of completing or finishing something." },
    { word: "completely", level: "B2", definition: "To the fullest extent; totally." },
    { word: "completeness", level: "B2", definition: "The state or quality of being complete; wholeness." },
    { word: "incomplete", level: "A2", definition: "Not having all the necessary or appropriate parts." },
    { word: "incompletely", level: "B2", definition: "In a manner that is not complete; partially." }
  ]
},
{
  word: "conclude",
  level: "B2",
  derivatives: [
    { word: "conclusion", level: "B2", definition: "A judgment or decision reached after deliberation; the end or finish of an event." },
    { word: "conclusive", level: "C1", definition: "Serving to prove a case; decisive and convincing." },
    { word: "conclusively", level: "C1", definition: "In a manner that leaves no doubt; decisively." },
    { word: "inconclusive", level: "C1", definition: "Not leading to a firm conclusion; unconvincing." },
    { word: "inconclusively", level: "C2", definition: "In a manner that fails to prove a case or reach a decision." },
    { word: "preconclude", level: "C2", definition: "To conclude beforehand; to decide in advance." },
    { word: "preconclusion", level: "C2", definition: "A conclusion reached prematurely or before evidence is fully considered." }
  ]
},
{
  word: "conduct",
  level: "B2",
  derivatives: [
    { word: "conduction", level: "B2", definition: "The process by which heat or electricity is directly transmitted through a substance." },
    { word: "conductor", level: "B2", definition: "A person who directs the performance of an orchestra or choir, or a substance that conducts electricity." },
    { word: "conductive", level: "C1", definition: "Having the property of conducting heat or electricity; tending to bring about." },
    { word: "conductance", level: "C2", definition: "The measure of how well a material conducts electricity." },
    { word: "misconduct", level: "C1", definition: "Unacceptable or improper behavior or wrongdoing." },
    { word: "misconducted", level: "C2", definition: "Having behaved improperly or unacceptably." },
    { word: "misconducting", level: "C2", definition: "Acting improperly or engaging in wrongdoing." },
    { word: "reconduct", level: "C2", definition: "To conduct again or anew." }
  ]
},
{
  word: "confirm",
  level: "B2",
  derivatives: [
    { word: "confirmation", level: "B2", definition: "The action of confirming something; a statement or proof that something is true." },
    { word: "confirmable", level: "C1", definition: "Able to be confirmed or verified." },
    { word: "confirmed", level: "B2", definition: "Having been established as true or definite." },
    { word: "confirming", level: "B2", definition: "Providing evidence or proof; verifying." },
    { word: "unconfirmed", level: "B2", definition: "Not yet verified or validated." },
    { word: "reconfirm", level: "C1", definition: "To confirm again." },
    { word: "reconfirmation", level: "C2", definition: "The action of confirming something again; a second verification." }
  ]
},
{
  word: "connect",
  level: "B2",
  derivatives: [
    { word: "connection", level: "B2", definition: "A relationship in which a person or thing is linked or associated with something else." },
    { word: "connected", level: "B2", definition: "Joined or linked together." },
    { word: "connective", level: "C1", definition: "Serving to connect; linking one thing with another." },
    { word: "connectivity", level: "C2", definition: "The state or extent of being connected or interconnected." },
    { word: "disconnect", level: "B2", definition: "To break the connection of or between things." },
    { word: "disconnection", level: "C1", definition: "The state of being disconnected; a lack of connection." },
    { word: "reconnect", level: "C1", definition: "To connect again." },
    { word: "reconnection", level: "C2", definition: "The action of connecting something again." }
  ]
},
{
  word: "consider",
  level: "B1",
  derivatives: [
    { word: "consideration", level: "B1", definition: "Careful thought, typically over a period of time." },
    { word: "considerate", level: "B1", definition: "Careful not to inconvenience or harm others; thoughtful." },
    { word: "considerately", level: "C1", definition: "In a manner that shows careful thought or regards others." },
    { word: "reconsider", level: "B2", definition: "To consider again, especially taking into account new evidence or changed circumstances." },
    { word: "reconsideration", level: "C2", definition: "The process of reconsidering; a second thought." },
    { word: "inconsiderate", level: "B2", definition: "Thoughtlessly causing hurt or inconvenience to others." },
    { word: "inconsiderately", level: "C1", definition: "In a manner that lacks concern for the feelings or convenience of others." }
  ]
},
{
  word: "construct",
  level: "B2",
  derivatives: [
    { word: "construction", level: "B2", definition: "The process of building something, typically a large structure." },
    { word: "constructive", level: "C1", definition: "Serving a useful purpose; tending to build up." },
    { word: "constructor", level: "C1", definition: "A person or company that builds something, especially buildings or infrastructure." },
    { word: "unconstructive", level: "C2", definition: "Not serving a useful or positive purpose; detrimental." },
    { word: "reconstruct", level: "B2", definition: "To build again or form a new personal interpretation of something." },
    { word: "reconstruction", level: "C1", definition: "The action of reconstructing or being reconstructed; rebuilding." },
    { word: "deconstruct", level: "C2", definition: "To break down and analyze in terms of its assumptions, preconceptions, and contradictions." },
    { word: "deconstruction", level: "C2", definition: "A method of philosophical or literary analysis that emphasizes the internal workings of language." },
    { word: "misconstruction", level: "C1", definition: "An incorrect interpretation of something; misunderstanding." },
    { word: "misconstruct", level: "C2", definition: "To interpret wrongly; to misunderstand." }
  ]
},
{
  word: "contribute",
  level: "B2",
  derivatives: [
    { word: "contribution", level: "B2", definition: "A gift or payment to a common fund or collection; the part played by a person or thing in bringing about a result." },
    { word: "contributor", level: "C1", definition: "A person who contributes something, especially money or ideas." },
    { word: "contributory", level: "C1", definition: "Playing a part in bringing about a result; helpful." },
    { word: "uncontributory", level: "C2", definition: "Not helpful or not providing a contribution." },
    { word: "recontribute", level: "C2", definition: "To contribute again." }
  ]
},
{
  word: "control",
  level: "B2",
  derivatives: [
    { word: "controller", level: "B2", definition: "A person or device that controls something." },
    { word: "controlled", level: "B2", definition: "Done or being done with control; restrained." },
    { word: "controlling", level: "B2", definition: "Exercising influence or authority over something or someone." },
    { word: "controllable", level: "C1", definition: "Able to be controlled or managed." },
    { word: "uncontrollable", level: "C2", definition: "Impossible to control or manage." },
    { word: "uncontrollably", level: "C2", definition: "In a manner that cannot be controlled." },
    { word: "overcontrol", level: "C2", definition: "To exercise excessive control over something or someone." },
    { word: "undercontrol", level: "C2", definition: "The state of not having adequate control; insufficiently controlled." }
  ]
},
{
  word: "convert",
  level: "B2",
  derivatives: [
    { word: "conversion", level: "B2", definition: "The process of changing or causing something to change from one form to another." },
    { word: "convertible", level: "B2", definition: "Able to be changed in form, function, or character." },
    { word: "converter", level: "C1", definition: "A device or person that converts something from one form to another." },
    { word: "unconverted", level: "C1", definition: "Not having been converted or changed." },
    { word: "reconvert", level: "C1", definition: "To convert again or back to a previous form." },
    { word: "reconversion", level: "C2", definition: "The act of converting something again to its original or a new form." }
  ]
},
{
  word: "create",
  level: "B1",
  derivatives: [
    { word: "creation", level: "B1", definition: "The action or process of bringing something into existence." },
    { word: "creative", level: "B1", definition: "Relating to or involving the use of imagination or original ideas to create something." },
    { word: "creativity", level: "B2", definition: "The use of imagination or original ideas to create something; inventiveness." },
    { word: "creator", level: "B2", definition: "A person or thing that brings something into existence." },
    { word: "recreate", level: "B2", definition: "To create again; to refresh by activity that amuses or stimulates." },
    { word: "recreation", level: "B2", definition: "Activity done for enjoyment when one is not working." },
    { word: "recreational", level: "B2", definition: "Relating to or denoting recreation." }
  ]
},
{
  word: "criticise",
  level: "C1",
  derivatives: [
    { word: "criticism", level: "B2", definition: "The expression of disapproval of someone or something based on perceived faults or mistakes." },
    { word: "critic", level: "B2", definition: "A person who expresses an unfavorable opinion of something." },
    { word: "critical", level: "B2", definition: "Expressing adverse or disapproving comments or judgments." },
    { word: "critically", level: "C1", definition: "In a way that expresses or involves criticism; in an extremely serious manner." },
    { word: "critique", level: "C1", definition: "A detailed analysis and assessment of something, especially a literary, philosophical, or political theory." },
    { word: "criticality", level: "C2", definition: "The quality, state, or degree of being critical; importance." },
    { word: "uncritical", level: "C1", definition: "Not expressing or using criticism or careful judgment." },
    { word: "uncritically", level: "C2", definition: "In a manner that does not question or critique." },
    { word: "criticiable", level: "C2", definition: "Able to be criticized; open to critique." }
  ]
},
{
  word: "decide",
  level: "B2",
  derivatives: [
    { word: "decision", level: "B2", definition: "A conclusion or resolution reached after consideration." },
    { word: "decisive", level: "C1", definition: "Settling an issue convincingly or producing a definite result." },
    { word: "decisively", level: "C1", definition: "In a manner that produces a definite result; in a resolute way." },
    { word: "indecisive", level: "C1", definition: "Not able to make decisions quickly or effectively." },
    { word: "indecisively", level: "C2", definition: "In a manner showing difficulty in making decisions." },
    { word: "undecided", level: "B2", definition: "Not having made a decision; not yet settled." },
    { word: "predecide", level: "C2", definition: "To decide beforehand; to determine in advance." }
  ]
},
{
  word: "define",
  level: "B2",
  derivatives: [
    { word: "definition", level: "B2", definition: "A statement of the exact meaning of a word or phrase." },
    { word: "definite", level: "B2", definition: "Clearly stated or decided; not vague or doubtful." },
    { word: "definitely", level: "B2", definition: "Without doubt; clearly." },
    { word: "definitive", level: "C1", definition: "Conclusive and providing a final solution; the most reliable or complete." },
    { word: "definitively", level: "C2", definition: "In a manner that is conclusive or decisive." },
    { word: "definable", level: "C1", definition: "Able to be defined or described precisely." },
    { word: "indefinable", level: "C2", definition: "Impossible to define or describe precisely." },
    { word: "undefined", level: "B2", definition: "Not clearly defined or identified." },
    { word: "undefinedly", level: "C2", definition: "In a manner that is not defined or specified." },
    { word: "redefine", level: "C1", definition: "To define again or differently." },
    { word: "redefinition", level: "C2", definition: "The act of defining something again or differently." }
  ]
},
{
  word: "demonstrate",
  level: "B2",
  derivatives: [
    { word: "demonstration", level: "B2", definition: "The act of showing or explaining how something works." },
    { word: "demonstrative", level: "C1", definition: "Tending to show feelings openly; serving to display something." },
    { word: "demonstrably", level: "C1", definition: "Clearly apparent or capable of being shown or demonstrated." },
    { word: "demonstrable", level: "C1", definition: "Able to be demonstrated or proven." },
    { word: "undemonstrative", level: "C2", definition: "Not openly displaying emotions or feelings." },
    { word: "pre-demonstrate", level: "C2", definition: "To demonstrate beforehand." }
  ]
},
{
  word: "derive",
  level: "C1",
  derivatives: [
    { word: "derivation", level: "C1", definition: "The obtaining or developing of something from a source or origin." },
    { word: "derivative", level: "C1", definition: "Something that is based on another source; a secondary product." },
    { word: "derivative-free", level: "C2", definition: "Not depending on or using derivatives; free from derivation." },
    { word: "derivable", level: "C1", definition: "Able to be derived or obtained from a source." },
    { word: "underived", level: "C2", definition: "Not derived from a source; original." },
    { word: "rededuce", level: "C2", definition: "To derive again; to re-obtain from original sources." }
  ]
},
{
  word: "describe",
  level: "B1",
  derivatives: [
    { word: "description", level: "B1", definition: "A spoken or written representation or account of a person, object, or event." },
    { word: "descriptive", level: "B2", definition: "Serving to describe; giving details about something." },
    { word: "descriptively", level: "C1", definition: "In a manner that provides a detailed account or representation." },
    { word: "undescribed", level: "C2", definition: "Not described; lacking description." },
    { word: "undescriptive", level: "C2", definition: "Lacking descriptive quality or detail." },
    { word: "redescribe", level: "C2", definition: "To describe again or differently." }
  ]
},
{
  word: "design",
  level: "B2",
  derivatives: [
    { word: "designer", level: "B2", definition: "A person who plans and creates something, such as clothing, artworks, or buildings." },
    { word: "designing", level: "B2", definition: "Engaged in planning or creating something." },
    { word: "designable", level: "C1", definition: "Able to be designed or shaped." },
    { word: "undesignable", level: "C2", definition: "Not able to be designed." },
    { word: "redesign", level: "B2", definition: "To design again or differently." },
    { word: "redesignation", level: "C2", definition: "The act of designating again; reassigning a role or function." },
    { word: "designation", level: "C1", definition: "The act of assigning a name, title, or status to something or someone." },
    { word: "designator", level: "C2", definition: "A person or thing that designates, names, or assigns." },
    { word: "undesigned", level: "C1", definition: "Not planned or intentional; spontaneous." }
  ]
},
{
  word: "determine",
  level: "B2",
  derivatives: [
    { word: "determination", level: "B2", definition: "Firmness of purpose; the act of finding out something exactly." },
    { word: "determined", level: "B2", definition: "Having made a firm decision and being resolved not to change it." },
    { word: "determinedly", level: "C1", definition: "In a manner that shows firmness of purpose." },
    { word: "undetermined", level: "C1", definition: "Not definitely decided or settled." },
    { word: "indeterminate", level: "C2", definition: "Not exactly known, established, or defined." },
    { word: "indeterminable", level: "C2", definition: "Impossible to determine or define exactly." },
    { word: "predetermine", level: "C2", definition: "To determine an outcome in advance." },
    { word: "predetermination", level: "C2", definition: "The action of determining something beforehand; predestination." }
  ]
},
{
  word: "develop",
  level: "B2",
  derivatives: [
    { word: "development", level: "B2", definition: "The process of developing or being developed; growth or progression." },
    { word: "developer", level: "C1", definition: "A person or company that makes or creates something, especially software or buildings." },
    { word: "developed", level: "B2", definition: "Advanced or mature in terms of growth or complexity." },
    { word: "undeveloped", level: "C1", definition: "Not fully developed; lacking in growth or complexity." },
    { word: "underdevelop", level: "C2", definition: "To develop insufficiently or imperfectly." },
    { word: "underdevelopment", level: "C2", definition: "The state of being underdeveloped; lack of economic growth or infrastructure." },
    { word: "redevelop", level: "B2", definition: "To develop again or differently, especially buildings or areas." },
    { word: "redevelopment", level: "C1", definition: "The process of improving or revitalizing an area that has been previously developed." }
  ]
},
{
  word: "discover",
  level: "B2",
  derivatives: [
    { word: "discovery", level: "B2", definition: "The action or process of finding or being found." },
    { word: "discoverer", level: "C1", definition: "A person who finds or uncovers something for the first time." },
    { word: "discoverable", level: "C1", definition: "Able to be found or uncovered." },
    { word: "discovering", level: "B2", definition: "The act of finding or uncovering something." },
    { word: "undiscovered", level: "C1", definition: "Not yet found or uncovered." },
    { word: "rediscover", level: "C1", definition: "To discover something again, especially after forgetting it existed." },
    { word: "rediscovery", level: "C1", definition: "The action of discovering something again." }
  ]
},
{
  word: "distinguish",
  level: "C1",
  derivatives: [
    { word: "distinction", level: "B2", definition: "A difference or contrast between similar things or people." },
    { word: "distinctive", level: "B2", definition: "Having a quality or characteristic that makes something easily recognizable." },
    { word: "distinctively", level: "C1", definition: "In a manner that shows distinction or uniqueness." },
    { word: "distinct", level: "B1", definition: "Clearly different or of a different kind." },
    { word: "distinctly", level: "B2", definition: "In a clear and unmistakable manner." },
    { word: "indistinct", level: "C2", definition: "Not clearly defined or easy to see." },
    { word: "indistinctly", level: "C2", definition: "In a manner that is not clear or easy to see." },
    { word: "undistinguished", level: "C2", definition: "Lacking distinction or notable qualities." },
    { word: "distinguishable", level: "C1", definition: "Able to be recognized as different." },
    { word: "distinguishably", level: "C2", definition: "In a manner that can be recognized as different." },
    { word: "distinguished", level: "B2", definition: "Successful, authoritative, and commanding great respect." },
    { word: "distinguishing", level: "C1", definition: "Characteristic of one thing that sets it apart from another." },
    { word: "indistinguishable", level: "C2", definition: "So similar that it is difficult or impossible to tell one from the other." },
    { word: "indistinguishably", level: "C2", definition: "In a manner that is impossible to tell apart." }
  ]
},
{
  word: "distribute",
  level: "B2",
  derivatives: [
    { word: "distribution", level: "B2", definition: "The action of sharing something out among a number of recipients." },
    { word: "distributor", level: "C1", definition: "A person or company that supplies goods to retailers or customers." },
    { word: "distributive", level: "C1", definition: "Relating to the distribution or dealing out of something." },
    { word: "distributed", level: "B2", definition: "Shared out or spread over an area or among a number of people." },
    { word: "distributing", level: "B2", definition: "The act of sharing or delivering something to various recipients." },
    { word: "distributable", level: "C1", definition: "Capable of being distributed or shared." },
    { word: "redistribute", level: "C1", definition: "To distribute something again or differently." },
    { word: "redistribution", level: "C1", definition: "The action of distributing something again or differently." },
    { word: "undistributed", level: "C2", definition: "Not yet allocated or spread out among recipients." },
    { word: "overdistribute", level: "C2", definition: "To distribute too much or excessively." }
  ]
},
{
  word: "educate",
  level: "B2",
  derivatives: [
    { word: "education", level: "B1", definition: "The process of receiving or giving systematic instruction." },
    { word: "educator", level: "B2", definition: "A person who provides instruction or education." },
    { word: "educational", level: "B1", definition: "Relating to the provision of education or scholarship." },
    { word: "educationally", level: "C2", definition: "In a manner related to education." },
    { word: "educated", level: "B2", definition: "Having been educated; having knowledge or training." },
    { word: "uneducated", level: "B2", definition: "Lacking education; not educated." },
    { word: "reeducate", level: "C1", definition: "To teach or train someone again." },
    { word: "reeducation", level: "C2", definition: "The process of educating someone again, often in a different way." },
    { word: "miseducate", level: "C2", definition: "To teach or train improperly or wrongly." },
    { word: "miseducation", level: "C2", definition: "Incorrect or unsound teaching or training." }
  ]
},
{
  word: "enable",
  level: "B2",
  derivatives: [
    { word: "enabler", level: "C1", definition: "A person or thing that enables something to happen." },
    { word: "enabling", level: "B2", definition: "Providing the means or ability to do something." },
    { word: "enablement", level: "C1", definition: "The act of making someone able to do something; empowerment." },
    { word: "enabled", level: "B2", definition: "Provided with the means or ability to do something." },
    { word: "reenable", level: "C2", definition: "To enable again or restore the ability to do something." },
    { word: "reenablement", level: "C2", definition: "The action of enabling again." }
  ]
},
{
  word: "encourage",
  level: "B2",
  derivatives: [
    { word: "encouragement", level: "B2", definition: "The action of giving someone support, confidence, or hope." },
    { word: "encouraging", level: "B2", definition: "Giving someone support or confidence; supportive." },
    { word: "encouraged", level: "B2", definition: "Having received support or confidence." },
    { word: "encourager", level: "C1", definition: "A person who gives support, confidence, or hope to another." },
    { word: "reencourage", level: "C2", definition: "To encourage again or renew support." },
    { word: "discourage", level: "B2", definition: "To cause someone to lose confidence or enthusiasm." },
    { word: "discouraging", level: "B2", definition: "Causing someone to lose confidence or enthusiasm." },
    { word: "discouraged", level: "B2", definition: "Having lost confidence or enthusiasm." },
    { word: "discouragement", level: "B2", definition: "The feeling of being persuaded against something or losing confidence." }
  ]
},
{
  word: "ensure",
  level: "B2",
  derivatives: [
    { word: "ensuring", level: "B2", definition: "Making certain that something will occur or be the case." },
    { word: "ensured", level: "B2", definition: "Made certain that something will happen or be the case." },
    { word: "ensurement", level: "C2", definition: "The act of ensuring or guaranteeing." },
    { word: "ensureable", level: "C2", definition: "Capable of being guaranteed or made certain." }
  ]
},
{
  word: "establish",
  level: "B2",
  derivatives: [
    { word: "establishment", level: "B2", definition: "The process of founding or creating an institution, system, or organization." },
    { word: "established", level: "B2", definition: "Having been in existence for a long time and accepted." },
    { word: "establishing", level: "B2", definition: "The act of founding, setting up, or instituting something." },
    { word: "reestablish", level: "C1", definition: "To establish something again or restore it." },
    { word: "reestablishment", level: "C1", definition: "The action of establishing something again." },
    { word: "unestablished", level: "C2", definition: "Not having been set up or accepted; not established." },
    { word: "establishable", level: "C2", definition: "Capable of being set up or instituted." },
    { word: "disestablish", level: "C2", definition: "To deprive of official status or to abolish an established institution." },
    { word: "disestablishment", level: "C2", definition: "The action of depriving something of official status or abolishing it." },
    { word: "disestablished", level: "C2", definition: "Having been deprived of official status or abolished." }
  ]
},
{
  word: "evaluate",
  level: "B2",
  derivatives: [
    { word: "evaluation", level: "B2", definition: "The making of a judgment about the amount, number, or value of something." },
    { word: "evaluative", level: "C1", definition: "Serving to judge or assess the value of something." },
    { word: "evaluator", level: "C1", definition: "A person who assesses or judges the value or quality of something." },
    { word: "evaluatively", level: "C2", definition: "In a manner that involves judgment or assessment." },
    { word: "evaluated", level: "B2", definition: "Assessed or judged for value, quality, or importance." },
    { word: "evaluating", level: "B2", definition: "The act of assessing or judging the value or quality of something." },
    { word: "reevaluate", level: "C1", definition: "To evaluate something again, often with fresh criteria or information." },
    { word: "reevaluation", level: "C1", definition: "The act of evaluating something again." },
    { word: "misevaluate", level: "C2", definition: "To evaluate incorrectly or improperly." },
    { word: "misevaluation", level: "C2", definition: "An incorrect or improper evaluation." },
    { word: "evaluable", level: "C2", definition: "Capable of being evaluated or assessed." },
    { word: "unevaluated", level: "C2", definition: "Not yet assessed or judged for quality, value, or importance." }
  ]
},
{
  word: "examine",
  level: "B2",
  derivatives: [
    { word: "examination", level: "B2", definition: "A detailed inspection or study of something." },
    { word: "examiner", level: "C1", definition: "A person who inspects, tests, or evaluates something." },
    { word: "examinable", level: "C2", definition: "Capable of being examined or inspected." },
    { word: "examined", level: "B2", definition: "Inspected or studied carefully." },
    { word: "examining", level: "B2", definition: "The act of inspecting or studying something in detail." },
    { word: "reexamine", level: "C2", definition: "To examine again, often for additional detail or clarity." },
    { word: "reexamination", level: "C2", definition: "The act of examining something again." },
    { word: "unexamined", level: "C2", definition: "Not yet examined or inspected." }
  ]
},
{
  word: "exclude",
  level: "B2",
  derivatives: [
    { word: "exclusion", level: "B2", definition: "The process or state of being left out or shut out." },
    { word: "exclusive", level: "B1", definition: "Restricted to the person, group, or area concerned; not shared." },
    { word: "exclusively", level: "B2", definition: "Only; not involving anyone or anything else." },
    { word: "exclusionary", level: "C2", definition: "Designed to or tending to exclude or shut out." },
    { word: "exclusivity", level: "C2", definition: "The state of being exclusive; restriction to a select group or thing." },
    { word: "excludable", level: "C2", definition: "Capable of being excluded." },
    { word: "including", level: "B2", definition: "Containing as part of a whole." },
    { word: "excluded", level: "B2", definition: "Not included or left out." },
    { word: "inexclusive", level: "C2", definition: "Not exclusive; allowing for inclusion." }
  ]
},
{
  word: "expand",
  level: "B1",
  derivatives: [
    { word: "expansion", level: "B2", definition: "The action of becoming larger or more extensive." },
    { word: "expansive", level: "C1", definition: "Covering a wide area in terms of space or scope." },
    { word: "expansively", level: "C1", definition: "In a manner that is broad, comprehensive, or extensive." },
    { word: "expanse", level: "C2", definition: "A wide continuous area of something." },
    { word: "expanded", level: "B2", definition: "Made larger in size, volume, or scope." },
    { word: "expanding", level: "B2", definition: "The act of increasing in size, volume, or scope." },
    { word: "expansible", level: "C2", definition: "Capable of being expanded or enlarged." },
    { word: "unexpansive", level: "C2", definition: "Not prone to expansion; limited in scope." },
    { word: "overexpand", level: "C2", definition: "To expand excessively, beyond a healthy or intended limit." },
    { word: "reexpand", level: "C2", definition: "To expand again after having been contracted." },
    { word: "reexpansion", level: "C2", definition: "The act of expanding again after contraction." }
  ]
},
{
  word: "expect",
  level: "B1",
  derivatives: [
    { word: "expectation", level: "B1", definition: "A strong belief that something will happen or be the case." },
    { word: "expectations", level: "B1", definition: "Beliefs about what will happen in the future." },
    { word: "expected", level: "B1", definition: "Regarded as likely to happen." },
    { word: "expectant", level: "C1", definition: "Having or showing an excited feeling that something is about to happen." },
    { word: "expectantly", level: "C2", definition: "In a manner showing eagerness or excitement for something to happen." },
    { word: "unexpected", level: "B1", definition: "Not expected or regarded as likely to happen." },
    { word: "unexpectedly", level: "B2", definition: "In a way that was not expected or anticipated." },
    { word: "unexpectedness", level: "C2", definition: "The quality or state of being unforeseen or surprising." },
    { word: "expectable", level: "C2", definition: "Able to be expected; within the realm of likely outcomes." }
  ]
},
{
  word: "explain",
  level: "B1",
  derivatives: [
    { word: "explanation", level: "B1", definition: "A statement or account that makes something clear." },
    { word: "explanatory", level: "B2", definition: "Serving to explain or make something clear." },
    { word: "explained", level: "B1", definition: "Made clear by describing in detail." },
    { word: "explaining", level: "B1", definition: "The act of making something clear or understandable." },
    { word: "inexplicable", level: "B2", definition: "Unable to be explained or understood." },
    { word: "inexplicably", level: "C2", definition: "In a manner that cannot be explained or understood." },
    { word: "inexplicability", level: "C2", definition: "The quality of being impossible to explain." },
    { word: "unexplainable", level: "C2", definition: "Not able to be explained or accounted for." },
    { word: "explicate", level: "C2", definition: "To analyze and develop an idea or principle in detail." },
    { word: "explication", level: "C2", definition: "The process of analyzing or developing an idea in detail." },
    { word: "reexplain", level: "C2", definition: "To explain something again, often more clearly." },
    { word: "reexplanation", level: "C2", definition: "The act of explaining something again." }
  ]
},
{
  word: "explore",
  level: "B2",
  derivatives: [
    { word: "exploration", level: "B2", definition: "The action of traveling in or through an unfamiliar area to learn about it." },
    { word: "explorer", level: "B2", definition: "A person who travels to new or unfamiliar places to discover things." },
    { word: "exploratory", level: "C1", definition: "Designed for or involved in exploration or investigation." },
    { word: "exploratively", level: "C2", definition: "In a manner that involves investigation or examination." },
    { word: "unexplored", level: "C1", definition: "Not yet investigated or examined." },
    { word: "reexplore", level: "C2", definition: "To explore again, often with new objectives or methods." },
    { word: "reexploration", level: "C2", definition: "The act of exploring something again." }
  ]
},
{
  word: "express",
  level: "B1",
  derivatives: [
    { word: "expression", level: "B1", definition: "The process of making your thoughts, feelings, or ideas known." },
    { word: "expressive", level: "B2", definition: "Effectively conveying thought or feeling." },
    { word: "expressively", level: "C1", definition: "In a manner that effectively conveys emotion or thought." },
    { word: "expressiveness", level: "C2", definition: "The quality of conveying thought or feeling effectively." },
    { word: "expressed", level: "B1", definition: "Conveyed or communicated in words or actions." },
    { word: "expressing", level: "B1", definition: "The act of conveying thoughts or feelings." },
    { word: "expressible", level: "C2", definition: "Capable of being expressed or communicated." },
    { word: "unexpressed", level: "C2", definition: "Not expressed; kept inside or hidden." },
    { word: "reexpress", level: "C2", definition: "To express something again or differently." },
    { word: "reexpression", level: "C2", definition: "The act of expressing something again." }
  ]
},
{
  word: "extend",
  level: "B1",
  derivatives: [
    { word: "extension", level: "B1", definition: "A part that is added to something to enlarge it." },
    { word: "extended", level: "B1", definition: "Made larger in length, scope, or duration." },
    { word: "extending", level: "B1", definition: "The act of making something larger or longer." },
    { word: "extensive", level: "B1", definition: "Covering a large area or scope." },
    { word: "extensively", level: "B2", definition: "In a way that covers a large area or scope." },
    { word: "extensible", level: "C1", definition: "Capable of being extended or stretched." },
    { word: "unextended", level: "C2", definition: "Not yet made larger in size, scope, or duration." },
    { word: "unextensible", level: "C2", definition: "Not capable of being extended." },
    { word: "overextend", level: "C1", definition: "To stretch or extend too far; to overreach." },
    { word: "overextension", level: "C2", definition: "The act of extending too far or overreaching." },
    { word: "reextend", level: "C2", definition: "To extend something again after it has been shortened." },
    { word: "reextension", level: "C2", definition: "The act of extending again after contraction." },
    { word: "extendable", level: "C2", definition: "Capable of being extended." }
  ]
},
{
  word: "facilitate",
  level: "B2",
  derivatives: [
    { word: "facilitation", level: "C1", definition: "The process of making something easier or more achievable." },
    { word: "facilitator", level: "C1", definition: "A person or thing that makes an action or process easier." },
    { word: "facilitative", level: "C2", definition: "Providing assistance or making something easier." },
    { word: "facilitated", level: "B2", definition: "Made something easier or more achievable." },
    { word: "facilitating", level: "B2", definition: "Making a process or action easier." },
    { word: "unfacilitated", level: "C2", definition: "Not assisted or made easier; lacking facilitation." }
  ]
},
{
  word: "focus",
  level: "B1",
  derivatives: [
    { word: "focal", level: "C1", definition: "Relating to the center or most important point." },
    { word: "focally", level: "C2", definition: "In a manner that relates to a central point or focus." },
    { word: "focused", level: "B1", definition: "Concentrated on a particular object or task." },
    { word: "focusing", level: "B1", definition: "The act of concentrating attention or effort." },
    { word: "focusable", level: "C2", definition: "Capable of being focused or concentrated." },
    { word: "defocus", level: "C2", definition: "To remove or reduce focus or concentration." },
    { word: "defocused", level: "C2", definition: "Having lost focus or concentration." },
    { word: "refocus", level: "C1", definition: "To adjust one's focus or attention again." },
    { word: "refocused", level: "C1", definition: "Having regained or adjusted focus or attention." },
    { word: "refocusing", level: "C2", definition: "The act of adjusting focus or attention again." },
    { word: "unfocused", level: "C2", definition: "Lacking clear focus or concentration." }
  ]
},
{
  word: "function",
  level: "B1",
  derivatives: [
    { word: "functional", level: "B2", definition: "Designed to be practical and useful rather than attractive." },
    { word: "functionality", level: "C2", definition: "The quality of being suited to serve a purpose well; usability." },
    { word: "functionally", level: "C2", definition: "In a manner that relates to practical use or purpose." },
    { word: "functioning", level: "B1", definition: "Working or operating in a proper or particular way." },
    { word: "malfunction", level: "C2", definition: "To function improperly or fail to operate as intended." },
    { word: "malfunctioning", level: "C2", definition: "Operating incorrectly or failing to perform properly." },
    { word: "nonfunctional", level: "C2", definition: "Not performing or able to perform a function." },
    { word: "functionless", level: "C2", definition: "Without a practical use or purpose." },
    { word: "functionalize", level: "C2", definition: "To make something functional or suitable for use." },
    { word: "functionalized", level: "C2", definition: "Having been made functional or suitable for use." }
  ]
},
{
  word: "generate",
  level: "B2",
  derivatives: [
    { word: "generation", level: "B2", definition: "The production or creation of something." },
    { word: "generator", level: "C1", definition: "A device or person that produces something, especially electricity." },
    { word: "generative", level: "C2", definition: "Relating to or capable of producing or creating." },
    { word: "generatively", level: "C2", definition: "In a manner that relates to production or creation." },
    { word: "generated", level: "B2", definition: "Produced or created." },
    { word: "generating", level: "B2", definition: "The act of producing or creating something." },
    { word: "regenerate", level: "C1", definition: "To bring into renewed existence; to grow again." },
    { word: "regeneration", level: "C1", definition: "The process of regrowing or renewing something." },
    { word: "regenerative", level: "C2", definition: "Capable of regenerating or being regenerated." },
    { word: "regenerated", level: "C1", definition: "Having been renewed or made new again." },
    { word: "generational", level: "C2", definition: "Relating to or characteristic of a generation." }
  ]
},
{
  word: "identify",
  level: "B1",
  derivatives: [
    { word: "identification", level: "B1", definition: "The action or process of identifying someone or something." },
    { word: "identity", level: "B1", definition: "The fact of being who or what a person or thing is." },
    { word: "identifiable", level: "B2", definition: "Able to be recognized or established as being a particular person or thing." },
    { word: "identified", level: "B1", definition: "Recognized or established as being a particular person or thing." },
    { word: "identifying", level: "B1", definition: "The act of recognizing or establishing the identity of someone or something." },
    { word: "unidentified", level: "B2", definition: "Not recognized or established as being a particular person or thing." },
    { word: "unidentifiable", level: "C2", definition: "Impossible to recognize or establish the identity of." },
    { word: "misidentify", level: "C2", definition: "To identify someone or something incorrectly." },
    { word: "misidentification", level: "C2", definition: "The act of identifying someone or something incorrectly." },
    { word: "reidentify", level: "C2", definition: "To identify someone or something again, often differently or more accurately." },
    { word: "reidentification", level: "C2", definition: "The act of identifying someone or something again." }
  ]
},
{
  word: "illustrate",
  level: "B2",
  derivatives: [
    { word: "illustration", level: "B2", definition: "A picture or example that makes something clear or explains it." },
    { word: "illustrator", level: "B2", definition: "A person who draws or creates pictures for books, magazines, etc." },
    { word: "illustrative", level: "C1", definition: "Serving to illustrate or clarify something." },
    { word: "illustratively", level: "C2", definition: "In a manner that serves to illustrate or clarify." },
    { word: "illustrated", level: "B2", definition: "Provided with pictures or examples that explain something." },
    { word: "illustrating", level: "B2", definition: "The act of drawing or providing examples to explain something." },
    { word: "unillustrated", level: "C2", definition: "Not provided with pictures or examples." }
  ]
},
{
  word: "impact",
  level: "B2",
  derivatives: [
    { word: "impactful", level: "C1", definition: "Having a strong effect or influence." },
    { word: "impactfully", level: "C2", definition: "In a manner that has a strong effect or influence." },
    { word: "impacted", level: "B2", definition: "Having an effect, especially a strong or marked one." },
    { word: "impacting", level: "B2", definition: "The act of having a strong effect or influence." }
  ]
},
{
  word: "implement",
  level: "B2",
  derivatives: [
    { word: "implementation", level: "B2", definition: "The process of putting a decision or plan into effect." },
    { word: "implemented", level: "B2", definition: "Carried out or put into effect." },
    { word: "implementing", level: "B2", definition: "The act of putting a plan or decision into effect." },
    { word: "implementer", level: "C1", definition: "A person or thing that carries out or executes a plan or decision." },
    { word: "implementable", level: "C1", definition: "Capable of being implemented or put into effect." },
    { word: "reimplement", level: "C2", definition: "To implement something again, often differently or more effectively." },
    { word: "reimplementation", level: "C2", definition: "The act of implementing something again." },
    { word: "unimplemented", level: "C2", definition: "Not yet carried out or put into effect." }
  ]
},
{
  word: "imply",
  level: "B2",
  derivatives: [
    { word: "implication", level: "B2", definition: "A suggestion or consequence that is not explicitly stated." },
    { word: "implicit", level: "B2", definition: "Implied though not plainly expressed." },
    { word: "implicitly", level: "B2", definition: "In a way that is not directly expressed; tacitly." },
    { word: "implicative", level: "C2", definition: "Serving to imply or suggest something." },
    { word: "implicated", level: "C2", definition: "Closely connected or concerned with something, often wrongdoing." },
    { word: "implicating", level: "C2", definition: "The act of showing that someone is involved in wrongdoing." },
    { word: "implicate", level: "C2", definition: "To show or suggest someone’s involvement in wrongdoing." },
    { word: "implicationless", level: "C2", definition: "Not carrying or suggesting any implication." },
    { word: "misimply", level: "C2", definition: "To imply something incorrectly or inappropriately." },
    { word: "misimplication", level: "C2", definition: "An incorrect or misleading suggestion." },
    { word: "unimplied", level: "C2", definition: "Not implied; not suggested or indicated." }
  ]
},
{
  word: "improve",
  level: "B1",
  derivatives: [
    { word: "improvement", level: "B1", definition: "The process of making something better." },
    { word: "improved", level: "B1", definition: "Made or become better." },
    { word: "improving", level: "B1", definition: "Becoming better or making something better." },
    { word: "improvable", level: "C2", definition: "Able to be improved; capable of being made better." },
    { word: "unimproved", level: "C2", definition: "Not made better; remaining at a lower quality or condition." }
  ]
},
{
  word: "include",
  level: "B1",
  derivatives: [
    { word: "inclusion", level: "B1", definition: "The act of including someone or something as part of a whole." },
    { word: "inclusive", level: "B1", definition: "Including everything or everyone; not excluding any part." },
    { word: "inclusively", level: "B2", definition: "In a way that includes all elements or people." },
    { word: "inclusivity", level: "C2", definition: "The quality of including all aspects or people." },
    { word: "included", level: "B1", definition: "Contained as part of a whole." },
    { word: "including", level: "B1", definition: "Containing as part of a whole." },
    { word: "preinclude", level: "C2", definition: "To include something beforehand." }
  ]
},
{
  word: "indicate",
  level: "B2",
  derivatives: [
    { word: "indication", level: "B2", definition: "A sign or piece of information that suggests something." },
    { word: "indicative", level: "C1", definition: "Serving as a sign or indication of something." },
    { word: "indicatively", level: "C2", definition: "In a manner that serves as a sign or indication." },
    { word: "indicated", level: "B2", definition: "Pointed out or made clear." },
    { word: "indicating", level: "B2", definition: "The act of pointing out or showing something." },
    { word: "indicatability", level: "C2", definition: "The quality of being able to be indicated or suggested." },
    { word: "misindicate", level: "C2", definition: "To indicate something incorrectly or misleadingly." },
    { word: "misindication", level: "C2", definition: "An incorrect or misleading indication." },
    { word: "unindicated", level: "C2", definition: "Not indicated; not suggested or pointed out." }
  ]
},
{
  word: "influence",
  level: "B2",
  derivatives: [
    { word: "influential", level: "B2", definition: "Having great influence on someone or something." },
    { word: "influenceable", level: "C2", definition: "Capable of being influenced or affected." },
    { word: "influencing", level: "B2", definition: "The act of having an effect on the character or behavior of someone or something." },
    { word: "influenced", level: "B2", definition: "Affected by someone or something." },
    { word: "influencer", level: "C1", definition: "A person who has the power to affect the opinions or behavior of others." },
    { word: "uninfluential", level: "C2", definition: "Not having much influence or effect." },
    { word: "uninfluentially", level: "C2", definition: "In a manner lacking influence or effect." },
    { word: "influentially", level: "C2", definition: "In a manner that has great influence or effect." }
  ]
},
{
  word: "inform",
  level: "B1",
  derivatives: [
    { word: "information", level: "B1", definition: "Facts provided or learned about something or someone." },
    { word: "informative", level: "B1", definition: "Providing useful or interesting information." },
    { word: "informed", level: "B1", definition: "Having or showing knowledge of a particular subject or situation." },
    { word: "informing", level: "B1", definition: "The act of giving someone facts or information." },
    { word: "informant", level: "C1", definition: "A person who gives information to another, especially a journalist or police." },
    { word: "informer", level: "C1", definition: "A person who informs; especially someone who informs secretly or betrays." },
    { word: "misinform", level: "C2", definition: "To give someone false or incorrect information." },
    { word: "misinformation", level: "B2", definition: "False or inaccurate information, especially that which is deliberately intended to deceive." },
    { word: "misinformed", level: "C2", definition: "Having been given incorrect or misleading information." },
    { word: "uninformed", level: "C2", definition: "Not having or showing awareness or knowledge of a particular subject or situation." }
  ]
},
{
  word: "initiate",
  level: "B2",
  derivatives: [
    { word: "initiation", level: "B2", definition: "The action of beginning something or introducing someone to a field or activity." },
    { word: "initiative", level: "B2", definition: "The ability to assess and initiate things independently; a new plan or process to achieve something." },
    { word: "initiator", level: "C1", definition: "A person or thing that starts something." },
    { word: "initiated", level: "B2", definition: "Having been begun or introduced." },
    { word: "initiating", level: "B2", definition: "The act of beginning or introducing something." },
    { word: "reinitiate", level: "C2", definition: "To start something again, especially a process or action." },
    { word: "reinitiation", level: "C2", definition: "The act of starting something again." },
    { word: "uninitiated", level: "C1", definition: "Not yet introduced to a particular activity or field; lacking experience." }
  ]
},
{
  word: "innovate",
  level: "C1",
  derivatives: [
    { word: "innovation", level: "C1", definition: "The introduction of something new, especially a new idea, method, or device." },
    { word: "innovator", level: "C1", definition: "A person or organization that introduces new methods, ideas, or products." },
    { word: "innovative", level: "C1", definition: "Featuring new methods; advanced and original." },
    { word: "innovatively", level: "C2", definition: "In a manner that introduces or uses new methods or ideas." },
    { word: "innovated", level: "C1", definition: "Introduced something new; changed or created by innovation." },
    { word: "innovating", level: "C1", definition: "The act of introducing new ideas, methods, or products." },
    { word: "reinnovate", level: "C2", definition: "To innovate again or renew an innovation." },
    { word: "reinnovation", level: "C2", definition: "The act of innovating again or renewing innovation." },
    { word: "uninnovative", level: "C2", definition: "Not introducing anything new; lacking innovation." }
  ]
},
{
  word: "inspect",
  level: "B2",
  derivatives: [
    { word: "inspection", level: "B2", definition: "The act of examining something carefully." },
    { word: "inspector", level: "B2", definition: "A person who examines or reviews something, especially an official." },
    { word: "inspectable", level: "C2", definition: "Capable of being inspected or examined." },
    { word: "inspected", level: "B2", definition: "Examined carefully; reviewed." },
    { word: "inspecting", level: "B2", definition: "The act of examining something carefully." },
    { word: "reinspect", level: "C2", definition: "To inspect something again or for a second time." },
    { word: "reinspection", level: "C2", definition: "The act of inspecting something again." },
    { word: "uninspected", level: "C2", definition: "Not yet examined or reviewed." }
  ]
},
{
  word: "inspire",
  level: "B2",
  derivatives: [
    { word: "inspiration", level: "B2", definition: "The process of being mentally stimulated to do or feel something, especially something creative." },
    { word: "inspirational", level: "C1", definition: "Providing or showing creative or motivational inspiration." },
    { word: "inspired", level: "B2", definition: "Filled with the urge or ability to do something creative or admirable." },
    { word: "inspiring", level: "B2", definition: "Having the effect of inspiring someone; motivating." },
    { word: "uninspired", level: "C2", definition: "Not influenced by inspiration; lacking creativity or motivation." },
    { word: "uninspiring", level: "C2", definition: "Failing to stimulate or excite." },
    { word: "inspirationally", level: "C2", definition: "In a manner that provides motivation or creative stimulation." },
    { word: "inspirable", level: "C2", definition: "Capable of being inspired." },
    { word: "reinspire", level: "C2", definition: "To inspire again or renew motivation." },
    { word: "reinspiration", level: "C2", definition: "The act of inspiring again or renewing motivation." }
  ]
},
{
  word: "institute",
  level: "B2",
  derivatives: [
    { word: "institution", level: "B2", definition: "An organization founded for a religious, educational, professional, or social purpose." },
    { word: "institutional", level: "B2", definition: "Relating to an established organization or institution." },
    { word: "institutionalize", level: "C2", definition: "To place or maintain in an institution; to make something an established part of a system." },
    { word: "institutionalized", level: "C2", definition: "Established as part of a structured organization or system; adapted to norms." },
    { word: "institutionalization", level: "C2", definition: "The process of creating or becoming an institution or of establishing something as a norm." },
    { word: "institute (noun)", level: "B2", definition: "An organization for the promotion of a particular cause or program." },
    { word: "instituted", level: "B2", definition: "Established or set up (a program, system, or institution)." },
    { word: "instituting", level: "B2", definition: "The act of establishing or setting up a program, system, or institution." },
    { word: "reinstitute", level: "C2", definition: "To institute or establish again." },
    { word: "reinstitution", level: "C2", definition: "The act of establishing something again as an institution." },
    { word: "uninstitutional", level: "C2", definition: "Not related to or part of any established institution." }
  ]
},
{
  word: "integrate",
  level: "B2",
  derivatives: [
    { word: "integration", level: "B2", definition: "The action or process of combining two or more things to create a whole." },
    { word: "integrative", level: "C1", definition: "Serving to integrate or bring together." },
    { word: "integratively", level: "C2", definition: "In a manner that unites or brings together different parts." },
    { word: "integrated", level: "B2", definition: "Combined into a whole; made part of a larger unit." },
    { word: "integrating", level: "B2", definition: "The act of combining parts into a whole." },
    { word: "disintegrate", level: "C1", definition: "To break up into small parts, typically as the result of impact or decay." },
    { word: "disintegration", level: "C2", definition: "The process of falling apart or breaking up into fragments." },
    { word: "reintegrate", level: "C2", definition: "To restore to a unified whole; to integrate again." },
    { word: "reintegration", level: "C2", definition: "The act of restoring something to a unified state." }
  ]
},
{
  word: "intend",
  level: "B2",
  derivatives: [
    { word: "intended", level: "B2", definition: "Planned or meant; having a particular purpose." },
    { word: "intending", level: "B2", definition: "The act of planning or intending something." },
    { word: "intention", level: "B2", definition: "Something that you plan to do or achieve; a purpose or aim." },
    { word: "intentional", level: "B2", definition: "Done on purpose; deliberate." },
    { word: "intentionally", level: "B2", definition: "In a deliberate or planned manner." },
    { word: "unintended", level: "C1", definition: "Not planned or meant; accidental." },
    { word: "unintentionally", level: "C1", definition: "In an unplanned or accidental manner." }
  ]
},
{
  word: "interact",
  level: "C1",
  derivatives: [
    { word: "interaction", level: "B2", definition: "Reciprocal action or influence between two or more people or things." },
    { word: "interactivity", level: "C1", definition: "The quality of being interactive; involving communication between people and computers." },
    { word: "interactive", level: "B2", definition: "Allowing a two-way flow of information; responding to a user's input." },
    { word: "interactively", level: "C2", definition: "In a manner that allows two-way communication or participation." },
    { word: "interacted", level: "B2", definition: "Engaged in communication or reciprocal action with someone or something." },
    { word: "interacting", level: "B2", definition: "Engaging in reciprocal action or communication." }
  ]
},
{
  word: "interpret",
  level: "B2",
  derivatives: [
    { word: "interpretation", level: "B2", definition: "The action of explaining the meaning of something." },
    { word: "interpretative", level: "C1", definition: "Relating to the act of interpreting or explaining." },
    { word: "interpretable", level: "C2", definition: "Able to be explained or understood in a particular way." },
    { word: "interpreted", level: "B2", definition: "Explained or understood in a particular way." },
    { word: "interpreting", level: "B2", definition: "The act of translating spoken language or explaining meaning." },
    { word: "misinterpret", level: "C1", definition: "To interpret something wrongly; to misunderstand." },
    { word: "misinterpretation", level: "C2", definition: "The act of interpreting something incorrectly." }
  ]
},
{
  word: "introduce",
  level: "B2",
  derivatives: [
    { word: "introduction", level: "B2", definition: "The act of bringing something into use or operation for the first time." },
    { word: "introductory", level: "B2", definition: "Serving as an introduction; beginning." },
    { word: "introduced", level: "B2", definition: "Brought into notice or use for the first time." },
    { word: "introducing", level: "B2", definition: "The act of making someone known or presenting something for the first time." },
    { word: "reintroduce", level: "C1", definition: "To introduce something again that was in use previously." },
    { word: "reintroduction", level: "C2", definition: "The act of bringing something back into use or operation." }
  ]
},
{
  word: "invest",
  level: "B2",
  derivatives: [
    { word: "investment", level: "B2", definition: "The action of investing money for profit or material result." },
    { word: "investor", level: "B2", definition: "A person who allocates capital with the expectation of a financial return." },
    { word: "invested", level: "B2", definition: "Allocated or committed money or resources in order to gain a profit or benefit." },
    { word: "investing", level: "B2", definition: "The act of putting money into financial schemes or shares with the expectation of future profit." },
    { word: "reinvest", level: "C1", definition: "To invest again, especially investments from previous earnings." },
    { word: "reinvestment", level: "C2", definition: "The action of using returns from an investment to make additional investments." }
  ]
},
{
  word: "investigate",
  level: "B2",
  derivatives: [
    { word: "investigation", level: "B2", definition: "The action of thoroughly examining or inquiring into something." },
    { word: "investigative", level: "C1", definition: "Intended to discover facts or information; investigative." },
    { word: "investigatively", level: "C2", definition: "In a manner concerned with inquiry and examination." },
    { word: "investigated", level: "B2", definition: "Examined or inquired into thoroughly." },
    { word: "investigating", level: "B2", definition: "Conducting a systematic or formal inquiry to discover and examine facts." },
    { word: "reinvestigate", level: "C2", definition: "To investigate again or revisit an inquiry." },
    { word: "reinvestigation", level: "C2", definition: "The act of investigating something again." }
  ]
},
{
  word: "involve",
  level: "B2",
  derivatives: [
    { word: "involvement", level: "B2", definition: "The state of being included or engaged in something." },
    { word: "involved", level: "B2", definition: "Included in something or having a part in an activity." },
    { word: "involving", level: "B2", definition: "Including or containing as a necessary part or result." },
    { word: "uninvolved", level: "C1", definition: "Not participating or engaging; detached." }
  ]
},
{
  word: "isolate",
  level: "B2",
  derivatives: [
    { word: "isolation", level: "B2", definition: "The process or fact of separating something from others." },
    { word: "isolated", level: "B2", definition: "Far away from other places, buildings, or people; secluded." },
    { word: "isolating", level: "B2", definition: "Separating something or someone from others." },
    { word: "isolative", level: "C1", definition: "Tending to isolate or set apart." },
    { word: "isolationist", level: "C2", definition: "Someone who favors a policy of isolating one's country from foreign affairs." },
    { word: "re-isolate", level: "C1", definition: "To isolate again after having been integrated." }
  ]
},
{
  word: "justify",
  level: "B2",
  derivatives: [
    { word: "justification", level: "B2", definition: "The action of showing something to be right or reasonable." },
    { word: "justified", level: "B2", definition: "Having good reason; proven to be right or reasonable." },
    { word: "justifying", level: "B2", definition: "Providing a reason or explanation for something." },
    { word: "justifiable", level: "C1", definition: "Able to be shown to be right or reasonable." },
    { word: "justifiably", level: "C2", definition: "In a way that can be shown to be right or reasonable." },
    { word: "unjustified", level: "C1", definition: "Not having a good reason; not justified." },
    { word: "misjustify", level: "C2", definition: "To justify incorrectly or wrongly." }
  ]
},
{
  word: "maintain",
  level: "B1",
  derivatives: [
    { word: "maintenance", level: "B1", definition: "The process of preserving or keeping something in good condition." },
    { word: "maintained", level: "B1", definition: "Kept in an existing state; preserved." },
    { word: "maintaining", level: "B1", definition: "Keeping something in a particular condition or state." },
    { word: "maintainable", level: "C2", definition: "Capable of being maintained or upheld." }
  ]
},
{
  word: "manage",
  level: "B1",
  derivatives: [
    { word: "management", level: "B1", definition: "The process of dealing with or controlling things or people." },
    { word: "manager", level: "B1", definition: "A person responsible for controlling or administering an organization or group of staff." },
    { word: "manageable", level: "B2", definition: "Able to be managed or controlled easily." },
    { word: "manageably", level: "C2", definition: "In a manner that is able to be managed or handled easily." },
    { word: "managing", level: "B1", definition: "Being in charge of or running something." },
    { word: "mismanage", level: "C1", definition: "To manage something badly or wrongly." },
    { word: "mismanagement", level: "C2", definition: "The process of managing something badly or wrongly." }
  ]
},
{
  word: "measure",
  level: "B1",
  derivatives: [
    { word: "measurement", level: "B1", definition: "The size, length, or amount of something." },
    { word: "measurable", level: "B2", definition: "Able to be measured or quantified." },
    { word: "measurably", level: "C2", definition: "In a way that can be measured or quantified." },
    { word: "measured", level: "B1", definition: "Marked off in units; determined by measurement." },
    { word: "measuring", level: "B1", definition: "The act of finding the size, length, or amount of something." },
    { word: "mis-measure", level: "C2", definition: "To measure something incorrectly." }
  ]
},
{
  word: "minimize",
  level: "B2",
  derivatives: [
    { word: "minimization", level: "C1", definition: "The action of reducing something to the smallest possible amount or degree." },
    { word: "minimized", level: "B2", definition: "Reduced to the smallest possible size or amount." },
    { word: "minimizing", level: "B2", definition: "The act of making something as small as possible." },
    { word: "minimally", level: "B2", definition: "To the smallest extent or degree." },
    { word: "minimal", level: "B1", definition: "Of a minimum amount; very small or slight." },
    { word: "minimalist", level: "C1", definition: "A person who advocates for minimalism in art, design, or lifestyle." },
    { word: "miniscule", level: "C2", definition: "Extremely small; minute." },
    { word: "maximise", level: "B2", definition: "To make as large or great as possible." },
    { word: "maximization", level: "C1", definition: "The act of making something as large or great as possible." }
  ]
},
{
  word: "monitor",
  level: "B2",
  derivatives: [
    { word: "monitoring", level: "B2", definition: "The act of observing and checking the progress or quality of something over a period of time." },
    { word: "monitored", level: "B2", definition: "Observed or checked regularly to determine progress or quality." },
    { word: "monitorable", level: "C1", definition: "Able to be observed or checked periodically." },
    { word: "monitorably", level: "C2", definition: "In a manner that allows for observation or checking." },
    { word: "monitorial", level: "C2", definition: "Relating to or serving as a monitor or warning system." }
  ]
},
{
  word: "motivate",
  level: "B2",
  derivatives: [
    { word: "motivation", level: "B2", definition: "The reason or reasons one has for acting or behaving in a particular way." },
    { word: "motivated", level: "B2", definition: "Provided with a motive or given incentive to do something." },
    { word: "motivating", level: "B2", definition: "Providing someone with a reason or incentive to act." },
    { word: "motivational", level: "C1", definition: "Relating to the reason or incentive behind behavior." },
    { word: "motivationally", level: "C2", definition: "In a manner that relates to motivation or encouragement." },
    { word: "demotivate", level: "C1", definition: "To reduce or destroy the motivation of someone." },
    { word: "demotivated", level: "C2", definition: "Having lost or reduced motivation." },
    { word: "demotivation", level: "C2", definition: "The process of reducing or destroying someone's motivation." }
  ]
},
{
  word: "obtain",
  level: "B2",
  derivatives: [
    { word: "obtainable", level: "B2", definition: "Able to be obtained; accessible." },
    { word: "obtained", level: "B2", definition: "Acquired or gotten something." },
    { word: "obtaining", level: "B2", definition: "The act of acquiring or getting something." },
    { word: "unobtainable", level: "C2", definition: "Not able to be obtained; inaccessible." }
  ]
},
{
  word: "operate",
  level: "B1",
  derivatives: [
    { word: "operation", level: "B1", definition: "The fact or condition of functioning or being active." },
    { word: "operational", level: "B2", definition: "In working order; ready for use." },
    { word: "operatively", level: "C2", definition: "In a manner that has an effect; functionally." },
    { word: "operator", level: "B2", definition: "A person who operates equipment or carries out a process." },
    { word: "operable", level: "C1", definition: "Able to be used or operated; capable of working." },
    { word: "operating", level: "B1", definition: "Performing a function or action; working." },
    { word: "inoperate", level: "C2", definition: "Not functioning or not in operation." },
    { word: "inoperable", level: "C1", definition: "Not able to work or function; broken." }
  ]
},
{
  word: "organise",
  level: "B1",
  derivatives: [
    { word: "organization", level: "B1", definition: "An organized body of people with a particular purpose, especially a business or society." },
    { word: "organizational", level: "B2", definition: "Relating to the way in which an organization is structured or managed." },
    { word: "organizer", level: "B2", definition: "A person who organizes activities or events." },
    { word: "organized", level: "B2", definition: "Arranged in a systematic way; well planned." },
    { word: "organizing", level: "B2", definition: "The act of arranging or structuring things in an orderly way." },
    { word: "reorganize", level: "C1", definition: "To change the structure or arrangement of something; to organize again." },
    { word: "reorganization", level: "C2", definition: "The act of changing the structure or arrangement of something again." }
  ]
},
{
  word: "originate",
  level: "B2",
  derivatives: [
    { word: "original", level: "B1", definition: "Present or existing from the beginning; first or earliest." },
    { word: "originality", level: "B2", definition: "The quality of being novel or unusual; freshness." },
    { word: "originally", level: "B2", definition: "At first; in the beginning." },
    { word: "origination", level: "C1", definition: "The action of beginning or creating something." },
    { word: "origin", level: "B2", definition: "The point at which something begins; the source or root." },
    { word: "reoriginate", level: "C2", definition: "To begin again from the source; to create anew." }
  ]
},
{
  word: "participate",
  level: "B1",
  derivatives: [
    { word: "participation", level: "B1", definition: "The action of taking part in something." },
    { word: "participative", level: "C1", definition: "Relating to or encouraging participation." },
    { word: "participant", level: "B2", definition: "A person who takes part in something." },
    { word: "participating", level: "B1", definition: "Taking part in an activity." },
    { word: "reparticipate", level: "C2", definition: "To take part again in something." }
  ]
},
{
  word: "perform",
  level: "B1",
  derivatives: [
    { word: "performance", level: "B1", definition: "The act of performing a task or function; a presentation in front of an audience." },
    { word: "performer", level: "B2", definition: "A person who entertains an audience by acting, singing, or dancing." },
    { word: "performing", level: "B1", definition: "Presenting a form of entertainment; carrying out a task or function." },
    { word: "performable", level: "C2", definition: "Able to be performed or executed." },
    { word: "overperform", level: "C2", definition: "To perform better than expected or required." },
    { word: "underperform", level: "C2", definition: "To perform worse than expected or required." }
  ]
},
{
  word: "permit",
  level: "B2",
  derivatives: [
    { word: "permission", level: "B2", definition: "The approval to do something." },
    { word: "permissive", level: "C1", definition: "Allowing or characterized by great or excessive freedom of behavior." },
    { word: "permissively", level: "C2", definition: "In a manner that allows or grants permission easily." },
    { word: "permitted", level: "B2", definition: "Allowed; given permission." },
    { word: "permitting", level: "B2", definition: "The act of granting permission." },
    { word: "impermissible", level: "C2", definition: "Not permitted; disallowed." },
    { word: "impermissibly", level: "C2", definition: "In a manner that is not allowed or permitted." }
  ]
},
{
  word: "persuade",
  level: "B2",
  derivatives: [
    { word: "persuasion", level: "B2", definition: "The action of convincing someone to do or believe something." },
    { word: "persuasive", level: "B2", definition: "Good at persuading someone to do or believe something." },
    { word: "persuasively", level: "C1", definition: "In a convincing manner." },
    { word: "persuaded", level: "B2", definition: "Convinced to do or believe something." },
    { word: "persuading", level: "B2", definition: "The act of convincing someone to do or believe something." },
    { word: "unpersuaded", level: "C2", definition: "Not convinced; still skeptical." }
  ]
},
{
  word: "plan",
  level: "A2",
  derivatives: [
    { word: "planning", level: "B1", definition: "The process of making plans for something." },
    { word: "planned", level: "A2", definition: "Arranged or decided beforehand." },
    { word: "planner", level: "B2", definition: "A person who makes plans, especially for events or projects." },
    { word: "planless", level: "C1", definition: "Without a plan; disorganized." },
    { word: "planful", level: "C2", definition: "Carefully planned or thought out." },
    { word: "planningly", level: "C2", definition: "In a manner that shows careful planning." }
  ]
},
{
  word: "predict",
  level: "B2",
  derivatives: [
    { word: "prediction", level: "B2", definition: "A statement about what will happen in the future." },
    { word: "predictable", level: "B2", definition: "Able to be predicted or foreseen." },
    { word: "predictably", level: "C1", definition: "In a manner that can be predicted or foreseen." },
    { word: "predicted", level: "B2", definition: "Foretold or declared in advance." },
    { word: "predicting", level: "B2", definition: "The act of making a prediction about the future." },
    { word: "unpredictable", level: "C1", definition: "Not able to be predicted; changeable or uncertain." },
    { word: "unpredictably", level: "C2", definition: "In a manner that cannot be predicted." }
  ]
},
{
  word: "prepare",
  level: "B1",
  derivatives: [
    { word: "preparation", level: "B1", definition: "The action of making ready or being made ready for use or consideration." },
    { word: "prepared", level: "B1", definition: "Made ready in advance for a particular purpose or event." },
    { word: "preparing", level: "B1", definition: "The act of making something ready beforehand." },
    { word: "unprepared", level: "C1", definition: "Not ready or equipped for something." },
    { word: "preparatory", level: "C1", definition: "Serving as or carrying out preparation for something." }
  ]
},
{
  word: "prevent",
  level: "B1",
  derivatives: [
    { word: "prevention", level: "B1", definition: "The action of stopping something from happening or arising." },
    { word: "preventive", level: "B2", definition: "Designed to keep something undesirable such as illness or harm from occurring." },
    { word: "preventively", level: "C1", definition: "In a manner intended to prevent something." },
    { word: "prevented", level: "B1", definition: "Kept from happening; stopped something from occurring." },
    { word: "preventing", level: "B1", definition: "The act of stopping something from happening." },
    { word: "unpreventable", level: "C2", definition: "Impossible to stop from happening." }
  ]
},
{
  word: "process",
  level: "B1",
  derivatives: [
    { word: "processing", level: "B1", definition: "Performing a series of mechanical or chemical operations on something." },
    { word: "processed", level: "B1", definition: "Subjected to a series of operations to change or preserve it." },
    { word: "processor", level: "C1", definition: "A person or machine that processes something." },
    { word: "processable", level: "C2", definition: "Able to be processed or treated." }
  ]
},
{
  word: "produce",
  level: "A2",
  derivatives: [
    { word: "production", level: "B1", definition: "The action of making or manufacturing from components." },
    { word: "productive", level: "B2", definition: "Producing or able to produce large amounts of goods or results." },
    { word: "productively", level: "C2", definition: "In a manner that produces or yields significant results." },
    { word: "producer", level: "B2", definition: "A person or company that makes goods for sale." },
    { word: "produced", level: "A2", definition: "Made or created by physical or mental skill." },
    { word: "producing", level: "A2", definition: "The act of making or manufacturing something." },
    { word: "overproduce", level: "C2", definition: "To produce more of something than is needed." },
    { word: "underproduce", level: "C2", definition: "To produce less of something than is required or expected." }
  ]
},
{
  word: "promote",
  level: "B2",
  derivatives: [
    { word: "promotion", level: "B2", definition: "The act of raising someone to a higher rank or position." },
    { word: "promotional", level: "B2", definition: "Relating to the publicizing of a product or service." },
    { word: "promoted", level: "B2", definition: "Raised to a higher position or rank." },
    { word: "promoting", level: "B2", definition: "The act of encouraging the growth or acceptance of something." },
    { word: "promotable", level: "C1", definition: "Able to be promoted to a higher position." },
    { word: "demote", level: "C1", definition: "To relegate to a lower rank or position." },
    { word: "demotion", level: "C2", definition: "The act of lowering someone in rank or position." }
  ]
},
{
  word: "provide",
  level: "B1",
  derivatives: [
    { word: "provision", level: "B2", definition: "The action of providing or supplying something." },
    { word: "provider", level: "B2", definition: "A person or organization that supplies something." },
    { word: "provided", level: "B1", definition: "Supplied or made available." },
    { word: "providing", level: "B1", definition: "The act of making something available for use." },
    { word: "provisional", level: "C1", definition: "Arranged or existing for the present, possibly to be changed later." },
    { word: "provisionally", level: "C2", definition: "In a manner that is temporary or provisional." }
  ]
},
{
  word: "publish",
  level: "B1",
  derivatives: [
    { word: "publication", level: "B1", definition: "The act of making content available to the public." },
    { word: "publisher", level: "B1", definition: "A person or company that produces and distributes books or other content." },
    { word: "published", level: "B1", definition: "Made available for public view or sale." },
    { word: "publishing", level: "B1", definition: "The act of producing and releasing literature, music, or information." },
    { word: "unpublished", level: "C1", definition: "Not made available to the public." }
  ]
},
{
  word: "pursue",
  level: "B2",
  derivatives: [
    { word: "pursuit", level: "B2", definition: "The action of following or chasing someone or something." },
    { word: "pursued", level: "B2", definition: "Followed or chased after someone or something." },
    { word: "pursuing", level: "B2", definition: "Engaging in the chasing or following of someone or something." },
    { word: "pursuable", level: "C1", definition: "Able to be pursued or chased." }
  ]
},
{
  word: "react",
  level: "B2",
  derivatives: [
    { word: "reaction", level: "B2", definition: "An action performed or feeling experienced in response to a situation." },
    { word: "reactive", level: "B2", definition: "Showing a response to a stimulus." },
    { word: "reactively", level: "C1", definition: "In a manner that responds to a stimulus." },
    { word: "reacted", level: "B2", definition: "Responded to a stimulus or situation." },
    { word: "reacting", level: "B2", definition: "Responding to a stimulus or situation." },
    { word: "overreact", level: "C1", definition: "To respond more emotionally or forcibly than is justified." },
    { word: "overreaction", level: "C2", definition: "An excessive or exaggerated response to a stimulus or situation." },
    { word: "underreact", level: "C2", definition: "To respond less than necessary or expected." }
  ]
},
{
  word: "realise",
  level: "B1",
  derivatives: [
    { word: "realization", level: "B2", definition: "The act of becoming fully aware of something as a fact." },
    { word: "realize", level: "B1", definition: "To become fully aware of something as a fact; to bring into real existence." },
    { word: "realized", level: "B1", definition: "Brought into real existence or understood fully." },
    { word: "realizing", level: "B1", definition: "Becoming fully aware of something as a fact." },
    { word: "unrealized", level: "C1", definition: "Not brought into real existence or not yet achieved." }
  ]
},
{
  word: "recall",
  level: "B1",
  derivatives: [
    { word: "recallable", level: "C1", definition: "Able to be remembered or recalled." },
    { word: "recalled", level: "B1", definition: "Remembered something from the past." },
    { word: "recalling", level: "B1", definition: "The act of remembering something." },
    { word: "irrecoverable", level: "C2", definition: "Not able to be remembered or regained; impossible to recover." },
    { word: "misrecall", level: "C2", definition: "To recall something incorrectly." }
  ]
},
{
  word: "receive",
  level: "A2",
  derivatives: [
    { word: "reception", level: "B1", definition: "The act or skill of receiving something sent, given, or inflicted." },
    { word: "recipient", level: "B2", definition: "A person who receives something." },
    { word: "receivable", level: "C1", definition: "Able to be received; capable of being accepted or taken in." },
    { word: "received", level: "A2", definition: "Taken or accepted something that was given or sent." },
    { word: "receiving", level: "A2", definition: "The act of getting or accepting something that is sent or given." },
    { word: "misreceive", level: "C2", definition: "To receive something incorrectly; to misunderstand what one receives." }
  ]
},
{
  word: "record",
  level: "A2",
  derivatives: [
    { word: "recording", level: "B1", definition: "The act or process of capturing data or sound for later playback or reference." },
    { word: "recorded", level: "A2", definition: "Captured or preserved data, sound, or images for future reference." },
    { word: "recorder", level: "B2", definition: "A device or person that records audio, video, or data." },
    { word: "recordable", level: "C1", definition: "Able to be recorded or captured." },
    { word: "unrecorded", level: "C2", definition: "Not captured or preserved as a record." }
  ]
},
{
  word: "reduce",
  level: "B1",
  derivatives: [
    { word: "reduction", level: "B1", definition: "The action of making something smaller or less in amount, degree, or size." },
    { word: "reducer", level: "C1", definition: "A person or thing that reduces the size, amount, or degree of something." },
    { word: "reducible", level: "C2", definition: "Capable of being reduced or simplified." },
    { word: "reduced", level: "B1", definition: "Made smaller or less in amount, degree, or size." },
    { word: "reducing", level: "B1", definition: "The act of making something smaller or less." },
    { word: "under-reduce", level: "C2", definition: "To reduce less than required or expected." },
    { word: "over-reduce", level: "C2", definition: "To reduce more than required or expected." }
  ]
},
{
  word: "reflect",
  level: "B2",
  derivatives: [
    { word: "reflection", level: "B2", definition: "The throwing back by a body or surface of light, sound, or heat without absorbing it." },
    { word: "reflective", level: "B2", definition: "Providing a reflection; thoughtful or contemplative." },
    { word: "reflectively", level: "C2", definition: "In a reflective or thoughtful manner." },
    { word: "reflected", level: "B2", definition: "Thrown back (light, heat, sound) without absorbing it; thought about deeply." },
    { word: "reflecting", level: "B2", definition: "Throwing back (light, heat, sound) or thinking deeply about something." },
    { word: "misreflect", level: "C2", definition: "To reflect incorrectly or inappropriately." }
  ]
},
{
  word: "reform",
  level: "B2",
  derivatives: [
    { word: "reformation", level: "B2", definition: "The action or process of reforming an institution or practice." },
    { word: "reformed", level: "B2", definition: "Made better by correcting faults or eliminating abuses." },
    { word: "reforming", level: "B2", definition: "The act of making changes to improve something." },
    { word: "reformative", level: "C1", definition: "Serving or intended to reform or improve." },
    { word: "deform", level: "C2", definition: "To spoil the shape or form of something; to disfigure." },
    { word: "deformation", level: "C2", definition: "The action or process of distorting the shape or form of something." }
  ]
},
{
  word: "regulate",
  level: "B2",
  derivatives: [
    { word: "regulation", level: "B2", definition: "A rule or directive made and maintained by an authority." },
    { word: "regulatory", level: "C1", definition: "Relating to or concerned with regulation." },
    { word: "regulator", level: "C1", definition: "A person or body that regulates an activity, organization, or system." },
    { word: "regulated", level: "B2", definition: "Controlled or governed by rules or regulations." },
    { word: "regulating", level: "B2", definition: "The act of controlling or maintaining something by a rule or principle." },
    { word: "deregulate", level: "C1", definition: "To remove regulations or restrictions on an industry or business." },
    { word: "deregulation", level: "C2", definition: "The removal or reduction of state regulations, typically in the economic sphere." }
  ]
},
{
  word: "reinforce",
  level: "B2",
  derivatives: [
    { word: "reinforcement", level: "B2", definition: "The action or process of strengthening or supporting with additional personnel or material." },
    { word: "reinforced", level: "B2", definition: "Strengthened with additional support, materials, or personnel." },
    { word: "reinforcing", level: "B2", definition: "The act of strengthening or supporting." },
    { word: "reinforcible", level: "C2", definition: "Able to be strengthened or supported further." },
    { word: "overreinforce", level: "C2", definition: "To strengthen or support excessively, beyond necessity." }
  ]
},
{
  word: "relate",
  level: "B1",
  derivatives: [
    { word: "relation", level: "B1", definition: "The way in which two or more concepts, objects, or people are connected." },
    { word: "relationship", level: "B1", definition: "The way in which two or more people or things are connected." },
    { word: "related", level: "B1", definition: "Connected in some way; belonging to the same group." },
    { word: "relating", level: "B1", definition: "Making or showing a connection between two or more things." },
    { word: "unrelated", level: "C1", definition: "Not connected by blood or marriage; not associated in meaning." }
  ]
},
{
  word: "release",
  level: "B1",
  derivatives: [
    { word: "release", level: "B1", definition: "The act of allowing or enabling something to be available or free." },
    { word: "released", level: "B1", definition: "Allowed to be available to the public or freed from confinement." },
    { word: "releasing", level: "B1", definition: "The act of setting something free or making it available." },
    { word: "releasable", level: "C1", definition: "Capable of being released or set free." },
    { word: "unreleased", level: "C1", definition: "Not officially released or made available to the public." }
  ]
},
{
  word: "rely",
  level: "B1",
  derivatives: [
    { word: "reliability", level: "B2", definition: "The quality of being trustworthy or of performing consistently well." },
    { word: "reliable", level: "B2", definition: "Consistently good in quality or performance; able to be trusted." },
    { word: "reliably", level: "C1", definition: "In a manner that can be trusted or counted on." },
    { word: "relied", level: "B1", definition: "Depended on or trusted in someone or something." },
    { word: "relying", level: "B1", definition: "Depending on or trusting in someone or something." },
    { word: "unreliable", level: "C1", definition: "Not able to be relied upon; not trustworthy or dependable." }
  ]
},
{
  word: "remain",
  level: "B1",
  derivatives: [
    { word: "remains", level: "B1", definition: "What is left after other parts are gone or used." },
    { word: "remaining", level: "B1", definition: "What is left or still present after other parts have gone." },
    { word: "remained", level: "B1", definition: "Continued to exist, especially when others have changed." },
    { word: "remainder", level: "B2", definition: "The part, number, or quantity that is left after the greater part has been used or taken away." }
  ]
},
{
  word: "remove",
  level: "B1",
  derivatives: [
    { word: "removal", level: "B1", definition: "The act of taking something away or off from the position occupied." },
    { word: "removed", level: "B1", definition: "Taken away from a place; distant or aloof in manner." },
    { word: "removing", level: "B1", definition: "The act of taking something away or off from its position." },
    { word: "removable", level: "C1", definition: "Able to be removed or taken away from where it is." },
    { word: "unremovable", level: "C2", definition: "Not able to be removed; fixed or permanent." }
  ]
},
{
  word: "render",
  level: "B2",
  derivatives: [
    { word: "rendering", level: "B2", definition: "The act of providing or giving (a service, help, etc.)." },
    { word: "rendered", level: "B2", definition: "Caused to be or become; provided with or gave." },
    { word: "rendor", level: "C2", definition: "A person who renders or gives." },
    { word: "renderable", level: "C2", definition: "Capable of being rendered or provided." }
  ]
},
{
  word: "replace",
  level: "B2",
  derivatives: [
    { word: "replacement", level: "B2", definition: "The act of replacing something that is broken, lost, or outdated with something new." },
    { word: "replaced", level: "B2", definition: "Put something new or different in the place of something else." },
    { word: "replacing", level: "B2", definition: "The act of substituting or putting something new in place of something else." },
    { word: "replaceable", level: "C1", definition: "Able to be replaced by something similar or equivalent." },
    { word: "irreplacable", level: "C2", definition: "Not able to be replaced; unique or irreplaceable." }
  ]
},
{
  word: "represent",
  level: "B2",
  derivatives: [
    { word: "representation", level: "B2", definition: "The action of speaking or acting on behalf of someone or the state of being so represented." },
    { word: "representative", level: "B2", definition: "A person chosen or appointed to act or speak for another or others." },
    { word: "representational", level: "C1", definition: "Depicting the appearance of things; realistic." },
    { word: "representationally", level: "C2", definition: "In a manner that depicts the appearance of things accurately." },
    { word: "represented", level: "B2", definition: "Brought to mind by a picture, description, or symbol; acted for or in behalf of." },
    { word: "representing", level: "B2", definition: "Serving as a symbol or embodiment; acting on behalf of." }
  ]
},
{
  word: "require",
  level: "B2",
  derivatives: [
    { word: "requirement", level: "B2", definition: "A thing that is demanded or compulsory." },
    { word: "required", level: "B2", definition: "Officially compulsory, or otherwise considered essential; needed." },
    { word: "requiring", level: "B2", definition: "The act of demanding something as necessary." },
    { word: "requisite", level: "B2", definition: "Made necessary by particular circumstances or regulations." },
    { word: "requisitely", level: "C2", definition: "In a manner that is necessary or essential." }
  ]
},
{
  word: "research",
  level: "B2",
  derivatives: [
    { word: "researcher", level: "B2", definition: "A person who conducts research, especially academically." },
    { word: "researched", level: "B2", definition: "Subjected to systematic and thorough investigation." },
    { word: "researching", level: "B2", definition: "The act of carrying out research or systematic investigation." },
    { word: "researchable", level: "C1", definition: "Capable of being researched or investigated." }
  ]
},
{
  word: "respond",
  level: "B1",
  derivatives: [
    { word: "response", level: "B1", definition: "A verbal or written answer; a reaction to something." },
    { word: "responsive", level: "B2", definition: "Reacting quickly and positively; willing to help or listen." },
    { word: "responsively", level: "C2", definition: "In a manner that reacts quickly and positively." },
    { word: "responded", level: "B1", definition: "Reacted to something that happened or was said." },
    { word: "responding", level: "B1", definition: "The act of replying or reacting to something." },
    { word: "nonresponsive", level: "C1", definition: "Not reacting or replying; unresponsive." }
  ]
},
{
  word: "restrict",
  level: "B2",
  derivatives: [
    { word: "restriction", level: "B2", definition: "A limiting condition or measure, especially a legal one." },
    { word: "restricted", level: "B2", definition: "Limited in extent, number, scope, or action." },
    { word: "restrictive", level: "C1", definition: "Imposing restrictions; limiting the scope or freedom." },
    { word: "restrictively", level: "C2", definition: "In a manner that imposes restrictions or limits." },
    { word: "restricting", level: "B2", definition: "The act of limiting the extent or amount of something." },
    { word: "unrestricted", level: "C1", definition: "Not subject to any restriction; free." }
  ]
},
{
  word: "retain",
  level: "B2",
  derivatives: [
    { word: "retention", level: "B2", definition: "The continued possession, use, or control of something." },
    { word: "retained", level: "B2", definition: "Continuously held in a particular status or condition." },
    { word: "retaining", level: "B2", definition: "The act of keeping or continuing to have something." },
    { word: "retentive", level: "C1", definition: "Having the ability to remember or hold facts and impressions easily." },
    { word: "retentively", level: "C2", definition: "In a manner that retains or holds onto information effectively." }
  ]
},
{
  word: "reveal",
  level: "B2",
  derivatives: [
    { word: "revelation", level: "B2", definition: "A surprising and previously unknown fact that is made known." },
    { word: "revealed", level: "B2", definition: "Made known to others; uncovered something hidden." },
    { word: "revealing", level: "B2", definition: "Making previously unknown or secret information known." },
    { word: "revealable", level: "C1", definition: "Able to be revealed or made known." },
    { word: "unrevealed", level: "C2", definition: "Not yet disclosed or made known." }
  ]
},
{
  word: "review",
  level: "B1",
  derivatives: [
    { word: "reviewer", level: "B2", definition: "A person who assesses or examines something for accuracy or quality." },
    { word: "reviewed", level: "B1", definition: "Examined or assessed for accuracy or quality." },
    { word: "reviewing", level: "B1", definition: "The act of examining or assessing something carefully." },
    { word: "reviewable", level: "C1", definition: "Able to be reviewed or evaluated." }
  ]
},
{
  word: "revise",
  level: "B2",
  derivatives: [
    { word: "revision", level: "B2", definition: "The act of revising; a change or correction made to something." },
    { word: "revised", level: "B2", definition: "Altered or edited for improvement or accuracy." },
    { word: "revising", level: "B2", definition: "The act of modifying something for improvement or accuracy." },
    { word: "revisable", level: "C1", definition: "Able to be revised or edited." }
  ]
},
{
  word: "revolutionize",
  level: "C1",
  derivatives: [
    { word: "revolution", level: "B2", definition: "A forcible overthrow of a government or social order in favor of a new system." },
    { word: "revolutionary", level: "B2", definition: "Involving or causing a complete or dramatic change." },
    { word: "revolutionarily", level: "C2", definition: "In a manner that causes complete or dramatic change." },
    { word: "revolutionized", level: "C1", definition: "Completely changed or transformed (something) dramatically." },
    { word: "revolutionizing", level: "C1", definition: "The act of causing a complete or dramatic change." }
  ]
},
{
  word: "separate",
  level: "B1",
  derivatives: [
    { word: "separation", level: "B1", definition: "The action or state of moving or being moved apart." },
    { word: "separated", level: "B1", definition: "Moved or set apart; disconnected." },
    { word: "separating", level: "B1", definition: "The act of dividing or parting something." },
    { word: "separable", level: "C1", definition: "Able to be separated or divided into parts." },
    { word: "inseparable", level: "C1", definition: "Unable to be separated or treated separately." },
    { word: "separately", level: "B2", definition: "In a way that is apart or disconnected." }
  ]
},
{
  word: "signify",
  level: "C1",
  derivatives: [
    { word: "signification", level: "C2", definition: "The meaning or importance of something." },
    { word: "signified", level: "C1", definition: "Made known or expressed; indicated." },
    { word: "signifying", level: "C1", definition: "The act of indicating or meaning something." },
    { word: "signifiable", level: "C2", definition: "Able to be indicated or represented by a sign." }
  ]
},
{
  word: "similar",
  level: "B1",
  derivatives: [
    { word: "similarity", level: "B1", definition: "The state of being similar; resemblance." },
    { word: "similarly", level: "B2", definition: "In a way that is alike or comparable." },
    { word: "dissimilar", level: "C1", definition: "Not alike; unlike in character or quality." },
    { word: "dissimilarity", level: "C2", definition: "The state of being not alike; difference." }
  ]
},
{
  word: "solve",
  level: "B1",
  derivatives: [
    { word: "solution", level: "B1", definition: "A means of solving a problem or dealing with a difficult situation." },
    { word: "solvable", level: "B2", definition: "Able to be solved or resolved." },
    { word: "solved", level: "B1", definition: "Succeeded in finding an answer or explanation for something." },
    { word: "solving", level: "B1", definition: "The act of finding an answer or explanation for a problem." },
    { word: "unsolvable", level: "C1", definition: "Not able to be solved or resolved." }
  ]
},
{
  word: "source",
  level: "B2",
  derivatives: [
    { word: "source", level: "B2", definition: "A place, person, or thing from which something originates or can be obtained." },
    { word: "sourced", level: "B2", definition: "Obtained from a particular source." },
    { word: "sourcing", level: "B2", definition: "The act of obtaining something from a source." },
    { word: "unsourced", level: "C1", definition: "Not having an identified origin or source." }
  ]
},
{
  word: "specify",
  level: "B2",
  derivatives: [
    { word: "specification", level: "B2", definition: "A detailed description of requirements, dimensions, materials, etc." },
    { word: "specified", level: "B2", definition: "Stated explicitly or stated in detail." },
    { word: "specifying", level: "B2", definition: "The act of stating or describing something clearly and explicitly." },
    { word: "unspecified", level: "C1", definition: "Not stated or identified clearly." },
    { word: "specifiable", level: "C2", definition: "Able to be specified or described in detail." }
  ]
},
{
  word: "structure",
  level: "B2",
  derivatives: [
    { word: "structural", level: "B2", definition: "Relating to or forming part of the structure of a building or object." },
    { word: "structurally", level: "C2", definition: "In a manner that relates to the structure of something." },
    { word: "structured", level: "B2", definition: "Organized or arranged according to a plan or system." },
    { word: "structuring", level: "B2", definition: "The act of organizing or arranging something according to a plan." },
    { word: "unstructured", level: "C1", definition: "Not organized according to a plan; lacking structure." }
  ]
},
{
  word: "submit",
  level: "B2",
  derivatives: [
    { word: "submission", level: "B2", definition: "The act of presenting something for consideration or judgment." },
    { word: "submitted", level: "B2", definition: "Presented for consideration or judgment." },
    { word: "submitting", level: "B2", definition: "The act of presenting something for consideration or judgment." },
    { word: "submittable", level: "C1", definition: "Able to be submitted for consideration or judgment." }
  ]
},
{
  word: "succeed",
  level: "B1",
  derivatives: [
    { word: "success", level: "B1", definition: "The accomplishment of an aim or purpose." },
    { word: "successful", level: "B1", definition: "Accomplishing an aim or purpose; achieving desired outcomes." },
    { word: "successfully", level: "B2", definition: "In a way that accomplishes a desired aim or result." },
    { word: "succession", level: "C1", definition: "A number of people or things sharing a specified characteristic and following one after the other." },
    { word: "successor", level: "B2", definition: "A person or thing that follows or replaces another." },
    { word: "unsuccessful", level: "B2", definition: "Not achieving or having achieved success." },
    { word: "unsuccessfully", level: "C1", definition: "In a way that does not achieve success." }
  ]
},
{
  word: "suggest",
  level: "B1",
  derivatives: [
    { word: "suggestion", level: "B1", definition: "An idea or plan put forward for consideration." },
    { word: "suggested", level: "B1", definition: "Proposed or put forward for consideration." },
    { word: "suggesting", level: "B1", definition: "The act of proposing or putting forward an idea." },
    { word: "suggestible", level: "C1", definition: "Likely to accept and act on the suggestions of others." },
    { word: "suggestive", level: "C1", definition: "Tending to suggest an idea or impression." },
    { word: "unsuggested", level: "C2", definition: "Not proposed or put forward for consideration." }
  ]
},
{
  word: "summarise",
  level: "B1",
  derivatives: [
    { word: "summary", level: "B1", definition: "A brief statement or account of the main points of something." },
    { word: "summarized", level: "B1", definition: "Presented in a condensed form, highlighting the main points." },
    { word: "summarizing", level: "B1", definition: "The act of making a summary or presenting the main points." },
    { word: "unsummarized", level: "C2", definition: "Not presented in a condensed form; lacking a summary." }
  ]
},
{
  word: "support",
  level: "B1",
  derivatives: [
    { word: "supporter", level: "B1", definition: "A person who approves of and encourages someone or something." },
    { word: "supporting", level: "B1", definition: "Providing assistance or backing." },
    { word: "supported", level: "B1", definition: "Given assistance or backing." },
    { word: "supportive", level: "B2", definition: "Providing encouragement or emotional help." },
    { word: "supportively", level: "C2", definition: "In a manner that provides encouragement or emotional help." },
    { word: "unsupportive", level: "C1", definition: "Not providing encouragement or emotional help." }
  ]
},
{
  word: "suppose",
  level: "B1",
  derivatives: [
    { word: "supposition", level: "B2", definition: "An uncertain belief or assumption; a hypothesis." },
    { word: "supposed", level: "B1", definition: "Generally assumed or believed to be the case." },
    { word: "supposing", level: "B1", definition: "Assuming something to be true without proof." },
    { word: "unsupposed", level: "C2", definition: "Not assumed or believed to be the case." }
  ]
},
{
  word: "survive",
  level: "B1",
  derivatives: [
    { word: "survival", level: "B1", definition: "The state or fact of continuing to live or exist, especially in spite of danger or hardship." },
    { word: "survivor", level: "B2", definition: "A person who continues to live after an event such as an accident or natural disaster." },
    { word: "surviving", level: "B2", definition: "Continuing to live or exist, especially in spite of danger or hardship." },
    { word: "survivable", level: "C2", definition: "Able to survive or withstand a difficult or dangerous situation." },
    { word: "unsurvived", level: "C2", definition: "Not having continued to live or exist; having perished." }
  ]
},
{
  word: "sustain",
  level: "B2",
  derivatives: [
    { word: "sustainability", level: "B2", definition: "The capacity to endure in a relatively ongoing way across various domains of life." },
    { word: "sustainable", level: "B2", definition: "Capable of being maintained or continued over the long term." },
    { word: "sustainably", level: "C1", definition: "In a manner that can be maintained or continued over the long term." },
    { word: "sustained", level: "B2", definition: "Continuing for an extended period or without interruption." },
    { word: "sustaining", level: "B2", definition: "Providing support or nourishment; keeping something going." },
    { word: "unsustainable", level: "C1", definition: "Not able to be maintained or continued over the long term." }
  ]
},
{
  word: "synthesise",
  level: "C1",
  derivatives: [
    { word: "synthesis", level: "C1", definition: "The combination of ideas to form a theory or system." },
    { word: "synthetic", level: "C1", definition: "Made by chemical synthesis, especially to imitate a natural product." },
    { word: "synthetically", level: "C2", definition: "In a manner that is produced by chemical synthesis." },
    { word: "synthesized", level: "C1", definition: "Produced by combining different elements or substances into a coherent whole." },
    { word: "synthesizing", level: "C1", definition: "The act of combining elements into a coherent whole." }
  ]
},
{
  word: "target",
  level: "B2",
  derivatives: [
    { word: "targeted", level: "B2", definition: "Directed or aimed at a specific object, group, or outcome." },
    { word: "targeting", level: "B2", definition: "The act of directing or aiming something at a specific object, group, or outcome." },
    { word: "targetable", level: "C1", definition: "Able to be targeted or aimed at." },
    { word: "untargeted", level: "C2", definition: "Not directed or aimed at a specific object or group." }
  ]
},
{
  word: "terminate",
  level: "B2",
  derivatives: [
    { word: "termination", level: "B2", definition: "The action of bringing something to an end." },
    { word: "terminated", level: "B2", definition: "Brought to an end; concluded." },
    { word: "terminating", level: "B2", definition: "The act of ending something." },
    { word: "terminable", level: "C2", definition: "Able to be terminated or ended." },
    { word: "interminable", level: "C2", definition: "Endless or seemingly without end." }
  ]
},
{
  word: "translate",
  level: "B1",
  derivatives: [
    { word: "translation", level: "B1", definition: "The process of rendering text or speech from one language into another." },
    { word: "translator", level: "B2", definition: "A person who translates from one language into another." },
    { word: "translated", level: "B1", definition: "Rendered text or speech from one language into another." },
    { word: "translating", level: "B1", definition: "The act of rendering text or speech from one language into another." },
    { word: "translatable", level: "C1", definition: "Able to be translated from one language into another." },
    { word: "untranslatable", level: "C2", definition: "Not able to be accurately translated into another language." }
  ]
},
{
  word: "transform",
  level: "B2",
  derivatives: [
    { word: "transformation", level: "B2", definition: "A thorough or dramatic change in form or appearance." },
    { word: "transformational", level: "C1", definition: "Relating to or characterized by transformation or radical change." },
    { word: "transformed", level: "B2", definition: "Changed in form, appearance, or structure." },
    { word: "transforming", level: "B2", definition: "The act of changing in form, appearance, or structure." },
    { word: "transmutable", level: "C2", definition: "Able to be transformed or changed into another form." }
  ]
},
{
  word: "transport",
  level: "B1",
  derivatives: [
    { word: "transportation", level: "B1", definition: "The action of transporting someone or something or the process of being transported." },
    { word: "transported", level: "B1", definition: "Carried or moved from one place to another." },
    { word: "transporting", level: "B1", definition: "The act of moving people or goods from one place to another." },
    { word: "transporter", level: "C1", definition: "A person or vehicle that transports someone or something." },
    { word: "transportable", level: "C1", definition: "Able to be transported or moved easily." }
  ]
},
{
  word: "trust",
  level: "B1",
  derivatives: [
    { word: "trustee", level: "B2", definition: "A person who holds or manages and invests assets for the benefit of another." },
    { word: "trusting", level: "B2", definition: "Showing or tending to have trust in others; believing that others are honest." },
    { word: "trusted", level: "B1", definition: "Regarded as honest or reliable." },
    { word: "trustworthy", level: "B2", definition: "Able to be relied on as honest or truthful." },
    { word: "untrustworthy", level: "C2", definition: "Not able to be relied on as honest or truthful." }
  ]
},
{
  word: "vary",
  level: "B2",
  derivatives: [
    { word: "variation", level: "B2", definition: "A change or slight difference in condition, amount, or level." },
    { word: "varied", level: "B2", definition: "Incorporating a number of different types or elements; showing variation." },
    { word: "variously", level: "C1", definition: "In different ways; diversely." },
    { word: "variable", level: "B2", definition: "Not consistent or having a fixed pattern; liable to change." },
    { word: "variably", level: "C2", definition: "In a manner that is inconsistent or subject to change." },
    { word: "invariable", level: "C2", definition: "Never changing; always the same." },
    { word: "invariably", level: "C2", definition: "In a manner that is always the same; without variation." }
  ]
},
{
  word: "verify",
  level: "B2",
  derivatives: [
    { word: "verification", level: "B2", definition: "The process of establishing the truth, accuracy, or validity of something." },
    { word: "verifiable", level: "C1", definition: "Able to be checked or tested for accuracy; able to be proven." },
    { word: "verified", level: "B2", definition: "Made sure or demonstrated to be true, accurate, or justified." },
    { word: "verifying", level: "B2", definition: "The act of checking or proving the truth or accuracy of something." }
  ]
},
{
  word: "visualise",
  level: "B2",
  derivatives: [
    { word: "visualization", level: "B2", definition: "The act of forming a mental image of something; making something visible to the eye." },
    { word: "visualized", level: "B2", definition: "Formed a mental image of; made something visible." },
    { word: "visualizing", level: "B2", definition: "The act of forming mental images or representing something in a visible form." },
    { word: "visual", level: "B1", definition: "Relating to seeing or sight; capable of being seen." },
    { word: "visually", level: "B2", definition: "By means of sight; in a way that relates to seeing." }
  ]
},
{
  word: "yield",
  level: "B2",
  derivatives: [
    { word: "yielding", level: "B2", definition: "Giving way under pressure; producing or providing." },
    { word: "yielded", level: "B2", definition: "Gave way to pressure or force; produced or provided something." },
    { word: "yieldable", level: "C2", definition: "Capable of yielding or producing; able to give way under force." },
    { word: "yieldingly", level: "C2", definition: "In a manner that gives way under pressure or produces results." },
    { word: "unyielding", level: "C1", definition: "Not giving way under pressure; firm or inflexible." }
  ]
}
],
  common_prefixes: [
    "anti-", "auto-", "bi-", "co-", "de-", "dis-", "ex-", "hyper-", "il-", "im-",
    "in-", "inter-", "ir-", "macro-", "mal-", "mega-", "micro-", "mini-", "mis-",
    "mono-", "multi-", "neo-", "non-", "out-", "over-", "poly-", "post-", "pre-",
    "pro-", "re-", "semi-", "sub-", "super-", "tele-", "trans-", "un-", "under-"
  ],
  common_suffixes: [
    "-able", "-acy", "-al", "-ance", "-ancy", "-ant", "-ation", "-ator", "-dom", "-en",
    "-ence", "-ent", "-er", "-esque", "-ette", "-fold", "-free", "-ful", "-graph", "-hood",
    "-ian", "-ible", "-ic", "-ify", "-ing", "-ion", "-ish", "-ism", "-ist", "-ite",
    "-ition", "-ity", "-ive", "-ize", "-less", "-like", "-logy", "-ly", "-meter", "-monger",
    "-ness", "-nomy", "-oid", "-or", "-ous", "-pathy", "-phone", "-phobia", "-proof", "-scope",
    "-ship", "-sion", "-some", "-speak", "-sphere", "-tude", "-tion", "-ward", "-wise", "-worthy", "-y"
  ]
};

/*************************************
 * 2. DOM ELEMENT REFERENCES (cache) *
 *************************************/
const elements = {
  wordSelectionScreen: document.getElementById('wordSelectionScreen'),
  baseWordSelectionGrid: document.getElementById('baseWordSelectionGrid'),
  gameScreen: document.getElementById('gameScreen'),
  baseWordDisplay: document.getElementById('baseWordDisplay'),
  prefixList: document.getElementById('prefixList'),
  suffixList: document.getElementById('suffixList'),
  wordConstructionArea: document.getElementById('wordConstructionArea'),
  buildWordBtn: document.getElementById('buildWordBtn'),
  resetWordBtn: document.getElementById('resetWordBtn'),
  nextWordBtn: document.getElementById('nextWordBtn'),
  feedbackMessage: document.getElementById('feedbackMessage'),
  scoreDisplay: document.getElementById('scoreDisplay'),
  foundWordsList: document.getElementById('foundWordsList'),

  // —— Added for “Manual Override” —— 
  editWordBtn: document.getElementById('editWordBtn'),
  manualWordInput: document.getElementById('manualWordInput'),
};

 /************************
  * 3. GAME STATE (vars) *
  ************************/
let currentBaseWordData = null;
let foundWordsForCurrentBase = new Set();
let totalScore = 0;
let selectedPrefix = null;
let selectedSuffix = null;
let constructedWord = '';

 /***************************************
  * 4. HELPER FUNCTIONS (Utility, UI)   *
  ***************************************/

 /**
  * Remove leading/trailing hyphens from an affix string.
  * E.g. "-re" → "re", "ing-" → "ing".
  */
function cleanAffix(affix) {
  return affix.replace(/^-+|-+$/g, '');
}

/**
 * (NEW) getModifiedStem(baseWord, cleanSuffix)
 *
 * Returns a possibly‐altered “stem” of baseWord before suffixation,
 * according to a few common English spelling rules:
 *   1. Ends in "y" + suffix starts with vowel → drop "y", add "i"
 *   2. Ends in silent "e" + suffix starts with vowel → drop "e"
 *   3. CVC pattern + suffix is "ing"/"ed" → double final consonant (if not w/x/y)
 *   4. Otherwise, return lowercase baseWord
 */
function getModifiedStem(baseWord, cleanSuffix) {
  const lowerBase = baseWord.toLowerCase();
  const lowerSuffix = cleanSuffix.toLowerCase();
  const isVowel = (ch) => "aeiou".includes(ch);

  // 1. "y" → "i" when suffix starts with vowel
  if (lowerBase.endsWith("y") && lowerSuffix.length > 0 && isVowel(lowerSuffix[0])) {
    return lowerBase.slice(0, -1) + "i";
  }

  // 2. Drop silent "e" when suffix starts with vowel
  if (lowerBase.endsWith("e") && lowerSuffix.length > 0 && isVowel(lowerSuffix[0])) {
    const stem = lowerBase.slice(0, -1);
    return stem.length >= 2 ? stem : lowerBase;
  }

  // 3. CVC pattern + suffix "ing" or "ed": double final consonant
  if (lowerSuffix === "ing" || lowerSuffix === "ed") {
    if (lowerBase.length >= 3) {
      const c1 = lowerBase.charAt(lowerBase.length - 3);
      const v  = lowerBase.charAt(lowerBase.length - 2);
      const c2 = lowerBase.charAt(lowerBase.length - 1);
      const consonants = "bcdfghjklmnpqrstvwxyz";
      if (
        consonants.includes(c1) &&
        "aeiou".includes(v) &&
        consonants.includes(c2) &&
        !"wxy".includes(c2)
      ) {
        return lowerBase + c2; // e.g. run → runn
      }
    }
  }

  // 4. Default: no change
  return lowerBase;
}

/**
 * Show one screen (either 'wordSelectionScreen' or 'gameScreen') 
 * by toggling the 'hidden' class on all .screen elements.
 */
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

/**
 * Clear feedback text & reset its CSS classes to default.
 */
function clearFeedback() {
  elements.feedbackMessage.textContent = '';
  elements.feedbackMessage.className = 'feedback'; 
}

/**
 * Update the on‐screen score, showing totalScore and how many derivatives 
 * the user has found for the current base word.
 */
function updateScoreDisplay() {
  const foundCount = foundWordsForCurrentBase.size;
  const totalPossible = currentBaseWordData?.derivatives.length || 0;
  elements.scoreDisplay.textContent = `Score: ${totalScore} | Words Found: ${foundCount}/${totalPossible}`;
}

 /**********************************************
  * 5. INITIALIZATION AND BASE‐WORD RENDERING  *
  **********************************************/

function initGame() {
  console.log("1. initGame() called.");

  // 1. Sanity check: ensure all required elements exist
  if (!elements.baseWordSelectionGrid || !elements.baseWordDisplay 
      || !elements.prefixList || !elements.suffixList 
      || !elements.wordConstructionArea) {
    console.error('Critical Error: One or more required DOM elements not found!');
    return;
  }
  console.log("2. All required DOM elements found.");

  // 2. Sort base words
  gameData.base_words.sort((a, b) => a.word.localeCompare(b.word));
  console.log("3. Base words sorted.");

  // 3. Render base‐word buttons
  renderBaseWordSelection();
  console.log("4. renderBaseWordSelection() called.");

  // 4. Show selection screen by default
  showScreen('wordSelectionScreen');
  console.log("5. Displaying the wordSelectionScreen.");

  // 5. Pre‐render affix lists (makes prefixes/suffixes ready on gameScreen)
  renderAffixes();
  console.log("6. renderAffixes() pre‐called (prefixes & suffixes ready).");

  // 6. Update initial score display
  updateScoreDisplay();
  console.log("7. Score display initialized.");
}

function renderBaseWordSelection() {
  console.log("8. renderBaseWordSelection() started.");
  elements.baseWordSelectionGrid.innerHTML = ''; // Clear previous buttons

  gameData.base_words.forEach(wordData => {
    const button = document.createElement('button');
    button.className = 'word-select-btn'; 
    button.textContent = wordData.word;
    button.addEventListener('click', () => selectBaseWord(wordData));
    elements.baseWordSelectionGrid.appendChild(button);
  });

  console.log("9. Base word buttons rendered. Count:", gameData.base_words.length);
}

function selectBaseWord(wordData) {
  console.log("10. selectBaseWord() called with:", wordData.word);

  // 1. Validate data
  if (!wordData?.word || !Array.isArray(wordData.derivatives)) {
    console.error('Invalid word data:', wordData);
    return;
  }
  console.log("11. Word data is valid.");

  // 2. Set current base & reset found‐words
  currentBaseWordData = wordData;
  foundWordsForCurrentBase.clear();
  elements.foundWordsList.innerHTML = ''; 
  clearFeedback();

  // 3. Reset Construction Area (show only base)
  resetWordConstruction();

  // 4. Populate affixes & clear any prior “.selected”
  renderAffixes();
  console.log("12. renderAffixes() re‐called from selectBaseWord().");

  // 5. Update on‐screen base word
  elements.baseWordDisplay.textContent = currentBaseWordData.word;

  // 6. Switch to game screen
  showScreen('gameScreen');
  console.log("13. Switched to gameScreen for base word:", currentBaseWordData.word);

  // 7. Update on‐screen score
  updateScoreDisplay();
}

function renderAffixes() {
  console.log("14. renderAffixes() started.");

  // Clear old lists
  elements.prefixList.innerHTML = '';
  elements.suffixList.innerHTML = '';
  console.log("15. Cleared old affix‐lists.");

  // 1. Prefixes
  if (Array.isArray(gameData.common_prefixes) && gameData.common_prefixes.length > 0) {
    console.log("16. Adding prefixes. Count:", gameData.common_prefixes.length);
    gameData.common_prefixes.forEach(prefix => {
      const span = document.createElement('span');
      span.classList.add('affix-item', 'prefix-item');
      span.textContent = prefix;
      span.addEventListener('click', () => toggleAffixSelection(prefix, 'prefix', span));
      elements.prefixList.appendChild(span);
    });
    console.log("17. Prefixes loop complete.");
  } else {
    console.warn("gameData.common_prefixes is empty or undefined!");
  }

  // 2. Suffixes
  if (Array.isArray(gameData.common_suffixes) && gameData.common_suffixes.length > 0) {
    console.log("18. Adding suffixes. Count:", gameData.common_suffixes.length);
    gameData.common_suffixes.forEach(suffix => {
      const span = document.createElement('span');
      span.classList.add('affix-item', 'suffix-item');
      span.textContent = suffix;
      span.addEventListener('click', () => toggleAffixSelection(suffix, 'suffix', span));
      elements.suffixList.appendChild(span);
    });
    console.log("19. Suffixes loop complete.");
  } else {
    console.warn("gameData.common_suffixes is empty or undefined!");
  }

  console.log("20. Exiting renderAffixes().");
}

function toggleAffixSelection(affix, type, element) {
  console.log("21. toggleAffixSelection() called for:", affix, type);

  if (type === 'prefix') {
    if (selectedPrefix === affix) {
      selectedPrefix = null;
    } else {
      selectedPrefix = affix;
      document.querySelectorAll('.prefix-item.selected').forEach(el => {
        if (el !== element) {
          el.classList.remove('selected');
        }
      });
    }
    element.classList.toggle('selected', selectedPrefix === affix);
  } else {
    if (selectedSuffix === affix) {
      selectedSuffix = null;
    } else {
      selectedSuffix = affix;
      document.querySelectorAll('.suffix-item.selected').forEach(el => {
        if (el !== element) {
          el.classList.remove('selected');
        }
      });
    }
    element.classList.toggle('selected', selectedSuffix === affix);
  }

  // (NEW) If the user clicked on “Edit” previously, abort that state because
  // they are re‐selecting affixes now
  if (!elements.manualWordInput.classList.contains('hidden')) {
    // hide manual input, show spans again
    elements.manualWordInput.classList.add('hidden');
    elements.wordConstructionArea.classList.remove('hidden');
    elements.editWordBtn.textContent = "✎ Edit";
  }

  // Re‐draw the “Word Construction Area” with possible auto stem
  updateWordConstructionArea();
}

function updateWordConstructionArea() {
  console.log("22. updateWordConstructionArea() called.");
  elements.wordConstructionArea.innerHTML = '';
  constructedWord = '';

  const parts = [];

  // 1. Prefix (no hyphens)
  if (selectedPrefix) {
    const prefixValue = cleanAffix(selectedPrefix);
    parts.push({ type: 'prefix', value: prefixValue });
    constructedWord += prefixValue;
  }

  // 2. Base—but use getModifiedStem(...) first
  if (currentBaseWordData) {
    const cleanSuffix = selectedSuffix ? cleanAffix(selectedSuffix) : "";
    const modifiedStem = getModifiedStem(currentBaseWordData.word, cleanSuffix);

    parts.push({ type: 'base', value: modifiedStem });
    constructedWord += modifiedStem;
  }

  // 3. Suffix (no hyphens)
  if (selectedSuffix) {
    const suffixValue = cleanAffix(selectedSuffix);
    parts.push({ type: 'suffix', value: suffixValue });
    constructedWord += suffixValue;
  }

  // 4. Build one span per part
  parts.forEach(part => {
    const span = document.createElement('span');
    span.classList.add('construction-part', part.type);
    span.textContent = part.value;
    elements.wordConstructionArea.appendChild(span);
  });
}

function resetWordConstruction() {
  console.log("23. resetWordConstruction() called.");

  selectedPrefix = null;
  selectedSuffix = null;
  constructedWord = '';

  document.querySelectorAll('.affix-item.selected').forEach(el => {
    el.classList.remove('selected');
  });

  elements.wordConstructionArea.innerHTML = '';
  if (currentBaseWordData) {
    const span = document.createElement('span');
    span.classList.add('construction-part', 'base');
    span.textContent = currentBaseWordData.word;
    elements.wordConstructionArea.appendChild(span);
  }

  // If we were in “edit” mode, revert to normal:
  if (!elements.manualWordInput.classList.contains('hidden')) {
    elements.manualWordInput.classList.add('hidden');
    elements.wordConstructionArea.classList.remove('hidden');
    elements.editWordBtn.textContent = "✎ Edit";
  }

  clearFeedback();
}

function buildAndCheckWord() {
  console.log("24. buildAndCheckWord() called.");

  // (NEW) If the manual input is visible, prompt them to confirm override first
  if (!elements.manualWordInput.classList.contains('hidden')) {
    showFeedback("Press ✔ to confirm your edited word, then click Build.", 'incorrect');
    return;
  }

  // 1. Must pick at least one affix
  if (!selectedPrefix && !selectedSuffix) {
    showFeedback("Please select at least one affix to build a new word!", 'incorrect');
    return;
  }

  // 2. If the user only shows the original base (no actual change)
  const cleanSuffixForCheck = selectedSuffix ? cleanAffix(selectedSuffix) : "";
  const modifiedStemForCheck = getModifiedStem(currentBaseWordData.word, cleanSuffixForCheck);
  if (modifiedStemForCheck === currentBaseWordData.word.toLowerCase() && !selectedPrefix) {
    showFeedback("That's the base word! Try combining affixes.", 'incorrect');
    return;
  }

  // 3. If already found, tell them and reset
  if (foundWordsForCurrentBase.has(constructedWord)) {
    showFeedback("You've already found that word!", 'incorrect');
    resetWordConstruction();
    return;
  }

  // 4. Check against derivatives[]
  const foundDerivative = currentBaseWordData.derivatives.find(d =>
    d.word.toLowerCase() === constructedWord.toLowerCase()
  );

  if (foundDerivative) {
    showFeedback(`Correct! "${constructedWord}" is a valid word!`, 'correct');
    totalScore += 10;
    foundWordsForCurrentBase.add(constructedWord.toLowerCase());
    addWordToFoundList(foundDerivative);
    updateScoreDisplay();
    resetWordConstruction();
  } else {
    showFeedback(`"${constructedWord}" is not a valid derivative of "${currentBaseWordData.word}".`, 'incorrect');
  }
}

function addWordToFoundList(derivative) {
  console.log("25. addWordToFoundList() called for:", derivative.word);
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="word">${derivative.word}</span>
    <span class="level ${derivative.level}">${derivative.level}</span>
    <span class="definition">${derivative.definition}</span>
  `;
  elements.foundWordsList.prepend(li);
}

function showFeedback(message, type) {
  console.log("26. showFeedback() called:", message, type);
  elements.feedbackMessage.textContent = message;
  elements.feedbackMessage.className = `feedback ${type}`;
}

elements.buildWordBtn.addEventListener('click', buildAndCheckWord);
elements.resetWordBtn.addEventListener('click', resetWordConstruction);

// —— (NEW) Manual Override “Edit” Button Logic ——
elements.editWordBtn.addEventListener('click', () => {
  // If the input is hidden → reveal it and allow editing
  if (elements.manualWordInput.classList.contains('hidden')) {
    elements.manualWordInput.value = constructedWord;
    elements.wordConstructionArea.classList.add('hidden');
    elements.manualWordInput.classList.remove('hidden');
    elements.editWordBtn.textContent = "✔";
  } else {
    // User clicked “✔” → confirm their override
    constructedWord = elements.manualWordInput.value.trim().toLowerCase();
    elements.manualWordInput.classList.add('hidden');
    elements.wordConstructionArea.classList.remove('hidden');
    elements.wordConstructionArea.innerHTML = "";
    const overrideSpan = document.createElement('span');
    overrideSpan.classList.add('construction-part', 'override');
    overrideSpan.textContent = constructedWord;
    elements.wordConstructionArea.appendChild(overrideSpan);
    elements.editWordBtn.textContent = "✎ Edit";
  }
});

elements.nextWordBtn.addEventListener('click', () => {
  console.log("27. Next Base Word button clicked.");
  showScreen('wordSelectionScreen');
  renderBaseWordSelection();
});

/**************************************
 * 15. START THE GAME WHEN READY      *
 **************************************/
// Wait until the HTML is fully parsed, then call initGame()
document.addEventListener('DOMContentLoaded', initGame);
console.log("28. DOMContentLoaded event listener registered. Script parsed.");


