import { NotationValidateGeneralProgrammer } from "../../../programmers/notations/NotationValidateGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationValidateGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.validate${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationValidateGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
