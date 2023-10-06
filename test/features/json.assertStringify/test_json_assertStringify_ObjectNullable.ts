import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_assertStringify_ObjectNullable = _test_json_assertStringify(
    "ObjectNullable",
)<ObjectNullable>(
    ObjectNullable
)((input) => typia.json.assertStringify<ObjectNullable>(input));
