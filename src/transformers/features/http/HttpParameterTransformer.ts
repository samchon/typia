import { HttpParameterProgrammer } from "../../../programmers/http/HttpParameterProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpParameterTransformer {
  export const transform = GenericTransformer.scalar("http.parameter")(
    (project) => (modulo) => HttpParameterProgrammer.write(project)(modulo),
  );
}
