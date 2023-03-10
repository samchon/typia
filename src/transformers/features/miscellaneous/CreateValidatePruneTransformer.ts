import { ValidatePruneProgrammer } from "../../../programmers/ValidatePruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidatePruneTransformer {
    export const transform = GenericTransformer.factory("createValidatePrune")(
        (project, modulo) => ValidatePruneProgrammer.generate(project, modulo),
    );
}
