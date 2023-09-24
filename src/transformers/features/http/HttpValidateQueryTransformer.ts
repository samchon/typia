import { HttpValidateQueryProgrammer } from "../../../programmers/http/HttpValidateQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateQueryTransformer {
    export const transform = GenericTransformer.scalar("http.validateQuery")(
        (project) => (modulo) =>
            HttpValidateQueryProgrammer.write(project)(modulo),
    );
}
