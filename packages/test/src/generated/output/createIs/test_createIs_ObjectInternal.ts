import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_createIs_ObjectInternal = _test_is(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)((input: any): input is ObjectInternal => {
  return (
    "object" === typeof input &&
    null !== input &&
    "string" === typeof (input as any).id &&
    "string" === typeof (input as any).name
  );
});
