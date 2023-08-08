import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateStringifyTransformer {
    export const transform = GenericTransformer.factory("createStringify")(
        (project) => (modulo) => JsonStringifyProgrammer.write(project)(modulo),
    );
}
