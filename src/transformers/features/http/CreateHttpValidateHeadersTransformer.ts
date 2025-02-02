import { HttpValidateHeadersProgrammer } from "../../../programmers/http/HttpValidateHeadersProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createValidateHeaders",
      write: HttpValidateHeadersProgrammer.write,
    });
}
