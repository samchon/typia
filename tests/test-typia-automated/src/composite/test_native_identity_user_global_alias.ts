import * as validators from "../native-profiles/provenance/alias-global/fixtures/input";

/**
 * Verifies user global type aliases retain structural Blob/File identity.
 *
 * This is the anonymous type-literal spelling of the user-global collision. Its
 * declarations must not merge with genuine Node or DOM providers.
 *
 * The profile uses noCheck to preserve the original transform-only boundary:
 * the native checker still resolves these types and the plugin emits actual
 * callbacks, while unrelated public-source DOM diagnostics are outside this
 * runtime claim. The original Go unit owns declaration and emitted-shape
 * checks; this profile does not claim a full consumer typecheck.
 *
 * 1. Transform the original aliases in the isolated alias-global profile.
 * 2. Accept branded structural inputs and reject runtime instances and missing
 *    brands.
 *
 * @evidence contracts/testing.md#behavioral-verification Both original alias validators accept their authored brands and reject real runtime instances and missing brands through six explicit observations.
 * @evidence contracts/testing.md#independent-expectations The authored global aliases require brand strings; a genuine runtime Blob/File has no user brand. The expected outcomes derive from those types.
 * @evidence contracts/testing.md#distinguishing-cases Anonymous aliases contrast with the interface/class profile and supplied native declarations; each callback has valid, genuine-instance and missing-brand cases.
 * @evidence contracts/testing.md#execution-ownership The alias-global profile entry registers test_native_identity_user_global_alias with executeProfile in the automated suite. The assertions create no additional compiler or Node host.
 * @evidence contracts/e2e.md#necessary-boundary The real compiler must resolve global type aliases with DOM and Node declarations absent, and the actual generated callbacks must distinguish real Node runtime objects.
 * @evidence contracts/e2e.md#shared-execution One alias-global project and process consumes the same native artifact as the other provenance profiles. Conflicting global type aliases cannot share a project with the user interface/class or genuine-provider globals.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Immutable alias declarations are isolated by profile; each invocation constructs fresh structural and native objects. The suite owns process completion and cleanup.
 * @evidence contracts/e2e.md#preserved-coverage The original Go owner retains alias emission/brand checks. This executable case adds six runtime observations for the exact original aliases instead of substituting module-local names.
 */
export const test_native_identity_user_global_alias = (): void => {
  const runtimeHost = globalThis as unknown as {
    Blob: new (parts: unknown[], options?: unknown) => unknown;
    File: new (parts: unknown[], name: string, options?: unknown) => unknown;
  };
  const assertions: ReadonlyArray<readonly [string, boolean, boolean]> = [
    [
      "alias File structural",
      validators.isAliasFile({ userBlobBrand: "user", userFileBrand: "user" }),
      true,
    ],
    [
      "alias File runtime",
      validators.isAliasFile(new runtimeHost.File(["x"], "x.txt")),
      false,
    ],
    [
      "alias File missing brand",
      validators.isAliasFile({ userBlobBrand: "user" }),
      false,
    ],
    [
      "alias Blob structural",
      validators.createdIsAliasBlob({ userBlobBrand: "user" }),
      true,
    ],
    [
      "alias Blob runtime",
      validators.createdIsAliasBlob(new runtimeHost.Blob(["x"])),
      false,
    ],
    ["alias Blob missing brand", validators.createdIsAliasBlob({}), false],
  ];
  const failures = assertions
    .filter(([, actual, expected]) => actual !== expected)
    .map(
      ([name, actual, expected]) =>
        name + ": expected " + expected + " but got " + actual,
    );
  if (assertions.length !== 6)
    throw new Error("alias observation census changed");
  if (failures.length) throw new Error(failures.join("\n"));
};
