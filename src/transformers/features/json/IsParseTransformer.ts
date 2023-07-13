import { JsonIsParseProgrammer } from "../../../programmers/json/JsonIsParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace IsParseTransformer {
    export const transform = GenericTransformer.scalar("isParse")(
        (project) => (modulo) => JsonIsParseProgrammer.write(project)(modulo),
    );
}
