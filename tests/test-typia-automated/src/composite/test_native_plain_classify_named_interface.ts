import typia from "typia";

// A named INTERFACE — a type-only name with no runtime value.
interface Animal {
  name: string;
  legs: number;
}

// Zoo is a real class (field-copies onto its prototype); its animal field is
// the interface, which must field-copy as a plain {}.
class Zoo {
  label!: string;
  animal!: Animal;
  describe(): string {
    return this.label + ":" + this.animal.name;
  }
}

const build = typia.plain.createClassify<Zoo>();

/**
 * Verifies classify nests a type-only named interface as a plain object.
 *
 * The native producer must reconstruct the declared behavior, rather than
 * merely emit a helper name. Literal seeds and observable instance methods
 * distinguish class reconstruction from returning the input object unchanged.
 *
 * 1. Transform the original typed factory or direct call sites in this suite.
 * 2. Execute the preserved inputs and assert their runtime results.
 *
 * @evidence contracts/testing.md#behavioral-verification classify nests a type-only named interface as a plain object; the body executes real transformed callbacks and retains the original runner assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten seeds, class identity and declared method semantics establish expectations; no expected value is captured from emitted code.
 * @evidence contracts/testing.md#distinguishing-cases Zoo retains its real class prototype while the type-only Animal field retains fox and four legs without an unbound-constructor exception. This body checks the nested field contents, not its exact object prototype.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_named_interface in the automated composite population; private fixture declarations and callbacks belong to this entry.
 * @evidence contracts/e2e.md#necessary-boundary Real typia native lowering must connect these TypeScript declarations to executable JavaScript; direct emitter inspection cannot detect wrong constructor identity or missing runtime bindings.
 * @evidence contracts/e2e.md#shared-execution These call sites share the automated suite project and its single worker, with no per-case compiler project, CLI invocation or subprocess.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh seed graphs; the suite owns and closes the shared worker after success or failure. No foreign API is replaced.
 * @evidence contracts/e2e.md#preserved-coverage Original plain_classify_strategy_edges_transform_test.go runtime inputs and assertions execute here unchanged in meaning.
 */
export const test_native_plain_classify_named_interface = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  const z = build({ label: "z", animal: { name: "fox", legs: 4 } });
  assert(z instanceof Zoo, "Zoo should be a class instance");
  assert(
    z.describe() === "z:fox",
    "Zoo method should work, got: " + z.describe(),
  );
  assert(
    z.animal && z.animal.name === "fox" && z.animal.legs === 4,
    "interface field is a plain object",
  );
};
