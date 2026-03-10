import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

export const test_llm_schema_oneof = (): void => {
  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IPoint | ILine | ITriangle | IRectangle]>();

  const $defs: Record<string, ILlmSchema> = {};
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      $defs,
      components: collection.components,
      schema: collection.schemas[0]!,
    });
  TestValidator.predicate("success", result.success);
  TestValidator.predicate("anyOf length", () => {
    const anyOf = (result as any)?.value?.anyOf;
    return Array.isArray(anyOf) && anyOf.length === 4;
  });
  TestValidator.equals(
    "types",
    ["point", "line", "triangle", "rectangle"],
    Object.values($defs)
      .map((def: any) => def.properties?.type?.enum?.[0])
      .filter(Boolean)
      .sort((a: string, b: string) => {
        const order = ["point", "line", "triangle", "rectangle"];
        return order.indexOf(a) - order.indexOf(b);
      }),
  );
};

interface IPoint {
  type: "point";
  x: number;
  y: number;
}
interface ILine {
  type: "line";
  p1: IPoint;
  p2: IPoint;
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
  p3: IPoint;
  p4: IPoint;
}
