import { HttpQueryProgrammer } from "../../../programmers/http/HttpQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.query",
      write: HttpQueryProgrammer.write,
    });
}
