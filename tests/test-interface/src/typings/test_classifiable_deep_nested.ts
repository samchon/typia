import { Classifiable } from "@typia/interface";

/**
 * Verifies `Classifiable<T>` recurses cleanly through deep class nesting.
 *
 * The property arm must strip methods and recurse at _every_ depth, threading
 * through object members, arrays of classes, fixed tuples of classes, optional
 * and `readonly` members, and native/boxed leaves five levels down. A
 * regression at any depth surfaces as a mismatch against the hand-written,
 * fully-classified shape.
 *
 * 1. Build `Dealer → Garage → Car → Engine/Wheel → native` (5 levels).
 * 2. Apply `Classifiable` at every level.
 * 3. Compare against the exhaustive plain shape, methods omitted throughout.
 */
export type ClassifiableDeepNestedCases = [
  Assert<IsEqual<Classifiable<Engine>, PlainEngine>>,
  Assert<IsEqual<Classifiable<Wheel>, PlainWheel>>,
  Assert<IsEqual<Classifiable<Car>, PlainCar>>,
  Assert<IsEqual<Classifiable<Garage>, PlainGarage>>,
  Assert<IsEqual<Classifiable<Dealer>, PlainDealer>>,
];

export const deep: Classifiable<Dealer> = {
  name: "D",
  main: {
    label: "G",
    cars: [
      {
        engine: { power: 1, serial: new Uint8Array() },
        wheels: [{ radius: 1, madeAt: new Date() }],
        spec: [
          { power: 2, serial: new Uint8Array() },
          { radius: 2, madeAt: new Date() },
        ],
      },
    ],
    built: [],
  },
  garages: [],
  tags: ["a"],
};

type Assert<T extends true> = T;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
    ? (<T>() => T extends Y ? 1 : 2) extends <T>() => T extends X ? 1 : 2
      ? true
      : false
    : false;

class Engine {
  power!: number;
  serial!: Uint8Array;
  start(): void {}
}

class Wheel {
  radius!: number;
  readonly madeAt!: Date;
  spin(): void {}
}

class Car {
  engine!: Engine;
  wheels!: Wheel[];
  spec!: [Engine, Wheel];
  describe(): string {
    return "";
  }
}

class Garage {
  label!: string;
  cars!: Car[];
  flagship?: Car;
  readonly built!: Car[];
  open(): void {}
}

class Dealer {
  name!: string;
  main!: Garage;
  garages!: Garage[];
  tags!: readonly string[];
  audit(): void {}
}

interface PlainEngine {
  power: number;
  serial: Uint8Array;
}

interface PlainWheel {
  radius: number;
  readonly madeAt: Date;
}

interface PlainCar {
  engine: PlainEngine;
  wheels: PlainWheel[];
  spec: [PlainEngine, PlainWheel];
}

interface PlainGarage {
  label: string;
  cars: PlainCar[];
  flagship?: PlainCar;
  readonly built: PlainCar[];
}

interface PlainDealer {
  name: string;
  main: PlainGarage;
  garages: PlainGarage[];
  tags: readonly string[];
}
