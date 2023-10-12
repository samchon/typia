import { NotationAssertGeneralProgrammer } from "../../../programmers/notations/NotationAssertGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateAssertGeneralTransformer {
    export const transform = (rename: (str: string) => string) =>
        GenericTransformer.factory(
            `notations.createAssert${StringUtil.capitalize(rename.name)}`,
        )(
            (project) => (modulo) =>
                NotationAssertGeneralProgrammer.write(rename)(project)(modulo),
        );
}
