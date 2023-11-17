import { NotationValidateGeneralProgrammer } from "../../../programmers/notations/NotationValidateGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateValidateGeneralTransformer {
  export const transform = (rename: (str: string) => string) =>
    GenericTransformer.factory(
      `notations.createValidate${StringUtil.capitalize(rename.name)}`,
    )(
      (project) => (modulo) =>
        NotationValidateGeneralProgrammer.write(rename)(project)(modulo),
    );
}
