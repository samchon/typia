import { MiscIsPruneProgrammer } from "../../../programmers/misc/MiscIsPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateIsPruneTransformer {
    export const transform = GenericTransformer.factory("createIsPrune")(
        (project) => (modulo) => MiscIsPruneProgrammer.write(project)(modulo),
    );
}
