import { StringifyProgrammer } from "../../../programmers/StringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateStringifyTransformer {
    export const transform = GenericTransformer.factory("createStringify")(
        (project, modulo) => StringifyProgrammer.generate(project, modulo),
    );
}
