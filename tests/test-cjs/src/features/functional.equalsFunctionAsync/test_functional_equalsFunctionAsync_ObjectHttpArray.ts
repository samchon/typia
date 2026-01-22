import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_equalsFunctionAsync_ObjectHttpArray =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectHttpArray")(ObjectHttpArray)(
      (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
        typia.functional.equalsFunction(p),
    );
