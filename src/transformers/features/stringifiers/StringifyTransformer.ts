import { StringifyProgrammer } from "../../../programmers/StringifyProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace StringifyTransformer {
    export const transform = GenericTransformer.scalar("stringify")(
        (project, modulo) => StringifyProgrammer.generate(project, modulo),
    );
}
