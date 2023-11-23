import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_misc_createPrune_ObjectAlias = _test_misc_prune(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input: ObjectAlias): void => {
  const $pp0 = (input: any) =>
    input.forEach((elem: any) => {
      if ("object" === typeof elem && null !== elem) $po0(elem);
    });
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if (
        "id" === key ||
        "email" === key ||
        "name" === key ||
        "sex" === key ||
        "age" === key ||
        "dead" === key
      )
        continue;
      delete input[key];
    }
  };
  if (Array.isArray(input)) $pp0(input);
});
