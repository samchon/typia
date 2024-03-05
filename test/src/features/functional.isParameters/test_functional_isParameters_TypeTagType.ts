import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isParameters_TypeTagType =
  _test_functional_isParameters("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.isParameters(p),
  );
