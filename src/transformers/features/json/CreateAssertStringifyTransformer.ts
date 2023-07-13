import { JsonAssertStringifyProgrammer } from "../../../programmers/json/JsonAssertStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertStringifyTransformer {
    export const transform = GenericTransformer.factory(
        "createAssertStringify",
    )(
        (project) => (modulo) =>
            JsonAssertStringifyProgrammer.write(project)(modulo),
    );
}
