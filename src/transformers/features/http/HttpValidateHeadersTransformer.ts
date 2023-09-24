import { HttpValidateHeadersProgrammer } from "../../../programmers/http/HttpValidateHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateHeadersTransformer {
    export const transform = GenericTransformer.scalar("http.validateHeaders")(
        (project) => (modulo) =>
            HttpValidateHeadersProgrammer.write(project)(modulo),
    );
}
