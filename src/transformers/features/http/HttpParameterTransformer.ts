import { HttpParameterProgrammer } from "../../../programmers/http/HttpParameterProgrammer";

import type { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpParameterTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.parameter",
      write: HttpParameterProgrammer.write,
    });
}
