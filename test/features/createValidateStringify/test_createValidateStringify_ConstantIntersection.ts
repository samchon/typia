import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createValidateStringify_ConstantIntersection =
    _test_validateStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.createValidateStringify<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
