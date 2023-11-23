import typia from "typia";

import { _test_misc_prune } from "../../../internal/_test_misc_prune";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_misc_createPrune_ObjectLiteralType = _test_misc_prune(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input: ObjectLiteralType): void => {
  const $po0 = (input: any): any => {
    for (const key of Object.keys(input)) {
      if ("id" === key || "name" === key || "age" === key) continue;
      delete input[key];
    }
  };
  if ("object" === typeof input && null !== input) $po0(input);
});
