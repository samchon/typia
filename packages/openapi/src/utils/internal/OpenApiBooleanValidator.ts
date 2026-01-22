import { OpenApi } from "../../OpenApi";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiBooleanValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IBoolean>,
  ): boolean => {
    return typeof ctx.value === "boolean" || ctx.report(ctx);
  };
}
