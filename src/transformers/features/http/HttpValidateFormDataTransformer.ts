import { HttpValidateFormDataProgrammer } from "../../../programmers/http/HttpValidateFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.validateFormData",
      write: HttpValidateFormDataProgrammer.write,
    });
}
