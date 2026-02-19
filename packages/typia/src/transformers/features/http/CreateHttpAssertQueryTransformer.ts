import { HttpAssertQueryProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createAssertQuery",
      write: HttpAssertQueryProgrammer.write,
    });
}
