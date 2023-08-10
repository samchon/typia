import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_assertStringify_ObjectUnionExplicit =
    _test_json_assertStringify<ObjectUnionExplicit>(ObjectUnionExplicit)(
        (input) => typia.json.assertStringify<ObjectUnionExplicit>(input),
    );
