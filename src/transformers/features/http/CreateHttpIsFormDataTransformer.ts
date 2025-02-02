import { HttpIsFormDataProgrammer } from "../../../programmers/http/HttpIsFormDataProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createIsFormData",
      write: HttpIsFormDataProgrammer.write,
    });
}
