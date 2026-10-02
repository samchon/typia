import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies cross-container graph cycles retain recursive depth guards.
 *
 * A parent can return to itself through an object child and a map key. The
 * outer child array is not the cutoff edge, but the owner path below it still
 * has to keep depth propagation active until a nested container can stop.
 *
 * 1. Generate a `Parent -> Child[] -> Map<Parent, string>` graph.
 * 2. Force every custom array call to emit one element unless guarded.
 * 3. Require the generated graph to terminate within the depth cap.
 * 4. Repeat the same assertion through `typia.createRandom`.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory one-element callbacks generate Parent arrays that recur through Map keys; independent traversal requires returned depth between1 and6.
 * @evidence contracts/testing.md#independent-expectations crossContainerDepth walks children and Map keys explicitly, independently of native type checks; the literal bound records the established recursion cutoff.
 * @evidence contracts/testing.md#distinguishing-cases The array-to-child-to-map-key cycle distinguishes cross-container propagation from a same-container recursion path and requires a populated initial edge.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_cross_container_cutoff in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original declarations, rows, callback variants and assertions remain executable in this case. Portable helper semantics live in the schema unit population; native producer assembly remains here.
 */
export const test_random_recursive_cross_container_cutoff = (): void => {
  const value: ICrossContainerParent = typia.random<ICrossContainerParent>({
    string: () => "key",
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestValidator.predicate("cross-container recursive cutoff", () => {
    const depth: number = crossContainerDepth(value);
    return 1 <= depth && depth <= 6;
  });

  const createValue = typia.createRandom<ICrossContainerParent>({
    string: () => "key",
    array: (schema) =>
      new Array(1).fill(null).map((_, index) => schema.element(index, 1)),
  });
  TestValidator.predicate(
    "createRandom cross-container recursive cutoff",
    () => {
      const depth: number = crossContainerDepth(createValue());
      return 1 <= depth && depth <= 6;
    },
  );
};

interface ICrossContainerParent {
  children: ICrossContainerChild[];
}

interface ICrossContainerChild {
  key: string;
  links: Map<ICrossContainerParent, string>;
}

const crossContainerDepth = (parent: ICrossContainerParent): number => {
  if (parent.children.length === 0) {
    return 0;
  }
  const child: ICrossContainerChild = parent.children[0]!;
  if (child.links.size === 0) {
    return 1;
  }
  return (
    1 +
    Math.max(
      ...Array.from(child.links.keys()).map((next) =>
        crossContainerDepth(next),
      ),
    )
  );
};
