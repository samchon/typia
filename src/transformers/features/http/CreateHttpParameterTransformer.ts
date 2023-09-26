import { HttpParameterProgrammer } from "../../../programmers/http/HttpParameterProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpParameterTransformer {
    export const transform = GenericTransformer.factory("http.createParameter")(
        (project) => (modulo) => HttpParameterProgrammer.write(project)(modulo),
    );
}
