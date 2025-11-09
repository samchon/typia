import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectClosure = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.assertEqualsParameters(p),
)