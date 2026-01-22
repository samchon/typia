import { NotationIsGeneralProgrammer } from "../../../programmers/notations/NotationIsGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationIsGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.is${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationIsGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
