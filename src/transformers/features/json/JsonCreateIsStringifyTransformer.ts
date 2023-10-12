import { JsonIsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateIsStringifyTransformer {
    export const transform = GenericTransformer.factory(
        "json.createIsStringify",
    )(
        (project) => (modulo) =>
            JsonIsStringifyProgrammer.write(project)(modulo),
    );
}
