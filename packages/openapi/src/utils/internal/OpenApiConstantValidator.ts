import { OpenApi } from "../../OpenApi";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiConstantValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IConstant>,
  ): boolean => {
    return ctx.value === ctx.schema.const || ctx.report(ctx);
  };
}
