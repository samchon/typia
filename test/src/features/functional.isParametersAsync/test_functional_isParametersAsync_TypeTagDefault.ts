import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_isParametersAsync_TypeTagDefault = _test_functional_isParametersAsync(
  "TypeTagDefault"
)(TypeTagDefault)(
  (p: (input: TypeTagDefault) => Promise<TypeTagDefault>) =>
    typia.functional.isParameters(p),
)