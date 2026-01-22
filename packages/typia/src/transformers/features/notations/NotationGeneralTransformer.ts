import { NotationGeneralProgrammer } from "../../../programmers/notations/NotationGeneralProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.${rename.name}`,
        write: (x) =>
          NotationGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
