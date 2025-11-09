import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_isParametersAsync_TypeTagType = (): Promise<void> => _test_functional_isParametersAsync(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.isParameters(p),
)