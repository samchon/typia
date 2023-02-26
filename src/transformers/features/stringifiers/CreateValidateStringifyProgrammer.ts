import { ValidateStringifyProgrammer } from "../../../programmers/ValidateStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateStringifyTransformer {
    export const transform = GenericTransformer.factory(
        "createValidateStringify",
    )((project, modulo) =>
        ValidateStringifyProgrammer.generate(project, modulo),
    );
}
