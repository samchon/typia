import { AssertProgrammer } from "../../programmers/AssertProgrammer";

import { GenericTransformer } from "../internal/GenericTransformer";

export namespace CreateAssertTransformer {
    export const transform = (equals: boolean) =>
        GenericTransformer.factory(
            equals ? "createAssertEquals" : "createAssert",
        )(
            (project) => (modulo) =>
                AssertProgrammer.write(project)(modulo)(equals),
        );
}
