import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_assertStringify_ObjectGeneric =
    _test_json_assertStringify<ObjectGeneric>(ObjectGeneric)((input) =>
        typia.json.assertStringify(input),
    );
