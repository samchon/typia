import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalArray } from "../../../structures/FunctionalArray";

export const test_createEquals_FunctionalArray = _test_equals(
  "FunctionalArray",
)<FunctionalArray>(FunctionalArray)(
  (input: any, _exceptionable: boolean = true): input is FunctionalArray => {
    return (
      Array.isArray(input) &&
      input.every((elem: any, _index1: number) => "function" === typeof elem)
    );
  },
);
