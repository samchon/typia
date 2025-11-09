import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_is_ClassNonPublic = (): void =>
  _test_is("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)((input) =>
    typia.is<ClassNonPublic>(input),
  );
