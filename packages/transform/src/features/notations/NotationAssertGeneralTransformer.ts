import { NotationAssertGeneralProgrammer } from "@typia/core";
import { NamingConvention } from "@typia/utils";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationAssertGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.assert${NamingConvention.capitalize(rename.name)}`,
        write: (x) =>
          NotationAssertGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
