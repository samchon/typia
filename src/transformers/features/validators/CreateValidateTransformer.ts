import { ValidateProgrammer } from "../../../programmers/ValidateProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateTransformer {
    export const transform = (equals: boolean) =>
        GenericTransformer.factory(
            equals ? "createValidateEquals" : "createValidate",
        )((project, modulo) =>
            ValidateProgrammer.generate(project, modulo, equals),
        );
}
