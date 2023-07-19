import { MiscValidatePruneProgrammer } from "../../../programmers/misc/MiscValidatePruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateValidatePruneTransformer {
    export const transform = GenericTransformer.factory("createValidatePrune")(
        (project) => (modulo) =>
            MiscValidatePruneProgrammer.write(project)(modulo),
    );
}
