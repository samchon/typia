import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateAssertPruneTransformer {
    export const transform = GenericTransformer.factory("createAssertPrune")(
        (project) => (modulo) =>
            MiscAssertPruneProgrammer.write(project)(modulo),
    );
}
