import { MiscIsPruneProgrammer } from "../../../programmers/misc/MiscIsPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscIsPruneTransformer {
    export const transform = GenericTransformer.scalar("isPrune")(
        (project) => (modulo) => MiscIsPruneProgrammer.write(project)(modulo),
    );
}
