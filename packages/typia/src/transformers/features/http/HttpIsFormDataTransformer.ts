import { HttpIsFormDataProgrammer } from "../../../programmers/http/HttpIsFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.isFormData",
      write: HttpIsFormDataProgrammer.write,
    });
}
