import { HttpQueryProgrammer } from "../../../programmers/http/HttpQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpQueryTransformer {
    export const transform = GenericTransformer.scalar("http.query")(
        (project) => (modulo) => HttpQueryProgrammer.write(project)(modulo),
    );
}
