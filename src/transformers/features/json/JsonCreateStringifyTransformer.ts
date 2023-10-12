import { JsonStringifyProgrammer } from "../../../programmers/json/JsonStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace JsonCreateStringifyTransformer {
    export const transform = GenericTransformer.factory("json.createStringify")(
        (project) => (modulo) => JsonStringifyProgrammer.write(project)(modulo),
    );
}
