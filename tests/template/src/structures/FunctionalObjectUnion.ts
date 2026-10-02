import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

/** Supplies a structural union of callable-bearing geometry-shaped records. */
export type FunctionalObjectUnion = FunctionalObjectUnion.Union[];
export namespace FunctionalObjectUnion {
  export const BINARABLE = false;
  export const JSONABLE = false;
  export const PRIMITIVE = false;
  export const RESOLVABLE = false;

  /** Declares the four overlapping callable-bearing record alternatives. */
  export type Union = IPoint | ILine | IPolyline | IPolygon;
  /** Declares numeric coordinates and a required distance callable. */
  export interface IPoint {
    x: number;
    y: number;
    /** Declares callable distance shape without a geometric-result assertion. */
    distance: (p: IPoint) => number;
  }
  /** Declares a two-point record and required length callable. */
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
    /** Declares the line's callable shape without a length-result oracle. */
    length: () => number;
  }
  /** Declares a points-array record with a required length callable. */
  export interface IPolyline {
    points: IPoint[];
    /** Declares polyline callable shape without a length-result assertion. */
    length: () => number;
  }
  /** Declares points and length/area callables for the polygon-shaped input. */
  export interface IPolygon {
    points: IPoint[];
    /** Declares polygon length shape without a geometric-result assertion. */
    length: () => number;
    /** Declares polygon area shape without independent union area certification. */
    area: () => number;
  }

  /** Constructs fresh point, line, polyline and polygon-shaped records. */
  export function generate(): FunctionalObjectUnion {
    return [
      point(),
      {
        p1: point(),
        p2: point(),
        length: () => TestRandomGenerator.integer(),
      },
      {
        points: TestRandomGenerator.array(point),
        length: () => TestRandomGenerator.integer(),
      },
      {
        points: TestRandomGenerator.array(point),
        length: () => TestRandomGenerator.integer(),
        area: () => TestRandomGenerator.integer(),
      },
    ];
  }
  /** Constructs a fresh numeric point with an own distance arrow function. */
  export function point(): IPoint {
    return {
      x: TestRandomGenerator.integer(),
      y: TestRandomGenerator.integer(),
      distance: () => TestRandomGenerator.integer(),
    };
  }

  export const SPOILERS: Spoiler<FunctionalObjectUnion>[] = [
    (input) => {
      if ((input as any)[0]!.length) {
        (input as any)[0]!.length = {} as any;
        return ["$input[0].length"];
      }
      (input as any)[0]!.distance = [] as any;
      return ["$input[0].distance"];
    },
  ];
}
