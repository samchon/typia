import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace StringifyTransformer {
    export const transform = GenericTransformer.scalar("stringify")(
        (project) => (modulo) => JsonStringifyProgrammer.write(project)(modulo),
    );
}
