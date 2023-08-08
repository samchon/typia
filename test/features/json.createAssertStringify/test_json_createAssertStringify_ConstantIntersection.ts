import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_assertStringify_ConstantIntersection =
    _test_json_assertStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.json.createAssertStringify<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
