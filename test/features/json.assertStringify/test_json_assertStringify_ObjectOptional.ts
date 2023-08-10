import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_assertStringify_ObjectOptional =
    _test_json_assertStringify<ObjectOptional>(ObjectOptional)((input) =>
        typia.json.assertStringify<ObjectOptional>(input),
    );
