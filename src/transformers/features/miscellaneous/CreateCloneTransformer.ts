import { CloneProgrammer } from "../../../programmers/CloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateCloneTransformer {
    export const transform = GenericTransformer.factory("createClone")(
        (project, modulo) => CloneProgrammer.generate(project, modulo),
    );
}
