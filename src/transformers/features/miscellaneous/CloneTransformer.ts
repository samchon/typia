import { CloneProgrammer } from "../../../programmers/CloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CloneTransformer {
    export const transform = GenericTransformer.scalar("clone")(
        (project, modulo) => CloneProgrammer.generate(project, modulo),
    );
}
