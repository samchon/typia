import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsFunction_TupleHierarchical =
  (): void =>
    _test_functional_validateEqualsFunction("TupleHierarchical")(
      TupleHierarchical,
    )((p: (input: TupleHierarchical) => TupleHierarchical) =>
      typia.functional.validateEqualsFunction(p),
    );
