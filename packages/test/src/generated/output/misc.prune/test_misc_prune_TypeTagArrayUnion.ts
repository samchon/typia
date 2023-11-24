import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagArrayUnion } from "../../../structures/TypeTagArrayUnion";

export const test_misc_prune_TypeTagArrayUnion = _test_misc_prune(
  "TypeTagArrayUnion",
)<TypeTagArrayUnion>(TypeTagArrayUnion)((input) =>
  ((input: TypeTagArrayUnion): void => {
    const $pp0 = (input: any) =>
      input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem) $po0(elem);
      });
    const $po0 = (input: any): any => {
      for (const key of Object.keys(input)) {
        if (
          "items" === key ||
          "minItems" === key ||
          "maxItems" === key ||
          "both" === key
        )
          continue;
        delete input[key];
      }
    };
    if (Array.isArray(input)) $pp0(input);
  })(input),
);
