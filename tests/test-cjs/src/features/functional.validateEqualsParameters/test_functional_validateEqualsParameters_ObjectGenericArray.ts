import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateEqualsParameters_ObjectGenericArray =
  (): void =>
    _test_functional_validateEqualsParameters("ObjectGenericArray")(
      ObjectGenericArray,
    )((p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.validateEqualsParameters(p),
    );
