import { HttpValidateQueryProgrammer } from "../../../programmers/http/HttpValidateQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createValidateQuery",
      write: HttpValidateQueryProgrammer.write,
    });
}
