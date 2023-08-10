import { JsonIsParseProgrammer } from "../../../programmers/json/JsonIsParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsParseTransformer {
    export const transform = GenericTransformer.factory("createIsParse")(
        (project) => (modulo) => JsonIsParseProgrammer.write(project)(modulo),
    );
}
