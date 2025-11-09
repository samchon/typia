import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isReturn_TupleRestObject = (): void =>
  _test_functional_isReturn("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.isReturn(p),
  );
