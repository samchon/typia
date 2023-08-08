import { JsonAssertParseProgrammer } from "../../../programmers/json/JsonAssertParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace AssertParseTransformer {
    export const transform = GenericTransformer.scalar("assertParse")(
        (project) => (modulo) =>
            JsonAssertParseProgrammer.write(project)(modulo),
    );
}
