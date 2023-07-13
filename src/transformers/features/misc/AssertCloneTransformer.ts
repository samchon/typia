import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertCloneTransformer {
    export const transform = GenericTransformer.scalar("assertClone")(
        (project) => (modulo) =>
            MiscAssertCloneProgrammer.write(project)(modulo),
    );
}
