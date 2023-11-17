import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_createAssertStringify_ArrayUnion =
  _test_json_assertStringify("ArrayUnion")<ArrayUnion>(ArrayUnion)(
    typia.json.createAssertStringify<ArrayUnion>(),
  );
