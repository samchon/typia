import { TestEquality } from "@typia/template/equality";
import { _isUniqueItems } from "typia/lib/internal/_isUniqueItems";

/**
 * Verifies structural uniqueness directly on portable runtime values.
 *
 * The original schema case mixed this direct helper matrix with two generated
 * tag checks. Keep every helper input and assertion here, while the native case
 * verifies both tag spellings on duplicate, distinct and empty arrays.
 *
 * 1. Compare independently authored duplicate and distinct container twins.
 * 2. Preserve ordering, visible-byte, brand, key and cyclic-state distinctions.
 * 3. Keep optional platform branches without replacing absent constructors.
 */
export const test_validate_unique_items_structural_helper = (): void => {
  const duplicateObject = { id: 1 };
  const structurallyDuplicate = { id: 1 };
  const nullPrototype = Object.assign(Object.create(null), { id: 1 });

  assertUnique("empty", [], true);
  assertUnique("one item", [duplicateObject], true);
  assertUnique("strict primitive duplicate", [1, 1], false);
  assertUnique("strict primitive distinction", [1, "1"], true);
  assertUnique("strict NaN distinction", [Number.NaN, Number.NaN], true);
  assertUnique("strict signed zero duplicate", [0, -0], false);
  assertUnique(
    "mixed duplicate after primitive",
    [0, duplicateObject, structurallyDuplicate],
    false,
  );
  assertUnique(
    "mixed duplicate before primitive",
    [duplicateObject, structurallyDuplicate, 0],
    false,
  );
  assertUnique("different array lengths forward", [[1], [1, 2]], true);
  assertUnique("different array lengths reverse", [[1, 2], [1]], true);
  assertUnique(
    "different own keys",
    [{ x: undefined }, { y: undefined }],
    true,
  );
  assertUnique(
    "null prototype structural duplicate",
    [duplicateObject, nullPrototype],
    false,
  );
  const symbol: unique symbol = Symbol("key");
  assertUnique(
    "enumerable symbol structural duplicate",
    [{ [symbol]: 1 }, { [symbol]: 1 }],
    false,
  );
  assertUnique(
    "enumerable symbol distinction",
    [{ [symbol]: 1 }, { [symbol]: 2 }],
    true,
  );

  assertUnique(
    "deep sets",
    [new Set([{ id: 1 }]), new Set([{ id: 1 }])],
    false,
  );
  assertUnique(
    "set order does not matter",
    [new Set([{ id: 1 }, 2]), new Set([2, { id: 1 }])],
    false,
  );
  assertUnique(
    "different sets",
    [new Set([{ id: 1 }]), new Set([{ id: 2 }])],
    true,
  );
  assertUnique(
    "deep maps",
    [
      new Map([[{ id: 1 }, { value: 2 }]]),
      new Map([[{ id: 1 }, { value: 2 }]]),
    ],
    false,
  );
  assertUnique(
    "map order does not matter",
    [
      new Map<any, any>([
        [{ id: 1 }, { value: 2 }],
        ["other", 3],
      ]),
      new Map<any, any>([
        ["other", 3],
        [{ id: 1 }, { value: 2 }],
      ]),
    ],
    false,
  );
  assertUnique(
    "different maps",
    [new Map([[{ id: 1 }, 2]]), new Map([[{ id: 1 }, 3]])],
    true,
  );

  assertUnique("boxed booleans", [new Boolean(true), new Boolean(true)], false);
  assertUnique("boxed bigints", [Object(1n), Object(1n)], false);
  assertUnique("boxed numbers", [new Number(1), new Number(1)], false);
  assertUnique("boxed strings", [new String("x"), new String("x")], false);
  assertUnique(
    "boxed registered symbols",
    [Object(Symbol.for("typia.unique")), Object(Symbol.for("typia.unique"))],
    false,
  );
  assertUnique("dates", [new Date(1), new Date(1)], false);
  assertUnique("different dates", [new Date(1), new Date(2)], true);
  assertUnique("regular expressions", [/x/gi, /x/gi], false);
  assertUnique("regular expression flags", [/x/g, /x/i], true);

  const firstBytes = new Uint8Array([9, 1, 2, 9]);
  const secondBytes = new Uint8Array([8, 1, 2, 8]);
  assertUnique(
    "visible DataView bytes",
    [
      new DataView(firstBytes.buffer, 1, 2),
      new DataView(secondBytes.buffer, 1, 2),
    ],
    false,
  );
  assertUnique(
    "different DataView bytes",
    [
      new DataView(new Uint8Array([1]).buffer),
      new DataView(new Uint8Array([2]).buffer),
    ],
    true,
  );
  assertUnique(
    "typed-array visible bytes",
    [new Uint8Array([9, 1, 2, 9]).subarray(1, 3), new Uint8Array([1, 2])],
    false,
  );
  assertUnique(
    "typed-array classes differ",
    [new Uint8Array([0, 0]), new Uint16Array([0])],
    true,
  );
  assertUnique(
    "array buffers",
    [new Uint8Array([1, 2]).buffer, new Uint8Array([1, 2]).buffer],
    false,
  );
  if (typeof SharedArrayBuffer !== "undefined")
    assertUnique(
      "shared array buffers",
      [
        Object.assign(new SharedArrayBuffer(2), {}),
        Object.assign(new SharedArrayBuffer(2), {}),
      ],
      false,
    );
  if (typeof Blob !== "undefined") {
    assertUnique("blobs", [new Blob(["x"]), new Blob(["x"])], false);
    assertUnique(
      "different blob metadata",
      [new Blob(["x"], { type: "text/plain" }), new Blob(["x"])],
      true,
    );
  }
  if (typeof File !== "undefined") {
    assertUnique(
      "files",
      [
        new File(["x"], "x.txt", { type: "text/plain", lastModified: 1 }),
        new File(["x"], "x.txt", { type: "text/plain", lastModified: 1 }),
      ],
      false,
    );
    assertUnique(
      "different file metadata",
      [new File(["x"], "x.txt"), new File(["x"], "y.txt")],
      true,
    );
  }

  const left: { id: number; self?: unknown } = { id: 1 };
  const right: { id: number; self?: unknown } = { id: 1 };
  left.self = left;
  right.self = right;
  assertUnique("cycles", [left, right], false);
  right.id = 2;
  assertUnique("different cycles", [left, right], true);
};

const assertUnique = (
  label: string,
  input: unknown[],
  expected: boolean,
): void => TestEquality.equals(label, _isUniqueItems(input), expected);
