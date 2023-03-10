import { IsProgrammer } from "../../../programmers/IsProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsTransformer {
    export const transform = (equals: boolean) =>
        GenericTransformer.factory(equals ? "createEquals" : "createIs")(
            (project, modulo) => IsProgrammer.generate(project, modulo, equals),
        );
}
