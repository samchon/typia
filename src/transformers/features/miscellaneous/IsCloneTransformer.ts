import { IsCloneProgrammer } from "../../../programmers/IsCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace IsCloneTransformer {
    export const transform = GenericTransformer.scalar("isClone")(
        (project, modulo) => IsCloneProgrammer.generate(project, modulo),
    );
}
