import { MiscIsCloneProgrammer } from "../../../programmers/misc/MiscIsCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscIsCloneTransformer {
    export const transform = GenericTransformer.scalar("isClone")(
        (project) => (modulo) => MiscIsCloneProgrammer.write(project)(modulo),
    );
}
