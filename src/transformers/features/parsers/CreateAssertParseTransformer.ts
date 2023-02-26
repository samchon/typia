import { AssertParseProgrammer } from "../../../programmers/AssertParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertParseTransformer {
    export const transform = GenericTransformer.factory("createAssertParse")(
        (project, modulo) => AssertParseProgrammer.generate(project, modulo),
    );
}
