import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_createAssertParse_ArrayRecursive =
  _test_json_assertParse("ArrayRecursive")<ArrayRecursive>(ArrayRecursive)(
    typia.json.createAssertParse<ArrayRecursive>(),
  );
