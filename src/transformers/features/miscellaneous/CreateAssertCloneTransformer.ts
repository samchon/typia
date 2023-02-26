import { AssertCloneProgrammer } from "../../../programmers/AssertCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertCloneTransformer {
    export const transform = GenericTransformer.factory("createAssertClone")(
        (project, modulo) => AssertCloneProgrammer.generate(project, modulo),
    );
}
