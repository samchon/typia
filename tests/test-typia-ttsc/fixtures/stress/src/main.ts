import typia from "typia";

// Wide object (50 fields) — exercises the emitter's per-property emission
// loop and tsgo's property walk on a non-trivial shape. Real DTOs rarely
// hit this width, but it's a cheap canary for O(n²) regressions.
interface Wide {
  a1: string; a2: string; a3: string; a4: string; a5: string;
  b1: number; b2: number; b3: number; b4: number; b5: number;
  c1: boolean; c2: boolean; c3: boolean; c4: boolean; c5: boolean;
  d1: string; d2: string; d3: string; d4: string; d5: string;
  e1: number; e2: number; e3: number; e4: number; e5: number;
  f1: boolean; f2: boolean; f3: boolean; f4: boolean; f5: boolean;
  g1: string; g2: string; g3: string; g4: string; g5: string;
  h1: number; h2: number; h3: number; h4: number; h5: number;
  i1: boolean; i2: boolean; i3: boolean; i4: boolean; i5: boolean;
  j1: string; j2: string; j3: string; j4: string; j5: string;
}
export const isWide = (x: unknown): boolean => typia.is<Wide>(x);

// Deep nesting (5 levels) — exercises the recursion-aware emit path on a
// non-recursive but deeply structured type.
interface L5 { v: number }
interface L4 { l5: L5 }
interface L3 { l4: L4 }
interface L2 { l3: L3 }
interface L1 { l2: L2 }
export const isL1 = (x: unknown): boolean => typia.is<L1>(x);

// Array of 20 disjoint object unions — pushes the emitter's alternation
// logic (stable-sort + OR chain) to a width it won't see in typical code.
type Variant =
  | { k: "a" } | { k: "b" } | { k: "c" } | { k: "d" } | { k: "e" }
  | { k: "f" } | { k: "g" } | { k: "h" } | { k: "i" } | { k: "j" }
  | { k: "k" } | { k: "l" } | { k: "m" } | { k: "n" } | { k: "o" }
  | { k: "p" } | { k: "q" } | { k: "r" } | { k: "s" } | { k: "t" };
export const isVariantArr = (x: unknown): boolean => typia.is<Variant[]>(x);
