import { ValidatePruneProgrammer } from "../../../programmers/ValidatePruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidatePruneTransformer {
    export const transform = GenericTransformer.scalar("validatPrune")(
        (project, modulo) => ValidatePruneProgrammer.generate(project, modulo),
    );
}
