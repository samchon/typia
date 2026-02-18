import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import {
  LlmSchemaConverter,
  LlmTypeChecker,
  OpenApiTypeChecker,
} from "@typia/utils";
import typia, { ILlmSchema } from "typia";

export const test_llm_schema_discriminator = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ICat | IAnt>($defs);

  TestValidator.predicate(
    "discriminator",
    () =>
      LlmTypeChecker.isAnyOf(schema) &&
      schema["x-discriminator"] !== undefined &&
      schema["x-discriminator"].mapping !== undefined &&
      Object.values(schema["x-discriminator"].mapping).every((k) =>
        k.startsWith("#/$defs/"),
      ),
  );

  const invert: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
    components: {},
    $defs,
    schema,
  });
  TestValidator.predicate(
    "invert",
    () =>
      OpenApiTypeChecker.isOneOf(invert) &&
      invert.discriminator !== undefined &&
      invert.discriminator.mapping !== undefined &&
      Object.values(invert.discriminator.mapping).every((k) =>
        k.startsWith("#/components/schemas/"),
      ),
  );
};

interface ICat {
  type: "cat";
  name: string;
  ribbon: boolean;
}
interface IAnt {
  type: "ant";
  name: string;
  role: "queen" | "soldier" | "worker";
}
