import { HttpIsHeadersProgrammer } from "../../../programmers/http/HttpIsHeadersProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createIsHeaders",
      write: HttpIsHeadersProgrammer.write,
    });
}
