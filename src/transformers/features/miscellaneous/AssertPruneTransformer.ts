import { AssertPruneProgrammer } from "../../../programmers/AssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertPruneTransformer {
    export const transform = GenericTransformer.scalar("assertPrune")(
        (project, modulo) => AssertPruneProgrammer.generate(project, modulo),
    );
}
