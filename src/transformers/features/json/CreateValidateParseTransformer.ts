import { JsonValidateParseProgrammer } from "../../../programmers/json/JsonValidateParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateParseTransformer {
    export const transform = GenericTransformer.factory("createValidateParse")(
        (project) => (modulo) =>
            JsonValidateParseProgrammer.write(project)(modulo),
    );
}
