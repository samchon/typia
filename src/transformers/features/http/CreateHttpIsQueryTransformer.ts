import { HttpIsQueryProgrammer } from "../../../programmers/http/HttpIsQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsQueryTransformer {
    export const transform = GenericTransformer.factory("http.createIsQuery")(
        (project) => (modulo) => HttpIsQueryProgrammer.write(project)(modulo),
    );
}
