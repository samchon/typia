import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies native coercion preserves an encoded discriminated geometry graph.
 *
 * Type acceptance alone permits a result that lost every shape. Independent
 * literal data pins the native schema-to-utility connection and the conversion
 * of repeated object/array encodings without using its validator as the data
 * oracle. Deterministic points replace incidental random fixture production.
 *
 * 1. Coerce all six declared geometry variants with encoded shapes, points,
 *    numeric fields and nested arrays, preserving already valid fields.
 * 2. Compare the complete world with an independent literal and retain the
 *    existing native type acceptance check.
 * 3. Retain a non-convertible radius in an adjacent input and require the native
 *    assertion to reject it rather than accepting erased data.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual native typia.llm.coerce calls must preserve complete shapes, order, coordinates and nested rings while converting authored encoded numeric/object/array fields. Whole-world literals detect dropped or altered data that typia.assert alone accepts; the adjacent invalid radius remains present and is rejected.
 * @evidence contracts/testing.md#independent-expectations Hand-authored point values and complete expected geometry literals are specified independently of conversion and do not share mutable input members. Native JSON.stringify only constructs encoded fixture inputs. The retained native assertion checks acceptance/rejection separately and does not define expected data or certify its own transform.
 * @evidence contracts/testing.md#distinguishing-cases Point, circle, triangle, rectangle, polyline and polygon cover every declared discriminator with positive/negative/fractional coordinates, already valid point fields and repeatedly encoded members/arrays. A radius that cannot become a number must remain for validation; the rejection assertion establishes a throw without claiming its diagnostic path or text, owned by assertion diagnostic tests.
 * @evidence contracts/testing.md#execution-ownership test-utils start discovers the matching export through DynamicExecutor and the real ttsx/typia native producer. This case retains native emitted IWorld coercer/validator assembly; portable conversion decisions execute separately in test-utils-unit.
 * @evidence contracts/e2e.md#necessary-boundary The native transformer emits the IWorld discriminated reference graph and calls the internal runtime coerce bridge; complete literal outputs prove the generated graph is consumable for every geometry variant. Direct authored utility schemas cannot expose a broken generated definition/discriminator or runtime helper binding.
 * @evidence contracts/e2e.md#shared-execution The existing suite case shares one native producer/host and workspace artifact cache across its geometry inputs. No separate installation, Go build or host is created for each shape. The two call sites differ in valid versus unconvertible payload; portable spellings and nesting matrices use direct units.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each call has its own authored input and independent expected literal; no prior output or random seed becomes another expectation. The suite owns native host/cache lifetime and this case creates no process, handle or temporary directory. This is warm runtime assembly coverage, not a cold-cache transition.
 * @evidence contracts/e2e.md#preserved-coverage The original encoded circle/triangle/rectangle, point-field conversion and native acceptance assertion remain in this executable case with deterministic fixture values and complete data assertions. Added point/polyline/polygon and invalid-radius cases strengthen distinctions. Incidental random point production is removed from this coercion case; dedicated native random matrices own that operation, and 37 portable coercion cases remain in direct units.
 */
export const test_llm_coerce_json_stringify_overlapped = (): void => {
  const circle: ICircle = {
    type: "circle",
    center: JSON.stringify({ type: "point", x: 1, y: 2 }) as any,
    radius: JSON.stringify(5) as any,
  };
  const triangle: ITriangle = {
    type: "triangle",
    p1: JSON.stringify({ type: "point", x: -3, y: 4.5 }) as any,
    p2: { type: "point", x: "3" as any, y: 4 } satisfies IPoint,
    p3: { type: "point", x: 5, y: -6 },
  };
  const rectangle: IRectangle = {
    type: "rectangle",
    p1: JSON.stringify({ type: "point", x: 7, y: 8 }) as any,
    p2: { type: "point", x: "3" as any, y: 4 } satisfies IPoint,
  };
  const point: IPoint = { type: "point", x: "9" as any, y: "-10" as any };
  const polyline: IPolyline = {
    type: "polyline",
    points: JSON.stringify([
      JSON.stringify({ type: "point", x: "11", y: 12 }),
      { type: "point", x: 13, y: 14 },
    ]) as any,
  };
  const polygon: IPolygon = {
    type: "polygon",
    outer: JSON.stringify([
      JSON.stringify({ type: "point", x: "15", y: 16 }),
      { type: "point", x: 17, y: 18 },
    ]) as any,
    inner: JSON.stringify([
      JSON.stringify([
        JSON.stringify({ type: "point", x: "19", y: 20 }),
        { type: "point", x: 0, y: -0.5 },
      ]),
    ]) as any,
  };
  const brokenWorld: IWorld = {
    shapes: [circle, triangle, rectangle, point, polyline, polygon].map(
      (shape) => JSON.stringify(shape) as any as IShape,
    ),
  };
  const coerced: IWorld = typia.llm.coerce<IWorld>(brokenWorld);
  TestEquality.equals("complete encoded geometry", coerced, {
    shapes: [
      { type: "circle", center: { type: "point", x: 1, y: 2 }, radius: 5 },
      {
        type: "triangle",
        p1: { type: "point", x: -3, y: 4.5 },
        p2: { type: "point", x: 3, y: 4 },
        p3: { type: "point", x: 5, y: -6 },
      },
      {
        type: "rectangle",
        p1: { type: "point", x: 7, y: 8 },
        p2: { type: "point", x: 3, y: 4 },
      },
      { type: "point", x: 9, y: -10 },
      {
        type: "polyline",
        points: [
          { type: "point", x: 11, y: 12 },
          { type: "point", x: 13, y: 14 },
        ],
      },
      {
        type: "polygon",
        outer: [
          { type: "point", x: 15, y: 16 },
          { type: "point", x: 17, y: 18 },
        ],
        inner: [
          [
            { type: "point", x: 19, y: 20 },
            { type: "point", x: 0, y: -0.5 },
          ],
        ],
      },
    ],
  } satisfies IWorld);
  typia.assert(coerced);

  const invalid: IWorld = typia.llm.coerce<IWorld>({
    shapes: [
      JSON.stringify({
        type: "circle",
        center: { type: "point", x: "1", y: 2 },
        radius: "broken",
      }),
    ],
  } as any);
  TestEquality.equals<unknown>("unconvertible radius retained", invalid, {
    shapes: [
      {
        type: "circle",
        center: { type: "point", x: 1, y: 2 },
        radius: "broken",
      },
    ],
  });
  TestEquality.equals(
    "unconvertible radius rejected",
    TestEquality.thrown(() => typia.assert(invalid)) !== undefined,
    true,
  );
};

interface IWorld {
  shapes: IShape[];
}
type IShape = IPoint | ICircle | ITriangle | IRectangle | IPolyline | IPolygon;
interface IPoint {
  type: "point";
  x: number;
  y: number;
}
interface ICircle {
  type: "circle";
  center: IPoint;
  radius: number;
}
interface ITriangle {
  type: "triangle";
  p1: IPoint;
  p2: IPoint;
  p3: IPoint;
}
interface IRectangle {
  type: "rectangle";
  p1: IPoint;
  p2: IPoint;
}
interface IPolyline {
  type: "polyline";
  points: IPoint[];
}
interface IPolygon {
  type: "polygon";
  outer: IPoint[];
  inner: IPoint[][];
}
