import { HttpFormDataProgrammer } from "../../../programmers/http/HttpFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createFormData",
      write: HttpFormDataProgrammer.write,
    });
}
