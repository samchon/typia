import { HttpQueryProgrammer } from "../../../programmers/http/HttpQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpQueryTransformer {
    export const transform = GenericTransformer.factory("http.createQuery")(
        (project) => (modulo) => HttpQueryProgrammer.write(project)(modulo),
    );
}
