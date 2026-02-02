import { HttpQueryProgrammer } from "../../../programmers/http/HttpQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createQuery",
      write: HttpQueryProgrammer.write,
    });
}
