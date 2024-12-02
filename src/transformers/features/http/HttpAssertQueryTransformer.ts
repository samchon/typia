import { HttpAssertQueryProgrammer } from "../../../programmers/http/HttpAssertQueryProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertQueryTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.assertQuery",
      write: HttpAssertQueryProgrammer.write,
    });
}
