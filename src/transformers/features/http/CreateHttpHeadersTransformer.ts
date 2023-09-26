import { HttpHeadersProgrammer } from "../../../programmers/http/HttpHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpHeadersTransformer {
    export const transform = GenericTransformer.factory("http.createHeaders")(
        (project) => (modulo) => HttpHeadersProgrammer.write(project)(modulo),
    );
}
