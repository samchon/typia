import { AssertStringifyProgrammer } from "../../../programmers/AssertStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertStringifyTransformer {
    export const transform = GenericTransformer.scalar("assertStringify")(
        (project) => (modulo) =>
            AssertStringifyProgrammer.write(project)(modulo),
    );
}
