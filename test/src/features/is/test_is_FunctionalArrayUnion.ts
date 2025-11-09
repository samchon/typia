import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_is_FunctionalArrayUnion = (): void =>
  _test_is("FunctionalArrayUnion")<FunctionalArrayUnion>(FunctionalArrayUnion)(
    (input) => typia.is<FunctionalArrayUnion>(input),
  );
