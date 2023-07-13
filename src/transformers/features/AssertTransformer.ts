import { AssertProgrammer } from "../../programmers/AssertProgrammer";

import { GenericTransformer } from "../internal/GenericTransformer";

export namespace AssertTransformer {
    export const transform = (equals: boolean) =>
        GenericTransformer.scalar(equals ? "assertEquals" : "assert")(
            (project) => (modulo) =>
                AssertProgrammer.write(project)(modulo)(equals),
        );
}
