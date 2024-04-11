import { OpenApiV3 } from "@samchon/openapi";

import { MetadataConstant } from "../../schemas/metadata/MetadataConstant";

/**
 * @internal
 */
export const application_v30_constant = (
  constant: MetadataConstant,
):
  | OpenApiV3.IJsonSchema.IBoolean
  | OpenApiV3.IJsonSchema.IInteger
  | OpenApiV3.IJsonSchema.INumber
  | OpenApiV3.IJsonSchema.IString => ({
  type: constant.type as "string" | "number" | "boolean" | "integer",
  enum: constant.values.map((v) => v.value) as any,
  // @todo default
});
