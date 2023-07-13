import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertPruneTransformer {
    export const transform = GenericTransformer.factory("createAssertPrune")(
        (project) => (modulo) =>
            MiscAssertPruneProgrammer.write(project)(modulo),
    );
}
