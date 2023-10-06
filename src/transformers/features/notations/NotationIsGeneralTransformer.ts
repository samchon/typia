import { NotationIsGeneralProgrammer } from "../../../programmers/notations/NotationIsGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationIsGeneralTransformer {
    export const transform = (rename: (str: string) => string) =>
        GenericTransformer.scalar(
            `notations.is${StringUtil.capitalize(rename.name)}`,
        )(
            (project) => (modulo) =>
                NotationIsGeneralProgrammer.write(rename)(project)(modulo),
        );
}
