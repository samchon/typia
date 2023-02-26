import { IsParseProgrammer } from "../../../programmers/IsParseProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace IsParseTransformer {
    export const transform = GenericTransformer.scalar("isParse")(
        (project, modulo) => IsParseProgrammer.generate(project, modulo),
    );
}
