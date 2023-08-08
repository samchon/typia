import { JsonValidateStringifyProgrammer } from "../../../programmers/json/JsonValidateStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateStringifyTransformer {
    export const transform = GenericTransformer.factory(
        "createValidateStringify",
    )(
        (project) => (modulo) =>
            JsonValidateStringifyProgrammer.write(project)(modulo),
    );
}
