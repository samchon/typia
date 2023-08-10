import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateAssertCloneTransformer {
    export const transform = GenericTransformer.factory("createAssertClone")(
        (project) => (modulo) =>
            MiscAssertCloneProgrammer.write(project)(modulo),
    );
}
