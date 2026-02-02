import { NotationGeneralProgrammer } from "../../../programmers/notations/NotationGeneralProgrammer";

import { StringUtil } from "../../../utils/StringUtil";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.create${StringUtil.capitalize(rename.name)}`,
        write: (x) =>
          NotationGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
