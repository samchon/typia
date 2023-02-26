import { IsStringifyProgrammer } from "../../../programmers/IsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateIsStringifyTransformer {
    export const transform = GenericTransformer.factory("createIsStringify")(
        (project, modulo) => IsStringifyProgrammer.generate(project, modulo),
    );
}
