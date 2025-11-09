import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertParametersAsync_ObjectHttpUndefindable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectHttpUndefindable",
    )(ObjectHttpUndefindable)(
      (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
        typia.functional.assertParameters(p),
    );
