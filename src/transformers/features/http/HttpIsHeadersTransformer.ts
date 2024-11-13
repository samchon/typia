import { HttpIsHeadersProgrammer } from "../../../programmers/http/HttpIsHeadersProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.isHeaders",
      write: HttpIsHeadersProgrammer.write,
    });
}
