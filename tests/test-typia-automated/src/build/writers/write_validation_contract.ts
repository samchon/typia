import { NamingConvention } from "@typia/utils";

/**
 * Renders the reviewed validator-family contracts beside each generated case.
 *
 * The fixture name identifies the authored value/spoiler owner. Other operation
 * families keep their own renderer and are not certified by this selection.
 *
 * @evidence contracts/common.md#principled-implementation The selected normal validator helper determines the result and diagnostic assertions; rendering only those reviewed modes avoids attributing validator semantics to codecs, pruning or random generation. Fixture and public method names identify the actual binding.
 * @evidence contracts/common.md#clear-and-simple-design One operation description supplies the differing assertion/oracle facts and one renderer supplies shared native-boundary ownership. An unknown family returns no acknowledgment rather than inventing its semantics.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts This function writes documentation only. It does not alter a fixture, operation, assertion, selector or expected result, and it explicitly records the unresolved cross-family worker reuse instead of declaring minimum host preparation achieved.
 * @evidence contracts/common.md#meaningful-documentation Generated prose names the actual operation, fixture, positive/spoiled input distinctions, oracle limits and execution owner. The JSDoc block is emitted before the case declaration and separates descriptions from checklist answers.
 */
export const write_validation_contract = (
  props: { method: string; prefix?: string | undefined },
  structure: string,
): string => {
  const base = props.method.startsWith("create")
    ? NamingConvention.localize(props.method.slice(6))
    : props.method;
  const mode = props.prefix === "standardSchema" ? "standardSchema" : base;
  const definitions: Record<string, { behavior: string; oracle: string }> = {
    is: {
      behavior:
        "_test_is requires true for the clean value and false for every fixture spoiler; it does not assert diagnostic paths or input identity.",
      oracle:
        "The Boolean expectation comes from the authored clean fixture and invalid mutations, not another typia validator. Spoiler path strings are not asserted by this Boolean case.",
    },
    assert: {
      behavior:
        "_test_assert requires the clean input identity and rejects every spoiled input with the expected constructor name, diagnostic property shape and a path belonging to that spoiler's authored path set. It asserts one reported path, not every possible invalid leaf.",
      oracle:
        "Fixture spoilers independently define invalid input and allowed diagnostic paths. The helper additionally uses typia.is for TypeGuardError property consistency; that generated check is not an independent error-shape oracle or a proof of constructor identity.",
    },
    assertGuard: {
      behavior:
        "_test_assertGuard requires clean input acceptance and rejects each spoiled input with the expected constructor name, diagnostic property shape and one authored spoiler path. Guard calls have no return-identity assertion.",
      oracle:
        "The fixture and its mutations supply acceptance/rejection and allowed paths independently. The additional typia.is diagnostic-property check shares the native producer and does not prove constructor identity or independently establish error shape.",
    },
    validate: {
      behavior:
        "_test_validate requires clean success and input identity, then rejects every fixture spoiler and compares the complete sorted diagnostic-path population, including multiplicity.",
      oracle:
        "Authored spoilers supply expected paths independently of validate output. Native typia.assertEquals additionally checks IValidation record consistency; it is a separate generated consistency check, not the source of expected failure paths.",
    },
    standardSchema: {
      behavior:
        "_test_standardSchema_validate requires clean value identity and a statically valid SuccessResult, then compares all sorted issue paths and multiplicity after applying each fixture spoiler.",
      oracle:
        "Spoilers define expected paths independently. The helper reconstructs Standard Schema path segments through NamingConvention, so it does not independently test that formatter. Its additional typia.assertEquals record check also shares the native producer.",
    },
  };
  if (!Object.hasOwn(definitions, mode)) return "";
  const facts = definitions[mode]!;
  const operation = "typia." + props.method;
  return [
    "/**",
    " * Verifies " +
      operation +
      " against the " +
      structure +
      " fixture contract.",
    " *",
    " * Clean fixture values and authored mutations distinguish acceptance from",
    " * rejection through the actual native-produced operation. This case keeps",
    " * the assertion responsibilities of its selected helper visible.",
    " *",
    " * 1. Produce the operation for " +
      structure +
      " through its direct or factory call.",
    " * 2. Check a fresh clean value and every spoiler this fixture declares.",
    " *",
    " * @evidence contracts/testing.md#behavioral-verification " +
      operation +
      " is bound to " +
      structure +
      ". " +
      facts.behavior,
    " * @evidence contracts/testing.md#independent-expectations " +
      structure +
      ".generate and .SPOILERS are authored beside the declaration. " +
      facts.oracle,
    " * @evidence contracts/testing.md#distinguishing-cases The clean " +
      structure +
      " value is the positive case and each declared spoiler changes an independently invalid property. A fixture without spoilers supplies clean acceptance only; it does not claim invalid-value coverage. Other fixture declarations own their distinct optional, nullable, recursive, scalar and boundary spellings.",
    " * @evidence contracts/testing.md#execution-ownership The generated matching test export is discovered by TestServant in this operation's feature directory during test-typia-automated start. The passed native operation owns type-specific behavior; the helper owns its shared result and diagnostic comparisons.",
    " * @evidence contracts/e2e.md#necessary-boundary The Go transformer must replace this " +
      structure +
      " direct/factory call with a callable validator and preserve the TypeScript declaration's acceptance decisions. Direct calls to the assertion helper with a handwritten function cannot verify emitted predicate branches, runtime helper binding or factory assembly.",
    " * @evidence contracts/e2e.md#shared-execution Cases in this feature directory reuse its TestServant worker and the workspace's content-keyed plugin artifact, with no per-fixture installation or build. The current runner still starts separate workers across feature families; minimum cross-family project/host reuse remains unresolved and is not certified here.",
    " * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper requests fresh fixture values for clean and spoiled calls and does not replace fixture factories, spoilers or the passed operation. The runner closes each connected feature worker in finally; ttsc owns content-keyed artifact validity. This case does not claim a cold-cache transition or cross-family isolation proof.",
    " * @evidence contracts/e2e.md#preserved-coverage Documentation retains this fixture, public operation spelling, selected helper, all declared spoilers and discoverable export. No executable assertion is deleted, moved or weakened, and codec, strict-surplus and transport claims remain with their own cases.",
    " */",
  ].join("\n");
};
