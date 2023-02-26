import { ValidateProgrammer } from "../../../programmers/ValidateProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateTransformer {
    export const transform = (equals: boolean) =>
        GenericTransformer.scalar(equals ? "validateEquals" : "validate")(
            (project, modulo) =>
                ValidateProgrammer.generate(project, modulo, equals),
        );
}
