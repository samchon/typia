import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createAssertStringify_ArrayHierarchical =
  _test_json_assertStringify("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.json.createAssertStringify<ArrayHierarchical>());
