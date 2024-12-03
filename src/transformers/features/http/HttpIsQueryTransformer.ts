import { HttpIsQueryProgrammer } from "../../../programmers/http/HttpIsQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.isQuery",
      write: HttpIsQueryProgrammer.write,
    });
}
