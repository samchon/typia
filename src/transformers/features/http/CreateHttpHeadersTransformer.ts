import { HttpHeadersProgrammer } from "../../../programmers/http/HttpHeadersProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createHeaders",
      write: HttpHeadersProgrammer.write,
    });
}
