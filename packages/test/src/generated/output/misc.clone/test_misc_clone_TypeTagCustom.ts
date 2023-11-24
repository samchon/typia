import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_misc_clone_TypeTagCustom = _test_misc_clone(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  ((input: TypeTagCustom): typia.Resolved<TypeTagCustom> => {
    const $co0 = (input: any): any => ({
      id: input.id as any,
      dollar: input.dollar as any,
      postfix: input.postfix as any,
      powerOf: input.powerOf as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
