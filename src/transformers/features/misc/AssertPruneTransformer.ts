import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertPruneTransformer {
    export const transform = GenericTransformer.scalar("assertPrune")(
        (project) => (modulo) =>
            MiscAssertPruneProgrammer.write(project)(modulo),
    );
}
