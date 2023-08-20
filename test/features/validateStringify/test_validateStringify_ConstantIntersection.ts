import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validateStringify_ConstantIntersection =
    _test_validateStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        (input) => typia.validateStringify<ConstantIntersection>(input),
        ConstantIntersection.SPOILERS,
    );
