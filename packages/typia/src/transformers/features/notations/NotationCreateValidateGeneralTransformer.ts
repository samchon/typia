import { NotationValidateGeneralProgrammer } from "../../../programmers/notations/NotationValidateGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateValidateGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.createValidate${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationValidateGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
