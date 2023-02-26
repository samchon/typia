import { AssertStringifyProgrammer } from "../../../programmers/AssertStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertStringifyTransformer {
    export const transform = GenericTransformer.factory(
        "createAssertStringify",
    )((project, modulo) => AssertStringifyProgrammer.generate(project, modulo));
}
