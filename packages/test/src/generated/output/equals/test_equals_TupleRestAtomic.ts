import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_equals_TupleRestAtomic = _test_equals(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)((input) =>
  ((input: any, _exceptionable: boolean = true): input is TupleRestAtomic => {
    return (
      Array.isArray(input) &&
      "boolean" === typeof input[0] &&
      "number" === typeof input[1] &&
      Number.isFinite(input[1]) &&
      Array.isArray(input.slice(2)) &&
      input
        .slice(2)
        .every((elem: any, _index1: number) => "string" === typeof elem)
    );
  })(input),
);
