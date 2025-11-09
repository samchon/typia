import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsReturnAsync_ObjectOptional = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.equalsReturn(p),
)