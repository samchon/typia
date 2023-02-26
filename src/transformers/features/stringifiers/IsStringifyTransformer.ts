import { IsStringifyProgrammer } from "../../../programmers/IsStringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace IsStringifyTransformer {
    export const transform = GenericTransformer.scalar("isStringify")(
        (project, modulo) => IsStringifyProgrammer.generate(project, modulo),
    );
}
