import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_createIs_ClassNonPublic = _test_is(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)((input: any): input is ClassNonPublic => {
  return (
    "object" === typeof input &&
    null !== input &&
    "string" === typeof (input as any).implicit &&
    "string" === typeof (input as any).shown
  );
});
