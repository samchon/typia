import { NotationGeneralProgrammer } from "@typia/core";
import { NamingConvention } from "@typia/utils";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.create${NamingConvention.capitalize(rename.name)}`,
        write: (x) =>
          NotationGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
