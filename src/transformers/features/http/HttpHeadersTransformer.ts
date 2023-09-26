import { HttpHeadersProgrammer } from "../../../programmers/http/HttpHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpHeadersTransformer {
    export const transform = GenericTransformer.scalar("http.headers")(
        (project) => (modulo) => HttpHeadersProgrammer.write(project)(modulo),
    );
}
