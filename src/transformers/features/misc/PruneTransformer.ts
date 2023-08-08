import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace PruneTransformer {
    export const transform = GenericTransformer.scalar("prune")(
        (project) => (modulo) => MiscPruneProgrammer.write(project)(modulo),
    );
}
