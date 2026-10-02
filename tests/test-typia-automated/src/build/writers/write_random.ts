import { dedent } from "@typia/utils";

/**
 * Renders direct and factory random-generator bindings for one fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification The writer renders the actual random/createRandom call, RANDOM customization and companion createAssert binding; _test_random owns 100 runtime draw/assert calls. Rendering performs no product assertion or draw itself.
 * @evidence contracts/testing.md#independent-expectations The fixture's TypeScript declaration and RANDOM metadata are authored inputs. Runtime acceptance uses the native companion validator and may share generator mistakes; neither this writer nor that agreement independently establishes distribution, diversity or all declaration semantics.
 * @evidence contracts/testing.md#distinguishing-cases Direct and factory source forms both retain the same fixture/customization and 100-draw helper. Private method/functor select those API spellings; random sampling does not guarantee any specific boundary value is drawn.
 * @evidence contracts/testing.md#execution-ownership The random descriptor registers this programmer with the controller. Each returned matching test export is discovered by TestServant and hands its two real native callbacks to _test_random; private text renderers own no independent test registration.
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
