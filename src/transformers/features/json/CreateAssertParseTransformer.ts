import { JsonAssertParseProgrammer } from "../../../programmers/json/JsonAssertParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateAssertParseTransformer {
    export const transform = GenericTransformer.factory("createAssertParse")(
        (project) => (modulo) =>
            JsonAssertParseProgrammer.write(project)(modulo),
    );
}
