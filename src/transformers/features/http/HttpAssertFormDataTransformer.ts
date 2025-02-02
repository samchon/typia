import { HttpAssertFormDataProgrammer } from "../../../programmers/http/HttpAssertFormDataProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertFormDataTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.assertFormData",
      write: HttpAssertFormDataProgrammer.write,
    });
}
