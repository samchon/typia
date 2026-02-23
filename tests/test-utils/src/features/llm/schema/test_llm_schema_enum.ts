import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
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
      config: {
        reference: false,
      },
    });
  TestValidator.equals("success", result.success, true);
  if (result.success === false) return;

  const formatted: ILlmSchema.IParameters = result.value;
  const formatProp = formatted.properties.format as ILlmSchema.IString;
  TestValidator.equals("enum", formatProp.enum, ["html", "md", "txt"]);
};

interface IBbsArticle {
  format: IBbsArticle.Format;
  // title: string;
  // body: string;
}
namespace IBbsArticle {
  export type Format = "html" | "md" | "txt";
}
