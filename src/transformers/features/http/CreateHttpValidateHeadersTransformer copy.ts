import { HttpValidateHeadersProgrammer } from "../../../programmers/http/HttpValidateHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateHeadersTransformer {
    export const transform = GenericTransformer.factory(
        "http.createValidateHeaders",
    )(
        (project) => (modulo) =>
            HttpValidateHeadersProgrammer.write(project)(modulo),
    );
}
