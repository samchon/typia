import { JsonIsStringifyProgrammer } from "../../../programmers/json/JsonIsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonIsStringifyTransformer {
    export const transform = GenericTransformer.scalar("isStringify")(
        (project) => (modulo) =>
            JsonIsStringifyProgrammer.write(project)(modulo),
    );
}
