import { AssertPruneProgrammer } from "../../../programmers/AssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertPruneTransformer {
    export const transform = GenericTransformer.factory("createAssertPrune")(
        (project, modulo) => AssertPruneProgrammer.generate(project, modulo),
    );
}
