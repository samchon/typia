import { NotationGeneralProgrammer } from "../../../programmers/notations/NotationGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateGeneralTransformer {
  export const transform = (rename: (str: string) => string) =>
    GenericTransformer.factory(
      `notations.create${StringUtil.capitalize(rename.name)}`,
    )(
      (project) => (modulo) =>
        NotationGeneralProgrammer.write(rename)(project)(modulo),
    );
}
