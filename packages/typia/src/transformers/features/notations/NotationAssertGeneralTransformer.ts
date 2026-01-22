import { NotationAssertGeneralProgrammer } from "../../../programmers/notations/NotationAssertGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationAssertGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.assert${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationAssertGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
