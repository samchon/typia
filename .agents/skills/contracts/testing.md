# Test Contracts

Apply these chapters to every unit and E2E test. Explain the actual assertions and execution path, including cases registered through a shared harness. A passing run or a generic statement of compliance does not answer a chapter.

## Behavioral verification

Run the behavior the test concerns and assert its observable result. Identify the actual function, command or public operation exercised, the defect its assertions distinguish, and the valid behavior they permit.

Do not test the repository's arrangement instead of behavior: a committed file exists, a package manifest contains a string, a document lists a name, a workflow contains a step, source text matches a pattern, or two committed files agree. Remove such checks rather than rewriting their acknowledgments. A resolver interpreting a fixture manifest or an installed package being imported exercises behavior; explain that operation and its result. Contract-defined constants and deliberate fixture inputs remain legitimate.

Retain the development skill's repository integrity enforcement for feature identity, workspace selection and prohibited assertion oracles as static analysis. These commands enforce declared source constraints; they do not prove runtime discovery or product behavior. Keep their repository enforcement separate from fixture-driven tests of the analyzer, whose inputs and expected diagnostics must distinguish correct and incorrect parsing or policy decisions. Do not remove an authorized integrity constraint under the arrangement-test rule or relabel its repository scan as behavioral coverage.

## Independent expectations

Derive expected results from the supported contract, an authoritative specification or an independent reference implementation. Identify that basis and explain how the assertion detects an incorrect implementation rather than repeating its computation.

Do not generate expected results from the implementation under test and then certify them with a snapshot. Literal expectations are appropriate when their meaning follows independently from the contract. Explain any oracle limitation that leaves a defect indistinguishable.

## Distinguishing cases

Cover the meaningful decision differences the test owns. Identify its positive, negative and boundary cases, the property that changes the expected result, and any complementary cases owned by another test. A single test need not repeat a suite's entire case matrix, but its acknowledgment must name its actual contribution.

For a transformation, include input that must change and verify both the intended change and meaning that must remain intact. For a predicate, include an adjacent input where it must not act. Include relevant empty, singleton, limit, malformed and failure or recovery cases. Idempotency alone does not establish correctness. Do not weaken assertions, skip cases or remove counterexamples to shorten execution.

## Execution ownership

Classify a test by what it actually executes. Unit tests exercise the owning operations without installing a consumer, building a native artifact or starting a real product host merely to reach portable semantics. A real fixture filesystem used by a resolver does not by itself make the test E2E. E2E tests exercise a necessary connection between components through an actual installed artifact, native producer, host or process protocol.

Keep unit and E2E cases in separate execution populations and locations, with matching runner and Evidence selection. Explain the test's layer, discoverable entry and ownership of any dynamically registered cases. Moving a file or changing its label does not establish a different layer. A shared harness must retain each case's inputs, assertions and failure identity; its acknowledgment cannot replace the individual cases' explanations. Record any entry the checker cannot address until it is made selectable.
