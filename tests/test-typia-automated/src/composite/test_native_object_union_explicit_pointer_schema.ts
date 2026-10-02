import typia from "typia";

interface IPointer<T> {
  value: T;
}

/**
 * @evidence contracts/testing.md#behavioral-verification The native schema call collects this double-pointer array wrapper and its seven-arm shape union.
 * @evidence contracts/testing.md#independent-expectations Authored discriminator names and field lists anchor schema component checks; wrapper properties themselves are not inspected.
 * @evidence contracts/testing.md#distinguishing-cases Nested generic instantiations must retain seven distinct branch references; exact wrapper names are outside the oracle.
 * @evidence contracts/testing.md#execution-ownership The local schema fixture and exported composite own execution in the shared worker.
 */
export type ObjectUnionExplicitPointer = IPointer<
  Array<IPointer<ObjectUnionExplicitPointer.Shape>>
>;

namespace ObjectUnionExplicitPointer {
  /**
   * @evidence contracts/testing.md#behavioral-verification This seven-arm union reaches the actual native schema generator through pointer array items.
   * @evidence contracts/testing.md#independent-expectations The literal seven-kind list independently requires one matching seven-reference component.
   * @evidence contracts/testing.md#distinguishing-cases Duplicate branch references or missing kinds fail even if the schema otherwise loads.
   * @evidence contracts/testing.md#execution-ownership The enclosing composite owns reference traversal and assertions without another runner.
   */
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

  /**
   * @evidence contracts/testing.md#behavioral-verification Seven instantiations intersect each shape with a literal type property in the native schema call.
   * @evidence contracts/testing.md#independent-expectations Authored kind strings determine distinct component identity and discriminator values independently of generated names.
   * @evidence contracts/testing.md#distinguishing-cases The runtime accepts const or the first enum string as a discriminator; singleton enum cardinality is not asserted.
   * @evidence contracts/testing.md#execution-ownership The local composite owns this generic fixture and component checks in the shared worker.
   */
  export type Discriminator<Type extends string, T extends object> = T & {
    type: Type;
  };

  /**
   * @evidence contracts/testing.md#behavioral-verification Point participates in its own branch and other shapes' references during schema transformation.
   * @evidence contracts/testing.md#independent-expectations The point field list independently requires x and y property entries.
   * @evidence contracts/testing.md#distinguishing-cases Missing either point field fails; numeric property types and required arrays are not inspected.
   * @evidence contracts/testing.md#execution-ownership The exported composite owns this declaration dependency and property checks.
   */
  export interface IPoint {
    x: number;
    y: number;
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Line is collected as the line discriminator's schema branch.
   * @evidence contracts/testing.md#independent-expectations Authored p1 and p2 names determine the independently checked property entries.
   * @evidence contracts/testing.md#distinguishing-cases Both line fields must exist in its distinct component; nested point schemas are not checked by this row.
   * @evidence contracts/testing.md#execution-ownership The enclosing composite owns the line fixture and schema traversal.
   */
  export interface ILine {
    p1: IPoint;
    p2: IPoint;
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Triangle is collected through its discriminated union instantiation.
   * @evidence contracts/testing.md#independent-expectations Authored p1, p2 and p3 names anchor the triangle component's property-presence checks.
   * @evidence contracts/testing.md#distinguishing-cases A component collapsed to a smaller shape loses required property entries; schema required arrays are not inspected.
   * @evidence contracts/testing.md#execution-ownership The exported composite owns this fixture and independent field list.
   */
  export interface ITriangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Rectangle's four-point shape is transformed in its own discriminator branch.
   * @evidence contracts/testing.md#independent-expectations The authored four-name list independently requires p1 through p4 property entries.
   * @evidence contracts/testing.md#distinguishing-cases Missing p4 distinguishes accidental reuse of a triangle component; nested field types are not inspected.
   * @evidence contracts/testing.md#execution-ownership The enclosing composite owns the rectangle declaration and field-presence oracle.
   */
  export interface IRectangle {
    p1: IPoint;
    p2: IPoint;
    p3: IPoint;
    p4: IPoint;
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Polyline participates in its own discriminator and polygon references during transformation.
   * @evidence contracts/testing.md#independent-expectations The literal points name determines its checked property entry.
   * @evidence contracts/testing.md#distinguishing-cases Missing points fails; its array element schema and length constraints are outside this runtime oracle.
   * @evidence contracts/testing.md#execution-ownership The local composite owns this fixture and branch check in the shared worker.
   */
  export interface IPolyline {
    points: IPoint[];
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Polygon's nested polyline shapes reach the actual generator through its discriminator branch.
   * @evidence contracts/testing.md#independent-expectations Authored outer and inner names determine two independently checked property entries.
   * @evidence contracts/testing.md#distinguishing-cases Missing either entry fails; inner array versus outer object schema details are not asserted.
   * @evidence contracts/testing.md#execution-ownership The enclosing exported composite owns polygon traversal and field checks.
   */
  export interface IPolygon {
    outer: IPolyline;
    inner: IPolyline[];
  }

  /**
   * @evidence contracts/testing.md#behavioral-verification Circle is transformed as one of the seven distinct discriminator components.
   * @evidence contracts/testing.md#independent-expectations Authored centroid and radius names independently anchor its property-presence expectations.
   * @evidence contracts/testing.md#distinguishing-cases A circle component missing either field fails; radius numeric semantics are not runtime-validated here.
   * @evidence contracts/testing.md#execution-ownership The local schema fixture and exported composite own the circle branch assertions.
   */
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
 * @evidence contracts/testing.md#independent-expectations Seven authored discriminator literals determine seven distinct references and each branch's property entries. The runtime runner resolves references and checks discriminator and field presence; schema required arrays, exact enum cardinality, field types and wrapper connections are not inspected.
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
