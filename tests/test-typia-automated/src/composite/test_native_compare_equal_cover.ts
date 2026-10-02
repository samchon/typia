import typia, { compare } from "typia";

interface IUser {
  name: string;
  age: number;
  address: {
    room?: number;
    city: string;
    street: string;
  };
  tags: string[];
  created: Date;
  pattern: RegExp;
  bytes: Uint8Array;
}
const equalUser = typia.compare.createEquals<IUser>();
const coverUser = typia.compare.createCover<IUser>();
const equalUserDirect = (x: IUser, y: IUser) =>
  typia.compare.equals<IUser>(x, y);
const coverUserDirect = (x: IUser, y: compare.Cover<IUser>) =>
  typia.compare.cover<IUser>(x, y);
interface IDictionary {
  fixed: string;
  [key: string]: string;
}
const equalDictionary = typia.compare.createEquals<IDictionary>();
const coverDictionary = typia.compare.createCover<IDictionary>();
type Shape =
  | {
      kind: "circle";
      radius: number;
      nested: {
        label: string;
      };
    }
  | {
      kind: "square";
      size: number;
      nested: {
        label: string;
      };
    };
const equalShape = typia.compare.createEquals<Shape>();
const coverShape = typia.compare.createCover<Shape>();
interface INode {
  id: number;
  next: INode | null;
  children: INode[];
}
const equalNode = typia.compare.createEquals<INode>();
const coverNode = typia.compare.createCover<INode>();
/**
 * Verifies nested equality and partial cover over native and recursive data.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Nested address, regular-expression flags, bytes, dictionary keys, array length, discriminated branches and cyclic nodes have literal true/false expectations.
 * @evidence contracts/testing.md#independent-expectations Equality compares declared scalar/native contents and partial cover requires supplied keys and complete array elements to agree. Authored pairs vary one nested value, native flag/byte, dictionary key, branch or cyclic id and assert literal booleans without deriving a result from another native callback or emitted-source pattern.
 * @evidence contracts/testing.md#distinguishing-cases Nested address, regular-expression flags, bytes, dictionary keys, array length, discriminated branches and cyclic nodes have literal true/false expectations.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_equal_cover = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    equalUser,
    coverUser,
    equalUserDirect,
    coverUserDirect,
    equalDictionary,
    coverDictionary,
    equalShape,
    coverShape,
    equalNode,
    coverNode,
  };
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };
  const user: any = {
    name: "ivan",
    age: 19,
    address: {
      street: "Ivanovskaya",
      city: "Berlin",
    },
    tags: ["a", "b"],
    created: new Date("2026-06-11T00:00:00.000Z"),
    pattern: /^ivan$/gi,
    bytes: new Uint8Array([1, 2, 3]),
  };
  const same: any = {
    name: "ivan",
    age: 19,
    address: {
      street: "Ivanovskaya",
      city: "Berlin",
    },
    tags: ["a", "b"],
    created: new Date("2026-06-11T00:00:00.000Z"),
    pattern: /^ivan$/gi,
    bytes: new Uint8Array([1, 2, 3]),
  };
  const different: any = {
    ...same,
    address: { ...same.address, city: "Seoul" },
  };
  expect("equal user", mod.equalUser(user, same), true);
  expect("equal user direct", mod.equalUserDirect(user, same), true);
  expect("equal nested mismatch", mod.equalUser(user, different), false);
  expect(
    "equal regexp mismatch",
    mod.equalUser(user, { ...same, pattern: /^ivan$/g }),
    false,
  );
  expect(
    "equal bytes mismatch",
    mod.equalUser(user, { ...same, bytes: new Uint8Array([1, 2, 4]) }),
    false,
  );
  expect(
    "cover nested partial",
    mod.coverUser(user, { address: { city: "Berlin" } }),
    true,
  );
  expect(
    "cover direct",
    mod.coverUserDirect(user, {
      name: "ivan",
      bytes: new Uint8Array([1, 2, 3]),
    }),
    true,
  );
  expect(
    "cover nested mismatch",
    mod.coverUser(user, { address: { city: "Seoul" } }),
    false,
  );
  expect(
    "cover array same length",
    mod.coverUser(user, { tags: ["a", "b"] }),
    true,
  );
  expect(
    "cover array length mismatch",
    mod.coverUser(user, { tags: ["a"] }),
    false,
  );
  expect("cover extra key", mod.coverUser(user, { unknown: 1 }), false);
  expect(
    "dictionary equal",
    mod.equalDictionary({ fixed: "f", extra: "x" }, { fixed: "f", extra: "x" }),
    true,
  );
  expect(
    "dictionary equal missing key",
    mod.equalDictionary({ fixed: "f", extra: "x" }, { fixed: "f" }),
    false,
  );
  expect(
    "dictionary cover dynamic",
    mod.coverDictionary({ fixed: "f", extra: "x" }, { extra: "x" }),
    true,
  );
  expect(
    "dictionary cover dynamic mismatch",
    mod.coverDictionary({ fixed: "f", extra: "x" }, { extra: "y" }),
    false,
  );
  const circle: any = { kind: "circle", radius: 5, nested: { label: "round" } };
  const circleSame: any = {
    kind: "circle",
    radius: 5,
    nested: { label: "round" },
  };
  const square: any = { kind: "square", size: 5, nested: { label: "round" } };
  expect("union equal same branch", mod.equalShape(circle, circleSame), true);
  expect("union equal different branch", mod.equalShape(circle, square), false);
  expect(
    "union cover branch",
    mod.coverShape(circle, { kind: "circle", nested: { label: "round" } }),
    true,
  );
  expect(
    "union cover wrong branch",
    mod.coverShape(circle, { kind: "square" }),
    false,
  );
  const a: any = { id: 1, next: null, children: [] };
  const b: any = { id: 1, next: null, children: [] };
  a.next = a;
  b.next = b;
  a.children.push(a);
  b.children.push(b);
  expect("recursive equal", mod.equalNode(a, b), true);
  b.id = 2;
  expect("recursive mismatch", mod.equalNode(a, b), false);
  b.id = 1;
  const partial: any = { id: 1, next: null };
  partial.next = partial;
  expect("recursive cover partial", mod.coverNode(a, partial), true);
  partial.id = 9;
  expect("recursive cover mismatch", mod.coverNode(a, partial), false);
};
