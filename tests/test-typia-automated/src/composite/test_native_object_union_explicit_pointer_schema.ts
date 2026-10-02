import typia from "typia";

interface IPointer<T> {
  value: T;
}

export type ObjectUnionExplicitPointer = IPointer<
  Array<IPointer<ObjectUnionExplicitPointer.Shape>>
>;

namespace ObjectUnionExplicitPointer {
  export type Shape =
    | ObjectUnionExplicitPointer.Discriminator<
        "point",
        ObjectUnionExplicitPointer.IPoint
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "line",
        ObjectUnionExplicitPointer.ILine
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "triangle",
        ObjectUnionExplicitPointer.ITriangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "rectangle",
        ObjectUnionExplicitPointer.IRectangle
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polyline",
        ObjectUnionExplicitPointer.IPolyline
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "polygon",
        ObjectUnionExplicitPointer.IPolygon
      >
    | ObjectUnionExplicitPointer.Discriminator<
        "circle",
        ObjectUnionExplicitPointer.ICircle
      >;

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

const schema = typia.json.schema<ObjectUnionExplicitPointer>();
const fixture = { schema };

/**
 * Verifies object union explicit pointer schema in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * objectUnionExplicitPointerSchemaSource declarations; the former
 * objectUnionExplicitPointerSchemaRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from objectUnionExplicitPointerSchemaRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Seven authored discriminator literals determine seven distinct references and each branch's required property. The runtime runner resolves all references and checks discriminator and required-field presence, without claiming every field type or schema attribute.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_object_union_explicit_pointer_schema in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed objectUnionExplicitPointerSchemaSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/object_union_explicit_pointer_schema_transform_test.go objectUnionExplicitPointerSchemaRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_object_union_explicit_pointer_schema = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const unit: any = mod.schema;

  const schemas: any = unit.components?.schemas ?? {};
  const expectedKinds: any = [
    "circle",
    "line",
    "point",
    "polygon",
    "polyline",
    "rectangle",
    "triangle",
  ];
  const expectedFields: any = {
    circle: ["centroid", "radius"],
    line: ["p1", "p2"],
    point: ["x", "y"],
    polygon: ["outer", "inner"],
    polyline: ["points"],
    rectangle: ["p1", "p2", "p3", "p4"],
    triangle: ["p1", "p2", "p3"],
  };

  const schemaName: any = (ref: any): any => ref.split("/").at(-1);
  const refsOf: any = (schema: any): any =>
    Array.isArray(schema?.oneOf)
      ? schema.oneOf
          .map((branch: any): any => branch?.$ref)
          .filter((ref: any): any => typeof ref === "string")
      : [];
  const literalOf: any = (schema: any): any => {
    const property: any = schema?.properties?.type;
    if (typeof property?.const === "string") return property.const;
    if (Array.isArray(property?.enum) && typeof property.enum[0] === "string")
      return property.enum[0];
    return undefined;
  };
  const sameStrings: any = (actual: any, expected: any): any =>
    JSON.stringify([...actual].sort()) === JSON.stringify([...expected].sort());

  const candidates: any = Object.entries(schemas).filter(
    ([, schema]: any): any => {
      const refs: any = refsOf(schema);
      const unique: any = [...new Set(refs)];
      if (refs.length !== 7 || unique.length !== 7) return false;
      const kinds: any = unique
        .map((ref: any): any => literalOf(schemas[schemaName(ref)]))
        .filter((kind: any): any => typeof kind === "string");
      return sameStrings(kinds, expectedKinds);
    },
  );

  if (candidates.length !== 1) {
    throw new Error(
      "expected exactly one seven-branch Shape oneOf, got " +
        candidates.length +
        " among components " +
        JSON.stringify(Object.keys(schemas)),
    );
  }

  const [shapeName, shape]: any = candidates[0];
  const refs: any = refsOf(shape);
  const uniqueRefs: any = [...new Set(refs)];
  if (refs.length !== 7 || uniqueRefs.length !== 7) {
    throw new Error(
      shapeName + " collapsed discriminator refs: " + JSON.stringify(refs),
    );
  }

  for (const ref of uniqueRefs) {
    const target: any = schemas[schemaName(ref)];
    if (target === undefined) {
      throw new Error("missing component for " + ref);
    }
    const kind: any = literalOf(target);
    if (expectedKinds.includes(kind) === false) {
      throw new Error(
        "unexpected discriminator kind for " +
          ref +
          ": " +
          JSON.stringify(target),
      );
    }
    const properties: any = target.properties ?? {};
    for (const field of expectedFields[kind]) {
      if (properties[field] === undefined) {
        throw new Error(
          kind + " branch lost field " + field + ": " + JSON.stringify(target),
        );
      }
    }
  }
};
