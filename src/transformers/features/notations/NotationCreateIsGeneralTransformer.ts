import { NotationIsGeneralProgrammer } from "../../../programmers/notations/NotationIsGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateIsGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.createIs${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationIsGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
