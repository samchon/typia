import { HttpParameterProgrammer } from "../../../programmers/http/HttpParameterProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpParameterTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.parameter",
      write: HttpParameterProgrammer.write,
    });
}
