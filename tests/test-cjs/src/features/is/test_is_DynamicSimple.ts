import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_is_DynamicSimple = (): void =>
  _test_is("DynamicSimple")<DynamicSimple>(DynamicSimple)((input) =>
    typia.is<DynamicSimple>(input),
  );
