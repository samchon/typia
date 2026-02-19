import { NotationIsGeneralProgrammer } from "@typia/core";
import { NamingConvention } from "@typia/utils";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationIsGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.scalar({
        ...props,
        method: `notations.is${NamingConvention.capitalize(rename.name)}`,
        write: (x) =>
          NotationIsGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
