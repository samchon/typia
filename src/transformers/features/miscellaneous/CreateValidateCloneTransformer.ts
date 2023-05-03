import { ValidateCloneProgrammer } from "../../../programmers/ValidateCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateValidateCloneTransformer {
    export const transform = GenericTransformer.factory("createValidateClone")(
        (project) => (modulo) => ValidateCloneProgrammer.write(project)(modulo),
    );
}
