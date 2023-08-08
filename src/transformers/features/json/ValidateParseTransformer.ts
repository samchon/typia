import { JsonValidateParseProgrammer } from "../../../programmers/json/JsonValidateParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateParseTransformer {
    export const transform = GenericTransformer.scalar("validatParse")(
        (project) => (modulo) =>
            JsonValidateParseProgrammer.write(project)(modulo),
    );
}
