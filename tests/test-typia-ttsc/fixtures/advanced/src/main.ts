import typia from "typia";

// Discriminated union: the canonical `kind`-tagged variant pattern.
// Every validator must allow exactly one branch based on the discriminant.
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number };

export const isShape = (x: unknown): boolean => typia.is<Shape>(x);

// Mapped type — Partial<T>: every property becomes optional.
interface Base {
  id: string;
  name: string;
  score: number;
}
type PartialBase = Partial<Base>;
export const isPartial = (x: unknown): boolean => typia.is<PartialBase>(x);

// Mapped type — Pick<T, K>: narrow a type down.
type PickedBase = Pick<Base, "id" | "name">;
export const isPicked = (x: unknown): boolean => typia.is<PickedBase>(x);

// Readonly array of literal union — `readonly` is a TS-only modifier so the
// rewriter must still accept arbitrary string[] at runtime.
type Levels = readonly ("low" | "medium" | "high")[];
export const isLevels = (x: unknown): boolean => typia.is<Levels>(x);

// Deeply nested optional chain — three levels of optional properties.
interface Deep {
  a?: {
    b?: {
      c?: string;
    };
  };
}
export const isDeep = (x: unknown): boolean => typia.is<Deep>(x);
