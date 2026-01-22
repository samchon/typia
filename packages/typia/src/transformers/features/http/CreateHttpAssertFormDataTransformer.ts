import { HttpAssertFormDataProgrammer } from "../../../programmers/http/HttpAssertFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createAssertFormData",
      write: HttpAssertFormDataProgrammer.write,
    });
}
