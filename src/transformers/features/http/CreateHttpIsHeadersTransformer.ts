import { HttpIsHeadersProgrammer } from "../../../programmers/http/HttpIsHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsHeadersTransformer {
    export const transform = GenericTransformer.factory("http.createIsHeaders")(
        (project) => (modulo) => HttpIsHeadersProgrammer.write(project)(modulo),
    );
}
