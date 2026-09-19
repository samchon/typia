import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import { LlmSchemaConverter } from "@typia/utils";
import typia, { IJsonSchemaCollection, ILlmSchema } from "typia";

export const test_llm_schema_enum = (): void => {
  const collection: IJsonSchemaCollection = typia.json.schemas<[IBbsArticle]>();
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: collection.schemas[0] as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference,
    });
  TestEquality.equals("success", result.success, true);
  if (result.success === false) return;

  const formatted: ILlmSchema.IParameters = result.value;
  const formatProp = formatted.properties.format as ILlmSchema.IString;
  TestEquality.equals("enum", formatProp.enum, ["html", "md", "txt"]);
};

interface IBbsArticle {
  format: "html" | "md" | "txt";
  // title: string;
  // body: string;
}
