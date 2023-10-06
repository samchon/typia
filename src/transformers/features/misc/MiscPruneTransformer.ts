import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscPruneTransformer {
    export const transform = GenericTransformer.scalar("misc.prune")(
        (project) => (modulo) => MiscPruneProgrammer.write(project)(modulo),
    );
}
