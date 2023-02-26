import { ValidateCloneProgrammer } from "../../../programmers/ValidateCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace ValidateCloneTransformer {
    export const transform = GenericTransformer.scalar("validatClone")(
        (project, modulo) => ValidateCloneProgrammer.generate(project, modulo),
    );
}
