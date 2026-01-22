import { HttpFormDataProgrammer } from "../../../programmers/http/HttpFormDataProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.formdata",
      write: HttpFormDataProgrammer.write,
    });
}
