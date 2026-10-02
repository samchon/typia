import { TestValidator } from "@nestia/e2e";
import typia, { IRandomGenerator } from "typia";

/**
 * Verifies recursive random terminates whenever the cycle has an escape.
 *
 * Random generation stops a recursive type at the depth cutoff through one of
 * its escapes — a nullable edge becomes `null`, an optional property is
 * dropped, an array, set, or map empties, or a union picks a finite variant.
 * The custom array generator keeps container edges growing; nullable, optional
 * and union decisions can still choose an earlier finite escape. Independent
 * traversals bound each returned graph, while generated assertion checks are an
 * additional correlated type postcondition. Escape-free types are rejected by
 * the separate transform-diagnostic population.
 *
 * 1. Generate nullable-, optional-, array-, set-, map-, and union-escaped types.
 * 2. Force every container generator to emit one element so depth keeps climbing.
 * 3. Require each value to be finite and to pass `typia.assert`.
 *
 * @evidence contracts/testing.md#behavioral-verification Generates seven escaped recursive forms with one-element container callbacks, calls generated assert and independently measures nullable, optional, array, Set, Map-key, Map-value and union depths at most8.
 * @evidence contracts/testing.md#independent-expectations Private traversals inspect returned graph structure independently of the generated assertion. The assertion is a correlated type postcondition; random union/nullable/optional decisions can escape before the cutoff.
 * @evidence contracts/testing.md#distinguishing-cases Each finite-escape kind has its own original label. Previously tautological union checking and container-only instanceof checks are strengthened with real depth bounds while retaining generated assertions and prototypes.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_random_recursive_terminates in the existing schema feature population; local typed fixtures, private traversals and callback tables belong to this exported entry.
 * @evidence contracts/e2e.md#necessary-boundary Actual native random/validator lowering must connect declared type metadata, runtime generators and any supported custom callbacks. Direct helper units cannot prove that these TypeScript call sites forward recursion, constraints and result types correctly.
 * @evidence contracts/e2e.md#shared-execution These declarations share the existing test-typia-schema project and one ttsx suite invocation, reusing native plugin preparation. No case installs an independent consumer, builds a separate fixture project or launches its own native host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation creates fresh values, payloads and local counters; supported generator injection is local to its call. Decoder factories share only immutable code, and borrowed corpus rows are never mutated. The existing runner owns its lifetime; this entry launches no independent process.
 * @evidence contracts/e2e.md#preserved-coverage All original input tables, public API forms and assertions remain; container and union depth assertions are strengthened rather than replaced with a constant predicate.
 */
export const test_random_recursive_terminates = (): void => {
  const grow: Partial<IRandomGenerator> = {
    array: (schema) =>
      new Array(1).fill(null).map((_, i) => schema.element(i, 1)),
  };

  const nullable: INullable = typia.random<INullable>(grow);
  typia.assert<INullable>(nullable);
  TestValidator.predicate(
    "nullable recursion finite",
    () => nullableDepth(nullable) <= 8,
  );

  const optional: IOptional = typia.random<IOptional>(grow);
  typia.assert<IOptional>(optional);
  TestValidator.predicate(
    "optional recursion finite",
    () => optionalDepth(optional) <= 8,
  );

  const array: IArray = typia.random<IArray>(grow);
  typia.assert<IArray>(array);
  TestValidator.predicate(
    "array recursion finite",
    () => arrayDepth(array) <= 8,
  );

  const set: ISet = typia.random<ISet>(grow);
  typia.assert<ISet>(set);
  TestValidator.predicate(
    "set recursion finite",
    () => set.self instanceof Set && setDepth(set) <= 8,
  );

  const mapKey: IMapKey = typia.random<IMapKey>(grow);
  typia.assert<IMapKey>(mapKey);
  TestValidator.predicate(
    "map-key recursion finite",
    () => mapKey.self instanceof Map && mapKeyDepth(mapKey) <= 8,
  );

  const mapValue: IMapValue = typia.random<IMapValue>(grow);
  typia.assert<IMapValue>(mapValue);
  TestValidator.predicate(
    "map-value recursion finite",
    () => mapValue.self instanceof Map && mapValueDepth(mapValue) <= 8,
  );

  const union: IUnionOwner = typia.random<IUnionOwner>(grow);
  typia.assert<IUnionOwner>(union);
  TestValidator.predicate(
    "union recursion finite",
    () => unionDepth(union) <= 8,
  );
};

interface INullable {
  value: string;
  self: INullable | null;
}

interface IOptional {
  value: string;
  self?: IOptional;
}

interface IArray {
  value: string;
  self: IArray[];
}

interface ISet {
  value: string;
  self: Set<ISet>;
}

interface IMapKey {
  value: string;
  self: Map<IMapKey, string>;
}

interface IMapValue {
  value: string;
  self: Map<string, IMapValue>;
}

interface IUnionOwner {
  next: IUnionLeaf | IUnionOwner;
}
interface IUnionLeaf {
  value: string;
}

const nullableDepth = (node: INullable): number =>
  node.self === null ? 0 : 1 + nullableDepth(node.self);

const optionalDepth = (node: IOptional): number =>
  node.self === undefined ? 0 : 1 + optionalDepth(node.self);

const arrayDepth = (node: IArray): number =>
  node.self.length === 0 ? 0 : 1 + arrayDepth(node.self[0]!);

const setDepth = (node: ISet): number =>
  node.self.size === 0 ? 0 : 1 + Math.max(...[...node.self].map(setDepth));

const mapKeyDepth = (node: IMapKey): number =>
  node.self.size === 0
    ? 0
    : 1 + Math.max(...[...node.self.keys()].map(mapKeyDepth));

const mapValueDepth = (node: IMapValue): number =>
  node.self.size === 0
    ? 0
    : 1 + Math.max(...[...node.self.values()].map(mapValueDepth));

const unionDepth = (node: IUnionOwner | IUnionLeaf): number =>
  "next" in node ? 1 + unionDepth(node.next) : 0;
