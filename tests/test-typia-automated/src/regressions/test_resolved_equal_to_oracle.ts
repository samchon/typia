import { ClassNonPublic, TestStructure } from "@typia/template";

import { resolved_equal_to } from "../utils/resolved_equal_to";

/**
 * Verifies the resolving oracle really fails on every contract it claims.
 *
 * `resolved_equal_to` used to answer `true` whenever the fixture name contained
 * `Class` or either side was a function, and it walked only the input's own
 * keys. Whole fixture classes therefore executed with no oracle at all, while an
 * unexpected output property, a mismatched native brand, and same-length but
 * different buffer bytes all passed. Each case below is a negative twin of a
 * positive one, so an oracle that answered `true` unconditionally, or one that
 * lost a branch, cannot survive the table.
 *
 * 1. Pin the positive shape of every comparison contract.
 * 2. Move exactly one observable property away from it.
 * 3. Require the oracle to reject the twin while accepting the original.
 */
export const test_resolved_equal_to_oracle = (): void => {
  const wrong: string[] = [];
  for (const item of CASES) {
    const actual: boolean = resolved_equal_to(probe(item.RESOLVE))(
      item.x,
      item.y,
      { silent: true },
    );
    if (actual !== item.equal) wrong.push(`${item.title} -> ${actual}`);
  }
  if (wrong.length !== 0)
    throw new Error(
      `Bug on resolved_equal_to(): wrong answers.\n  - ${wrong.join("\n  - ")}`,
    );

  // A BLOB MUST NEVER BE WAVED THROUGH ON THE SYNCHRONOUS PATH.
  //
  // Only the awaited pass can read content, so a blob reaching a synchronous
  // consumer has to be a loud harness error. Silently comparing its metadata
  // and skipping its bytes is the shape this whole regression exists to end.
  const blob: Blob = new Blob([Uint8Array.from([1])]);
  try {
    resolved_equal_to(probe())({ part: blob }, { part: blob }, { silent: true });
  } catch {
    return;
  }
  throw new Error(
    "Bug on resolved_equal_to(): a Blob passed synchronously, with its bytes never read.",
  );
};

const probe = (RESOLVE?: (input: any) => unknown): TestStructure<any> => ({
  constructor: { name: "Probe" },
  generate: () => ({}),
  RESOLVE,
});

interface ICase {
  title: string;
  equal: boolean;
  x: unknown;
  y: unknown;
  RESOLVE?: (input: any) => unknown;
}

const SHARED = (): string => "shared";

const buffer = (...values: number[]): ArrayBuffer =>
  Uint8Array.from(values).buffer;

class Animal {
  public readonly name: string = "dog";
  public readonly age: number = 3;
  public bark(): string {
    return "woof";
  }
}

const accessor: ClassNonPublic = new ClassNonPublic.Accessor(
  "implicit",
  "shown",
  1,
  true,
);

const CASES: ICase[] = [
  // CLASS INSTANCES: PROTOTYPE MEMBERS ARE NOT DATA, OWN ENUMERABLE DATA IS
  {
    title: "class instance accepts its own enumerable data",
    equal: true,
    x: new Animal(),
    y: { name: "dog", age: 3 },
  },
  {
    title: "class instance rejects a changed data property",
    equal: false,
    x: new Animal(),
    y: { name: "dog", age: 4 },
  },
  {
    title: "class instance rejects a dropped data property",
    equal: false,
    x: new Animal(),
    y: { name: "dog" },
  },
  {
    title: "class instance rejects a re-created prototype method in the output",
    equal: false,
    x: new Animal(),
    y: { name: "dog", age: 3, bark: (): string => "woof" },
  },
  // DECLARED PROJECTION: NON-PUBLIC MEMBERS ARE ABSENT BY CONTRACT
  {
    title: "declared projection accepts the projected output",
    equal: true,
    x: accessor,
    y: { implicit: "implicit", shown: "shown" },
    RESOLVE: ClassNonPublic.RESOLVE,
  },
  {
    title: "declared projection rejects a leaked non-public member",
    equal: false,
    x: accessor,
    y: { implicit: "implicit", shown: "shown", hidden: true },
    RESOLVE: ClassNonPublic.RESOLVE,
  },
  {
    title: "declared projection rejects a changed public member",
    equal: false,
    x: accessor,
    y: { implicit: "implicit", shown: "other" },
    RESOLVE: ClassNonPublic.RESOLVE,
  },
  {
    title: "undeclared projection rejects the narrowed output",
    equal: false,
    x: accessor,
    y: { implicit: "implicit", shown: "shown" },
  },
  // SYMMETRY: AN UNEXPECTED OUTPUT KEY IS A FAILURE
  {
    title: "object rejects an unexpected output property",
    equal: false,
    x: { id: 1 },
    y: { id: 1, extra: "surprise" },
  },
  {
    title: "object accepts an absent optional property",
    equal: true,
    x: { id: 1, note: undefined },
    y: { id: 1 },
  },
  // FUNCTIONS: REFERENCE IDENTITY, NEVER UNCONDITIONAL SUCCESS
  {
    title: "top level function accepts the same reference",
    equal: true,
    x: SHARED,
    y: SHARED,
  },
  {
    title: "top level function rejects a fresh same-source reference",
    equal: false,
    x: SHARED,
    y: (): string => "shared",
  },
  {
    title: "top level function rejects an unrelated object",
    equal: false,
    x: SHARED,
    y: { id: 1 },
  },
  {
    title: "function property rejects a fresh same-source reference",
    equal: false,
    x: { open: SHARED },
    y: { open: (): string => "shared" },
  },
  {
    title: "function property accepts the same reference",
    equal: true,
    x: { open: SHARED },
    y: { open: SHARED },
  },
  // TYPED ARRAYS: THE INTRINSIC BRAND IS PART OF THE CONTRACT
  {
    title: "typed array accepts identical bytes",
    equal: true,
    x: Uint8Array.from([1, 2]),
    y: Uint8Array.from([1, 2]),
  },
  {
    title: "typed array rejects a different element",
    equal: false,
    x: Uint8Array.from([1, 2]),
    y: Uint8Array.from([1, 3]),
  },
  {
    title: "typed array rejects a different brand",
    equal: false,
    x: Uint8Array.from([1, 2]),
    y: Uint16Array.from([1, 2]),
  },
  {
    title: "typed array rejects a plain array of the same numbers",
    equal: false,
    x: Uint8Array.from([1, 2]),
    y: [1, 2],
  },
  // ARRAY BUFFERS: A BYTE LENGTH IS NOT A CONTENT
  {
    title: "array buffer accepts identical bytes",
    equal: true,
    x: buffer(1, 2, 3, 4),
    y: buffer(1, 2, 3, 4),
  },
  {
    title: "array buffer rejects same-length different bytes",
    equal: false,
    x: buffer(1, 2, 3, 4),
    y: buffer(1, 2, 3, 5),
  },
  {
    title: "array buffer rejects a shared backing brand",
    equal: false,
    x: buffer(0, 0),
    y: new SharedArrayBuffer(2),
  },
  // DATA VIEWS: THE VISIBLE WINDOW, NOT THE BACKING LENGTH
  {
    title: "data view accepts the same visible bytes normalized to offset zero",
    equal: true,
    x: new DataView(buffer(9, 1, 2, 8), 1, 2),
    y: new DataView(buffer(1, 2)),
  },
  {
    title: "data view rejects a different visible range",
    equal: false,
    x: new DataView(buffer(9, 1, 2, 8), 1, 2),
    y: new DataView(buffer(9, 1, 2, 8), 2, 2),
  },
  {
    title: "data view rejects same-length different visible bytes",
    equal: false,
    x: new DataView(buffer(1, 2)),
    y: new DataView(buffer(1, 3)),
  },
  {
    title: "data view rejects a whole backing buffer in place of its window",
    equal: false,
    x: new DataView(buffer(9, 1, 2, 8), 1, 2),
    y: new DataView(buffer(9, 1, 2, 8)),
  },
  // NATIVES THE PROTOCOL BUFFER COPY OF THIS WALK NEVER HAD A BRANCH FOR
  {
    title: "date accepts the same instant",
    equal: true,
    x: new Date(1),
    y: new Date(1),
  },
  {
    title: "date rejects a different instant",
    equal: false,
    x: new Date(1),
    y: new Date(2),
  },
  {
    title: "set rejects a different element",
    equal: false,
    x: new Set([1, 2]),
    y: new Set([1, 3]),
  },
  {
    title: "map rejects a different value",
    equal: false,
    x: new Map([["a", 1]]),
    y: new Map([["a", 2]]),
  },
  {
    title: "regexp rejects different flags",
    equal: false,
    x: /a/g,
    y: /a/i,
  },
  {
    title: "array rejects an array-like plain object",
    equal: false,
    x: [1, 2],
    y: { 0: 1, 1: 2, length: 2 },
  },
];
