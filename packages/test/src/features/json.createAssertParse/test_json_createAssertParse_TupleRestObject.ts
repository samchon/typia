import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_json_createAssertParse_TupleRestObject =
  _test_json_assertParse("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    typia.json.createAssertParse<TupleRestObject>(),
  );
