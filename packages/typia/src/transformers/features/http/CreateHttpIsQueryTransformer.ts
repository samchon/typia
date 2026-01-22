import { HttpIsQueryProgrammer } from "../../../programmers/http/HttpIsQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createIsQuery",
      write: HttpIsQueryProgrammer.write,
    });
}
