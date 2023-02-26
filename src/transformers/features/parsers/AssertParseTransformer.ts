import { AssertParseProgrammer } from "../../../programmers/AssertParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertParseTransformer {
    export const transform = GenericTransformer.scalar("assertParse")(
        (project, modulo) => AssertParseProgrammer.generate(project, modulo),
    );
}
