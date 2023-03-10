import { IsCloneProgrammer } from "../../../programmers/IsCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsCloneTransformer {
    export const transform = GenericTransformer.factory("createIsClone")(
        (project, modulo) => IsCloneProgrammer.generate(project, modulo),
    );
}
