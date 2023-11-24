import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagTypeUnion } from "../../../structures/TypeTagTypeUnion";

export const test_misc_prune_TypeTagTypeUnion = _test_misc_prune(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  ((input: TypeTagTypeUnion): void => {
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "int32_or_uint32" === key ||
          "int32_or_int64" === key ||
          "int32_or_uint64" === key ||
          "int32_or_float" === key ||
          "int32_or_double" === key ||
          "int64_or_uint64" === key ||
          "int64_or_float" === key ||
          "int64_or_double" === key ||
          "float_or_double" === key ||
          "everything" === key
        )
          continue;
        delete input[key];
      }
    };
    if ("object" === typeof input && null !== input) $po0(input);
  })(input),
);
