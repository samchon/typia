import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` survives a deliberately enormous tangled graph
 * without hitting TypeScript's instantiation-depth limit.
 *
 * A large web of mutually-referential classes (cycles via optional back-edges)
 * woven through arrays, readonly arrays, fixed/optional tuples, `Set`/`Map`,
 * unions of classes, and multi-level nested object literals — deep along
 * several paths and wide at each node. The pass condition is simply that the
 * type resolves (no "Type instantiation is excessively deep" error) and a
 * correctly-shaped plain value assigns to it; a leaf assertion confirms methods
 * are still stripped at the bottom of the web.
 *
 * 1. Declare nine interlinked classes forming deep + wide + cyclic structure.
 * 2. Resolve `Classifiable` over the root and assign a deep plain value.
 * 3. Assert a leaf class flattens to its method-free property shape.
 *
 * @evidence contracts/testing.md#behavioral-verification The cyclic mixed root must typecheck a deep authored value and extend a head carrying PlainLeaf; the leaf projection must exactly omit its method.
 * @evidence contracts/testing.md#independent-expectations PlainLeaf and the authored monster value independently establish observable leaf data and acceptance. Root head assignability is weaker than full root identity, so unasserted root fields are not certified by that assertion.
 * @evidence contracts/testing.md#distinguishing-cases Nine interlinked classes combine optional back-edges, arrays/tuples, Set/Map and boxed object layers; empty collections, populated branches and native leaf data exercise termination without claiming a maximum supported depth.
 * @evidence contracts/testing.md#execution-ownership test-interface start invokes the installed TypeScript compiler (tsc) with noEmit; ClassifiableDepthStressCases instantiates the real Classifiable alias and its Assert constraints. Authored assignments and expect-error directives also belong to this compile-only unit, without a generated native artifact or runtime host.
 */
export type ClassifiableDepthStressCases = [
  Assert<IsEqual<Classifiable<Leaf>, PlainLeaf>>,
  // the monster root resolves with no depth blow-up AND its `head` leaf is the
  // method-stripped plain shape — a real shape signal, not a vacuous `extends _`
  Assert<Classifiable<Root> extends { head: PlainLeaf } ? true : false>,
];

interface PlainLeaf {
  id: number;
  when: Date;
  raw: Uint8Array;
}

// a fully-populated deep plain value assigns to the classified root
export const monster: Classifiable<Root> = {
  head: { id: 1, when: new Date(), raw: new Uint8Array() },
  branches: [
    {
      alpha: { id: 2, when: new Date(), raw: new Uint8Array() },
      pairs: [[{ ratio: 1 }, { ratio: 2 }]],
      bag: new Set(),
      index: new Map(),
      either: {
        kind: "x",
        x: { id: 3, when: new Date(), raw: new Uint8Array() },
      },
      grid: [],
      box: {
        layer1: {
          layer2: {
            layer3: {
              value: { id: 4, when: new Date(), raw: new Uint8Array() },
            },
          },
        },
      },
    },
  ],
  tags: ["a", "b"],
  spec: [{ ratio: 9 }, { id: 5, when: new Date(), raw: new Uint8Array() }],
};

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Leaf {
  id!: number;
  when!: Date;
  raw!: Uint8Array;
  describe(): string {
    return "";
  }
}

class Ratio {
  ratio!: number;
  invert(): void {}
}

class Variant {
  kind!: "x" | "y";
  x?: Leaf;
  y?: Ratio;
  pick(): void {}
}

class L3 {
  value!: Leaf;
  back?: L2;
  m(): void {}
}
class L2 {
  layer3!: L3;
  sibling?: L2;
  m(): void {}
}
class L1 {
  layer2!: L2;
  m(): void {}
}
class Box {
  layer1!: L1;
  m(): void {}
}

class Branch {
  alpha!: Leaf;
  pairs!: [Ratio, Ratio][];
  bag!: Set<Leaf>;
  index!: Map<string, Ratio[]>;
  either!: Variant;
  grid!: readonly (readonly [Leaf, Ratio?])[];
  box!: Box;
  parent?: Root;
  cousins?: Branch[];
  m(): void {}
}

class Root {
  head!: Leaf;
  branches!: Branch[];
  tags!: readonly string[];
  spec!: [Ratio, Leaf];
  self?: Root;
  audit(): void {}
}
