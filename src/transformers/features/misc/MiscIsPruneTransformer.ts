import { IsPruneProgrammer } from "../../../programmers/IsPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscIsPruneTransformer {
    export const transform = GenericTransformer.scalar("isPrune")(
        (project) => (modulo) => IsPruneProgrammer.write(project)(modulo),
    );
}
