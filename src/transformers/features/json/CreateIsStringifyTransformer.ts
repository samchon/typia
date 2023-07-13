import { IsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsStringifyTransformer {
    export const transform = GenericTransformer.factory("createIsStringify")(
        (project) => (modulo) => IsStringifyProgrammer.write(project)(modulo),
    );
}
