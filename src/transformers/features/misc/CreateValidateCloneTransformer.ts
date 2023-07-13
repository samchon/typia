import { MiscValidateCloneProgrammer } from "../../../programmers/misc/MiscValidateCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateCloneTransformer {
    export const transform = GenericTransformer.factory("createValidateClone")(
        (project) => (modulo) =>
            MiscValidateCloneProgrammer.write(project)(modulo),
    );
}
