import { NotationAssertGeneralProgrammer } from "../../../programmers/notations/NotationAssertGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateAssertGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.createAssert${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationAssertGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
