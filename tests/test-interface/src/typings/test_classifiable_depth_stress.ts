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
 * 1. Declare ~14 interlinked classes forming deep + wide + cyclic structure.
 * 2. Resolve `Classifiable` over the root and assign a deep plain value.
 * 3. Assert a leaf class flattens to its method-free property shape.
 */
export type ClassifiableDepthStressCases = [
  Assert<IsEqual<Classifiable<Leaf>, PlainLeaf>>,
  // the monster root resolves to *something* assignable (no depth blow-up)
  Assert<Classifiable<Root> extends infer _ ? true : false>,
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
