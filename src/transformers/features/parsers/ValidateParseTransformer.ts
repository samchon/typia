import { ValidateParseProgrammer } from "../../../programmers/ValidateParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateParseTransformer {
    export const transform = GenericTransformer.scalar("validatParse")(
        (project, modulo) => ValidateParseProgrammer.generate(project, modulo),
    );
}
