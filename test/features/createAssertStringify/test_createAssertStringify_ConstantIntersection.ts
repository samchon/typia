import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createAssertStringify_ConstantIntersection =
    _test_assertStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.createAssertStringify<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
