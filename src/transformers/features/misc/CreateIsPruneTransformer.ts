import { IsPruneProgrammer } from "../../../programmers/IsPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsPruneTransformer {
    export const transform = GenericTransformer.factory("createIsPrune")(
        (project) => (modulo) => IsPruneProgrammer.write(project)(modulo),
    );
}
