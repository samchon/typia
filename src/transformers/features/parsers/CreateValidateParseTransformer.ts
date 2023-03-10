import { ValidateParseProgrammer } from "../../../programmers/ValidateParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateParseTransformer {
    export const transform = GenericTransformer.factory("createValidateParse")(
        (project, modulo) => ValidateParseProgrammer.generate(project, modulo),
    );
}
