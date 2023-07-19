import { MiscValidatePruneProgrammer } from "../../../programmers/misc/MiscValidatePruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscValidatePruneTransformer {
    export const transform = GenericTransformer.scalar("validatPrune")(
        (project) => (modulo) =>
            MiscValidatePruneProgrammer.write(project)(modulo),
    );
}
