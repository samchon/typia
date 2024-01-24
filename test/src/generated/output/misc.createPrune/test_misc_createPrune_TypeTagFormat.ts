import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_misc_createPrune_TypeTagFormat = _test_misc_prune(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input: TypeTagFormat): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "byte" === key ||
        "password" === key ||
        "regex" === key ||
        "uuid" === key ||
        "email" === key ||
        "hostname" === key ||
        "ipv4" === key ||
        "ipv6" === key ||
        "uri" === key ||
        "uriReference" === key ||
        "uriTemplate" === key ||
        "url" === key ||
        "datetime" === key ||
        "date" === key ||
        "time" === key ||
        "duration" === key ||
        "jsonPointer" === key ||
        "relativeJsonPointer" === key
      )
        continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
