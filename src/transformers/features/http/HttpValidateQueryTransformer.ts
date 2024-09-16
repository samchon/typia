import { HttpValidateQueryProgrammer } from "../../../programmers/http/HttpValidateQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.validateQuery",
      write: HttpValidateQueryProgrammer.write,
    });
}
