import { HttpValidateHeadersProgrammer } from "../../../programmers/http/HttpValidateHeadersProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.validateHeaders",
      write: HttpValidateHeadersProgrammer.write,
    });
}
