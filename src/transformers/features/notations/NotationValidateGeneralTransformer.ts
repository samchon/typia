import { NotationValidateGeneralProgrammer } from "../../../programmers/notations/NotationValidateGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationValidateGeneralTransformer {
    export const transform = (rename: (str: string) => string) =>
        GenericTransformer.scalar(
            `notations.validate${StringUtil.capitalize(rename.name)}`,
        )(
            (project) => (modulo) =>
                NotationValidateGeneralProgrammer.write(rename)(project)(
                    modulo,
                ),
        );
}
