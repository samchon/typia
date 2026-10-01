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
 * @evidence contracts/testing.md#behavioral-verification typia.random is evaluated by the native host on the types declared in this case and the result is checked by 2 assertions (cross-container recursive cutoff; createRandom cross-container recursive cutoff). The case documents its purpose as: Verifies cross-container graph cycles retain recursive depth guards.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: A parent can return to itself through an object child and a map key. The outer child array is not the cutoff edge, but the owner path below it still has to keep depth propagation active until a nested container can stop. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (cross-container recursive cutoff; createRandom cross-container recursive cutoff) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_random_recursive_cross_container_cutoff is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
