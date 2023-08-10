import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_assertStringify_DynamicUnion =
    _test_json_assertStringify<DynamicUnion>(DynamicUnion)(
        typia.json.createAssertStringify<DynamicUnion>(),
    );
