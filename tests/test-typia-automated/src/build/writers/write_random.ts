import { dedent } from "@typia/utils";

/**
 * Renders direct and factory random-generator bindings for one fixture.
 *
 * @evidence contracts/common.md#principled-implementation The Boolean mode selects direct typia.random calls or a createRandom factory. The fixture RANDOM metadata and a separately generated assert callback are passed unchanged to _test_random.
 * @evidence contracts/common.md#clear-and-simple-design One curried writer, one method-name choice and one callback renderer define both source forms without preparing a compiler.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No generated value or runtime verdict is used to manufacture assertions. The writer retains the existing fixture, helper, RANDOM customization and 100-draw scenario.
 * @evidence contracts/common.md#meaningful-documentation The comment identifies text generation and the difference between direct and factory bindings; generated declaration comments state the companion-validator oracle limitation.
 */
export const write_random = (create: boolean) => (structure: string) =>
  dedent`
    import { ${structure} } from "@typia/template";
    import typia from "typia";

    import { _test_random } from "../../internal/_test_random";

    /**
     * Checks 100 ${structure} random draws with a native companion validator.
     *
     * This is a generator/validator integration check. Both callbacks come from
     * typia, so agreement does not independently prove the declaration's full
     * semantics, distribution or diversity.
     *
     * 1. Construct the random callback and assertion callback for ${structure}.
     * 2. Generate and assert 100 values through the existing shared helper.
     *
     * @evidence contracts/testing.md#behavioral-verification _test_random executes the actual ${method(create)} callback 100 times and requires the native createAssert callback to accept every generated value. Any assertion or generator exception fails this named case; no distribution or minimum-diversity requirement is asserted.
     * @evidence contracts/testing.md#independent-expectations The TypeScript ${structure} declaration is the input contract, but the runtime acceptance oracle is another typia-produced callback and may share mistakes with the generator. Fixture RANDOM metadata is supplied directly; factory.generate and spoilers are not used by this scenario.
     * @evidence contracts/testing.md#distinguishing-cases This entry retains ${structure}'s ${method(create)} API spelling and 100 generated draws. Sibling fixtures supply their own nullable, tagged, union and recursive shapes; randomness does not guarantee a particular boundary value appears in these draws.
     * @evidence contracts/testing.md#execution-ownership The generated named entry is discovered in its random family by TestServant during test-typia-automated start. _test_random owns the draw/assert loop; the entry owns the real native callback and fixture metadata binding.
     * @evidence contracts/e2e.md#necessary-boundary The Go-produced generator and validator for the actual TypeScript declaration must execute together with the supplied RANDOM callbacks. A handwritten generator cannot establish those emitted bindings, although independent unit tests must own portable generator primitives.
     * @evidence contracts/e2e.md#shared-execution Generation completes for all families before one suite worker opens the project. This entry shares the installed workspace and content-keyed native artifact, and starts no compiler or worker itself.
     * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each draw is a fresh callback result and is checked immediately; the helper retains no sample history. Module-scoped fixture RANDOM callbacks and platform randomness remain shared under their existing contracts, so this case does not claim deterministic or isolated random streams. The runner closes its worker in finally.
     * @evidence contracts/e2e.md#preserved-coverage The prior random callback form, fixture RANDOM metadata, createAssert binding and 100 calls remain unchanged. The new comments disclose existing correlated-oracle and sampling limits without removing an execution or making an additional coverage claim.
     */
    export const test_${method(
      create,
    )}_${structure} = (): void => _test_random("${structure}")<${structure}>(
        ${structure}
    )({
      random: ${functor(create)(structure)},
      assert: typia.createAssert<${structure}>(),
    });
    `;

const method = (create: boolean) => (create ? "createRandom" : "random");
const functor = (create: boolean) => (structure: string) =>
  create
    ? `typia.createRandom<${structure}>((${structure} as any).RANDOM)`
    : `() => typia.random<${structure}>((${structure} as any).RANDOM)`;
