import { HttpValidateFormDataProgrammer } from "@typia/core";

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
