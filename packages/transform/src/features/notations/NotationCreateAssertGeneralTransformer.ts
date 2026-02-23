import { NotationAssertGeneralProgrammer } from "@typia/core";
import { NamingConvention } from "@typia/utils";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace NotationCreateAssertGeneralTransformer {
  export const transform =
    (rename: (str: string) => string) => (props: ITransformProps) =>
      GenericTransformer.factory({
        ...props,
        method: `notations.createAssert${NamingConvention.capitalize(rename.name)}`,
        write: (x) =>
          NotationAssertGeneralProgrammer.write({
            ...x,
            rename,
          }),
      });
}
