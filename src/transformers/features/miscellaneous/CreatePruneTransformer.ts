import { PruneProgrammer } from "../../../programmers/PruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreatePruneTransformer {
    export const transform = GenericTransformer.factory("createPrune")(
        (project, modulo) => PruneProgrammer.generate(project, modulo),
    );
}
