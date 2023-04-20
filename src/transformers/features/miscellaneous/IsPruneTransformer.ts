import { IsPruneProgrammer } from "../../../programmers/IsPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace IsPruneTransformer {
    export const transform = GenericTransformer.scalar("isPrune")(
        (project) => (modulo) => IsPruneProgrammer.write(project)(modulo),
    );
}
