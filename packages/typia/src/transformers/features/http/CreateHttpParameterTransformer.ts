import { HttpParameterProgrammer } from "../../../programmers/http/HttpParameterProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpParameterTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.factory({
      ...props,
      method: "http.createParameter",
      write: HttpParameterProgrammer.write,
    });
}
