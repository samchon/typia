import { NotationGeneralProgrammer } from "../../../programmers/notations/NotationGeneralProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationGeneralTransformer {
    export const transform = (rename: (str: string) => string) =>
        GenericTransformer.scalar(`notations.${rename.name}`)(
            (project) => (modulo) =>
                NotationGeneralProgrammer.write(rename)(project)(modulo),
        );
}
