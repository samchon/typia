import { MiscAssertCloneProgrammer } from "../../../programmers/misc/MiscAssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateAssertCloneTransformer {
    export const transform = GenericTransformer.factory(
        "misc.createAssertClone",
    )(
        (project) => (modulo) =>
            MiscAssertCloneProgrammer.write(project)(modulo),
    );
}
