import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_is_ConstantEnumeration = (): void =>
  _test_is("ConstantEnumeration")<ConstantEnumeration>(ConstantEnumeration)(
    (input) => typia.is<ConstantEnumeration>(input),
  );
