import typia from "typia";

export type InstanceUnion = InstanceUnion.Union[];
namespace InstanceUnion {
  export type Union =
    | number
    | Uint8Array
    | Set<boolean>
    | Map<any, any>
    | [string, string]
    | [boolean, number, number]
    | number[]
    | boolean[]
    | []
    | ObjectSimple
    | ObjectUnionExplicit;
}

export interface ObjectSimple {
  scale: IPoint3D;
  position: IPoint3D;
  rotate: IPoint3D;
  pivot: IPoint3D;
}
export interface IPoint3D {
  x: number;
  y: number;
  z: number;
}

export type ObjectUnionExplicit = Array<
  | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>
  | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>
  | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>
  | ObjectUnionExplicit.Discriminator<
      "rectangle",
      ObjectUnionExplicit.IRectangle
    >
  | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>
  | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>
  | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>
>;
namespace ObjectUnionExplicit {
  export type Discriminator<Type extends string, T extends object> = T & {
    type: Type;
  };
  export interface IPoint {
    x: number;
    y: number;
  }
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
  }
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
  }
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
  }
  export interface IPolyline {
    points: IPoint[];
  }
  export interface IPolygon {
    outer: IPolyline;
    inner: IPolyline[];
  }
  export interface ICircle {
    centroid: IPoint;
    radius: number;
  }
}

const isInstanceUnion = typia.createIs<InstanceUnion>();
const fixture = { isInstanceUnion };

/**
 * Verifies instance union create is in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * instanceUnionCreateIsSource declarations; the former
 * instanceUnionCreateIsRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from instanceUnionCreateIsRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored scalars, typed arrays, sets, maps, tuples, ordinary arrays, simple objects and discriminator geometries establish the union alternatives. Wrong set elements, tuple members and missing or malformed geometry members are independently rejecting controls.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_instance_union_create_is in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed instanceUnionCreateIsSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/instance_union_create_is_transform_test.go instanceUnionCreateIsRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_instance_union_create_is = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const { isInstanceUnion }: any = mod;

  const point: any = (value: any): any => ({
    x: value,
    y: value + 1,
    z: value + 2,
  });
  const simple: any = {
    scale: point(1),
    position: point(4),
    rotate: point(7),
    pivot: point(10),
  };
  const union: any = [
    { type: "point", x: 1, y: 2 },
    { type: "line", p1: { x: 1, y: 2 }, p2: { x: 3, y: 4 } },
    {
      type: "triangle",
      p1: { x: 1, y: 2 },
      p2: { x: 3, y: 4 },
      p3: { x: 5, y: 6 },
    },
    {
      type: "rectangle",
      p1: { x: 1, y: 2 },
      p2: { x: 3, y: 4 },
      p3: { x: 5, y: 6 },
      p4: { x: 7, y: 8 },
    },
    { type: "polyline", points: [{ x: 1, y: 2 }] },
    {
      type: "polygon",
      outer: { points: [{ x: 1, y: 2 }] },
      inner: [{ points: [{ x: 3, y: 4 }] }],
    },
    { type: "circle", centroid: { x: 1, y: 2 }, radius: 5 },
  ];
  const valid: any = [
    3,
    new Uint8Array([1, 2]),
    new Set([false, true]),
    new Map([[{ key: 1 }, { value: 2 }]]),
    ["one", "two"],
    [false, 1, 2],
    [1, 2, 3],
    [true, false],
    [],
    simple,
    union,
  ];

  const cases: any = [
    ["valid", valid, true],
    ["bad set element", [new Set([false, "x"])], false],
    ["bad tuple", [["one", 2]], false],
    [
      "bad object property",
      [{ ...simple, pivot: { ...simple.pivot, z: "x" } }],
      false,
    ],
    [
      "bad discriminator",
      [[{ type: "circle", centroid: { x: 1, y: 2 } }]],
      false,
    ],
  ];

  for (const [name, input, expected] of cases) {
    const actual: any = isInstanceUnion(input);
    if (actual !== expected) {
      throw new Error(name + ": expected " + expected + " but got " + actual);
    }
  }
};
