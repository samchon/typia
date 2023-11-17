import { NotationIsGeneralProgrammer } from "../../../programmers/notations/NotationIsGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateIsGeneralTransformer {
  export const transform = (rename: (str: string) => string) =>
    GenericTransformer.factory(
      `notations.createIs${StringUtil.capitalize(rename.name)}`,
    )(
      (project) => (modulo) =>
        NotationIsGeneralProgrammer.write(rename)(project)(modulo),
    );
}
