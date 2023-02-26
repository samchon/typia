import { AssertCloneProgrammer } from "../../../programmers/AssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertCloneTransformer {
    export const transform = GenericTransformer.scalar("assertClone")(
        (project, modulo) => AssertCloneProgrammer.generate(project, modulo),
    );
}
