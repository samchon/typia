import { ValidateStringifyProgrammer } from "../../../programmers/ValidateStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateStringifyTransformer {
    export const transform = GenericTransformer.scalar("validatStringify")(
        (project, modulo) =>
            ValidateStringifyProgrammer.generate(project, modulo),
    );
}
