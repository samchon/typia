import { MiscIsCloneProgrammer } from "../../../programmers/misc/MiscIsCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsCloneTransformer {
    export const transform = GenericTransformer.factory("createIsClone")(
        (project) => (modulo) => MiscIsCloneProgrammer.write(project)(modulo),
    );
}
