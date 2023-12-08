import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createIs_ClassNonPublic = _test_is(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)(typia.createIs<ClassNonPublic>());
