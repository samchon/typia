import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_assertStringify_UltimateUnion =
    _test_json_assertStringify<UltimateUnion>(UltimateUnion)(
        typia.json.createAssertStringify<UltimateUnion>(),
    );
