import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_json_assertStringify_ObjectPartialAndRequired =
    _test_json_assertStringify(
        "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)((input) =>
        typia.json.assertStringify<ObjectPartialAndRequired>(input),
    );
