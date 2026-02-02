import { HttpAssertHeadersProgrammer } from "../../../programmers/http/HttpAssertHeadersProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createAssertHeaders",
      write: HttpAssertHeadersProgrammer.write,
    });
}
