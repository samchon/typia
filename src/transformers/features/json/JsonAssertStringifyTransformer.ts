import { JsonAssertStringifyProgrammer } from "../../../programmers/json/JsonAssertStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonAssertStringifyTransformer {
    export const transform = GenericTransformer.scalar("assertStringify")(
        (project) => (modulo) =>
            JsonAssertStringifyProgrammer.write(project)(modulo),
    );
}
