import { HttpAssertHeadersProgrammer } from "@typia/core";

import { ITransformProps } from "../../ITransformProps";
import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertHeadersTransformer {
  export const transform = (props: ITransformProps) =>
    GenericTransformer.scalar({
      ...props,
      method: "http.assertHeaders",
      write: HttpAssertHeadersProgrammer.write,
    });
}
