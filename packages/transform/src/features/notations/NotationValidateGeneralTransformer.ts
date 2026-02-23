import { NotationValidateGeneralProgrammer } from "@typia/core";
import { NamingConvention } from "@typia/utils";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationValidateGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.validate${NamingConvention.capitalize(rename.name)}`,
        write: (x) =>
          NotationValidateGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
