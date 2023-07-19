import { JsonIsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsStringifyTransformer {
    export const transform = GenericTransformer.factory("createIsStringify")(
        (project) => (modulo) =>
            JsonIsStringifyProgrammer.write(project)(modulo),
    );
}
