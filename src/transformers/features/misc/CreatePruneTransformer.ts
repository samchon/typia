import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreatePruneTransformer {
    export const transform = GenericTransformer.factory("createPrune")(
        (project) => (modulo) => MiscPruneProgrammer.write(project)(modulo),
    );
}
