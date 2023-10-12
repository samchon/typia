import { JsonValidateParseProgrammer } from "../../../programmers/json/JsonValidateParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonValidateParseTransformer {
    export const transform = GenericTransformer.scalar("json.validatParse")(
        (project) => (modulo) =>
            JsonValidateParseProgrammer.write(project)(modulo),
    );
}
