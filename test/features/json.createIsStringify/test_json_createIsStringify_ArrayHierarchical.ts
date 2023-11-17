import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createIsStringify_ArrayHierarchical =
  _test_json_isStringify("ArrayHierarchical")<ArrayHierarchical>(
    ArrayHierarchical,
  )(typia.json.createIsStringify<ArrayHierarchical>());
