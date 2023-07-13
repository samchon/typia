import { MiscCloneProgrammer } from "../../../programmers/misc/MiscCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateCloneTransformer {
    export const transform = GenericTransformer.factory("createClone")(
        (project) => (modulo) => MiscCloneProgrammer.write(project)(modulo),
    );
}
