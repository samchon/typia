import typia from "typia";

/**
 * Defines the mixed-array native helper collision fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification The generated createIs consumes every Union element in the outer array.
 * @evidence contracts/testing.md#independent-expectations Authored valid population and four literal false controls supply the verdicts.
 * @evidence contracts/testing.md#distinguishing-cases Native/container/tuple/ordinary-object arms share one callback; malformed set/tuple/point/circle inputs reject.
 * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
 */
export type InstanceUnion = InstanceUnion.Union[];
namespace InstanceUnion {
  /**
   * Defines the eleven alternatives sharing one native checker.
   *
   * @evidence contracts/testing.md#behavioral-verification The valid population includes one number, typed array, Set, Map, both tuples, both ordinary arrays, empty array and both object forms.
   * @evidence contracts/testing.md#independent-expectations Concrete authored values pin acceptance independently of the native predicate.
   * @evidence contracts/testing.md#distinguishing-cases Bad set elements and tuple members contrast with valid values; Map any entries impose no content restriction.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
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

/**
 * Defines four repeated point properties for object helper reuse.
 *
 * @evidence contracts/testing.md#behavioral-verification The consumer supplies scale/position/rotate/pivot and checks the mixed array succeeds.
 * @evidence contracts/testing.md#independent-expectations The local point producer supplies literal consecutive numeric coordinates.
 * @evidence contracts/testing.md#distinguishing-cases Changing pivot.z to string must reject; separate helper identities are not inspected.
 * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
 */
export interface ObjectSimple {
  scale: IPoint3D;
  position: IPoint3D;
  rotate: IPoint3D;
  pivot: IPoint3D;
}
/**
 * Defines the reused three-number point fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification All four ObjectSimple properties use this exact shape.
 * @evidence contracts/testing.md#independent-expectations Local coordinate values and the authored pivot.z string mutation provide independent expectations.
 * @evidence contracts/testing.md#distinguishing-cases Valid numeric coordinates accept and the mutated z rejects; no coordinate range is required.
 * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
 */
export interface IPoint3D {
  x: number;
  y: number;
  z: number;
}

/**
 * Defines the seven tagged geometry alternatives inside a nested array.
 *
 * @evidence contracts/testing.md#behavioral-verification All seven geometry literals are included in the accepting outer population.
 * @evidence contracts/testing.md#independent-expectations Authored tags and member payloads establish the expected valid structure.
 * @evidence contracts/testing.md#distinguishing-cases A circle lacking radius rejects; each other arm has a positive observation only.
 * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
 */
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
  /**
   * Adds an exact geometry tag to each member fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification The union consumer binds each of seven literal tags to its matching geometry.
   * @evidence contracts/testing.md#independent-expectations Independent authored string tags pair with source member requirements.
   * @evidence contracts/testing.md#distinguishing-cases The missing-radius circle case tests its payload, not every wrong-tag spelling.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export type Discriminator<Type extends string, T extends object> = T & {
    type: Type;
  };
  /**
   * Defines the two-number geometry leaf.
   *
   * @evidence contracts/testing.md#behavioral-verification Point and all composed geometries supply authored x/y values.
   * @evidence contracts/testing.md#independent-expectations The literal geometry population supplies valid coordinates independently of createIs.
   * @evidence contracts/testing.md#distinguishing-cases This leaf has positive coverage; the negative circle case omits radius rather than spoiling coordinates.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface IPoint {
    x: number;
    y: number;
  }
  /**
   * Defines a geometry with two point endpoints.
   *
   * @evidence contracts/testing.md#behavioral-verification The line-tagged accepting literal supplies p1 and p2.
   * @evidence contracts/testing.md#independent-expectations Each endpoint is authored as a numeric point in the consumer.
   * @evidence contracts/testing.md#distinguishing-cases This arm has a positive observation; missing-endpoint controls are not enrolled.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
  }
  /**
   * Defines the three-point triangle fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification The triangle-tagged accepting literal supplies p1/p2/p3.
   * @evidence contracts/testing.md#independent-expectations The local geometry literal supplies all required numeric points.
   * @evidence contracts/testing.md#distinguishing-cases This arm has a positive observation; triangle-specific rejection is not independently asserted.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
  }
  /**
   * Defines the four-point rectangle fixture.
   *
   * @evidence contracts/testing.md#behavioral-verification The rectangle-tagged accepting literal supplies p1 through p4.
   * @evidence contracts/testing.md#independent-expectations Four authored point values establish the expected structure.
   * @evidence contracts/testing.md#distinguishing-cases This arm has a positive observation; it imposes no geometric rectangularity constraint.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
  }
  /**
   * Defines an array of geometry points.
   *
   * @evidence contracts/testing.md#behavioral-verification The polyline and polygon literals both exercise this leaf container.
   * @evidence contracts/testing.md#independent-expectations The authored point arrays supply expected valid numeric members.
   * @evidence contracts/testing.md#distinguishing-cases Positive direct/nested uses execute; malformed array-member rejection is not enrolled here.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface IPolyline {
    points: IPoint[];
  }
  /**
   * Defines an outer polyline with inner polylines.
   *
   * @evidence contracts/testing.md#behavioral-verification The polygon literal supplies both outer and one inner boundary.
   * @evidence contracts/testing.md#independent-expectations Authored nested point arrays establish the valid structure.
   * @evidence contracts/testing.md#distinguishing-cases This is a positive nested-container observation, without polygon topology or empty-hole requirements.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
  export interface IPolygon {
    outer: IPolyline;
    inner: IPolyline[];
  }
  /**
   * Defines centroid and numeric radius for a circle.
   *
   * @evidence contracts/testing.md#behavioral-verification The valid circle has radius5; a separate circle omits radius.
   * @evidence contracts/testing.md#independent-expectations The authored presence/absence of the required radius supplies opposite verdicts.
   * @evidence contracts/testing.md#distinguishing-cases Valid centroid/radius accepts and absent radius rejects; no positivity constraint is declared.
   * @evidence contracts/testing.md#execution-ownership test_native_instance_union_create_is owns runtime observations; this declaration supplies the native callback input shape.
   */
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
