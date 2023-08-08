import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertCloneTransformer {
    export const transform = GenericTransformer.factory("createAssertClone")(
        (project) => (modulo) =>
            MiscAssertCloneProgrammer.write(project)(modulo),
    );
}
