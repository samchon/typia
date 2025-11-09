import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_functional_isParametersAsync_TypeTagFormat = (): Promise<void> => _test_functional_isParametersAsync(
  "TypeTagFormat"
)(TypeTagFormat)(
  (p: (input: TypeTagFormat) => Promise<TypeTagFormat>) =>
    typia.functional.isParameters(p),
)