# Common Implementation Principles

Give grounds a reviewer can check against the actual declaration. Keep straightforward decisions brief and do not invent alternatives or development history to fill an answer.

## Principled Implementation

Implement the required meaning using methods justified by the problem's principles. For a function, establish why its method produces the intended result under the supported input conditions. For a type, establish why its representation expresses the permitted values and distinctions.

Use language idioms, documented API semantics and recognized algorithms where they fit that meaning. Prior use or popularity alone does not establish suitability. A custom method needs a sound basis in the applicable semantics or mathematical principles.

Explain the method or representation, its language-level or mathematical premises and why those premises hold. For transformations, distinguish the intended change from meaning that must remain intact. For numerical algorithms, address applicable precision, degeneracy or approximation assumptions. These premises matter because an otherwise recognized method can be invalid for the representation it actually receives.

Support nonobvious reasoning with the actual contract, documented semantics, an algorithmic argument or an authoritative reference. State unresolved semantic limitations. An ordinary adapter can justify its mapping directly without a paper citation.

## Clear and Simple Design

Make responsibility, dependencies and control flow apparent through the simplest structure that serves current requirements. Do not introduce layers, options, abstractions or capabilities solely for presumed future requirements. Each structural element increases what callers and maintainers must understand.

Keep decisions with the responsibility that owns them instead of duplicating the same policy across independent paths. Hide changeable implementation details behind meaningful boundaries so a later change can remain local. This supports extension through maintainable code rather than unused extension mechanisms.

Explain how the declaration's organization exposes its responsibility and why any nonobvious layer, option or separation is necessary. Fewer lines, files or methods are not the objective by themselves. A simple type can describe how its members are organized without inventing an architecture.

## Prohibited Implementation Shortcuts

Do not substitute a shortcut for the implementation the product requires:

- **Hardcoding:** do not special-case consumers, fixtures, expected answers or measurement results. Contract-defined constants, discriminants and defaults remain legitimate.
- **Monkey patching:** do not replace foreign methods, globals or internals to change their behavior. Use supported extension or injection boundaries.
- **Test-only logic:** do not add production behavior solely to make a test or measurement pass. Correct the implementation against the real requirement.
- **Chains of workarounds:** do not preserve a disproven assumption beneath compensating wrappers, retries or exceptions. Correct its owning implementation and remove the compensations that no longer serve a requirement. A compatibility path is legitimate only when it addresses an actual supported difference rather than masking that false premise.

These substitutions can satisfy known examples while leaving the product dependent on foreign internals or a false premise. Identify any relevant special case, foreign mutation or compensating path and explain its basis in an actual supported requirement. State an unresolved violation honestly; do not recite every prohibition where the declaration has no such mechanism.

A permanent acknowledgment concerns mechanisms present in the implementation. It need not reconstruct discarded designs or the repair history. A passing test or renamed wrapper does not establish that a compensation is legitimate.

## Meaningful documentation

Write useful native documentation for public declarations and members. Explain purpose and the nonobvious facts needed to use them, such as ownership, units, failure effects or optional-state meaning. Repeating names, types and executable branches does not supply that context.

Follow the documentation skill in related repository documents and apply its paragraph separation, clear prose and explanation of reasons to native comments. Use TypeScript JSDoc and Go declaration comments for public declarations and members. Concision does not justify forcing different ideas into one paragraph.

Separate descriptive prose from acknowledgment tags with a blank comment line. Separate documented properties with a blank source line so each explanation is visibly associated with its member. Properties retain useful native documentation without separate checklist acknowledgments.

Identify the useful facts present in the native documentation and the applicable documentation guidance followed, including related repository documents changed. Assess the written information and its presentation. The acknowledgment must not stand in for missing documentation or repeat the other chapters' implementation arguments.
