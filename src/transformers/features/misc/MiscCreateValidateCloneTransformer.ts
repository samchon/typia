import { MiscValidateCloneProgrammer } from "../../../programmers/misc/MiscValidateCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateValidateCloneTransformer {
    export const transform = GenericTransformer.factory(
        "misc.createValidateClone",
    )(
        (project) => (modulo) =>
            MiscValidateCloneProgrammer.write(project)(modulo),
    );
}
