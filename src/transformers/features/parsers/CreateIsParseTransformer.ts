import { IsParseProgrammer } from "../../../programmers/IsParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsParseTransformer {
    export const transform = GenericTransformer.factory("createIsParse")(
        (project, modulo) => IsParseProgrammer.generate(project, modulo),
    );
}
