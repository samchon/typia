import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_equalsReturnAsync_TypeTagType =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagType")(TypeTagType)(
      (p: (input: TypeTagType) => Promise<TypeTagType>) =>
        typia.functional.equalsReturn(p),
    );
