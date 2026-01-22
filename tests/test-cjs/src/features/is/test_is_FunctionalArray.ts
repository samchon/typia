import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_is_FunctionalArray = (): void =>
  _test_is("FunctionalArray")<FunctionalArray>(FunctionalArray)((input) =>
    typia.is<FunctionalArray>(input),
  );
