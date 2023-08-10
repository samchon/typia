import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_json_assertStringify_ToJsonDouble =
    _test_json_assertStringify<ToJsonDouble>(ToJsonDouble)((input) =>
        typia.json.assertStringify<ToJsonDouble>(input),
    );
