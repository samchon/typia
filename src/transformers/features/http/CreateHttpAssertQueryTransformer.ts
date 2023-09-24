import { HttpAssertQueryProgrammer } from "../../../programmers/http/HttpAssertQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertQueryTransformer {
    export const transform = GenericTransformer.factory(
        "http.createAssertQuery",
    )(
        (project) => (modulo) =>
            HttpAssertQueryProgrammer.write(project)(modulo),
    );
}
