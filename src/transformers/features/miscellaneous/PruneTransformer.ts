import { PruneProgrammer } from "../../../programmers/PruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace PruneTransformer {
    export const transform = GenericTransformer.scalar("prune")(
        (project, modulo) => PruneProgrammer.generate(project, modulo),
    );
}
