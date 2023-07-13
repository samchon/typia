import { MiscValidatePruneProgrammer } from "../../../programmers/misc/MiscValidatePruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidatePruneTransformer {
    export const transform = GenericTransformer.factory("createValidatePrune")(
        (project) => (modulo) =>
            MiscValidatePruneProgrammer.write(project)(modulo),
    );
}
