import { HttpHeadersProgrammer } from "../../../programmers/http/HttpHeadersProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.headers",
      write: HttpHeadersProgrammer.write,
    });
}
