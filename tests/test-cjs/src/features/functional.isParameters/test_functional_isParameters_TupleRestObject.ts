import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isParameters_TupleRestObject = (): void =>
  _test_functional_isParameters("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.isParameters(p),
  );
