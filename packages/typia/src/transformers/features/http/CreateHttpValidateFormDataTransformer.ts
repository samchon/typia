import { HttpValidateFormDataProgrammer } from "../../../programmers/http/HttpValidateFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createValidateFormData",
      write: HttpValidateFormDataProgrammer.write,
    });
}
