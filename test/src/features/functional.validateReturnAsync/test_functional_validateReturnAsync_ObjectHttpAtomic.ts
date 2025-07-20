import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_functional_validateReturnAsync_ObjectHttpAtomic =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectHttpAtomic")(ObjectHttpAtomic)(
      (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
        typia.functional.validateReturn(p),
    );
