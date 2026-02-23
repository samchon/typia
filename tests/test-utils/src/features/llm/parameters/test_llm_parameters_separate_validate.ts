import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";
import typia, { ILlmFunction, ILlmSchema } from "typia";

export const test_llm_parameters_separate_validate = (): void => {
  const collection = typia.json.schemas<[ISeparatable, IHumanOnly]>();
  const validate = (schema: OpenApi.IJsonSchema, exists: boolean) => {
    const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
      LlmSchemaConverter.parameters({
        $defs: {},
        components: collection.components,
        schema: schema as OpenApi.IJsonSchema.IReference,
      } as any) as IResult<ILlmSchema.IParameters, IJsonSchemaTransformError>;
    if (result.success === false) throw new Error("Failed to convert");

    const separated: ILlmFunction.ISeparated = LlmSchemaConverter.separate({
      parameters: result.value as ILlmSchema.IParameters,
      predicate: (s: OpenApi.IJsonSchema) => OpenApiTypeChecker.isNumber(s),
    } as any) as ILlmFunction.ISeparated;
    TestValidator.equals(
      "validate",
      !!separated.validate,
      exists,
      (key) => key !== "description",
    );
  };
  validate(collection.schemas[0]!, true);
  validate(collection.schemas[1]!, false);
};

interface ISeparatable {
  title: string;
  value: number;
}
interface IHumanOnly {
  value: number;
}
