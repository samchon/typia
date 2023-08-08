import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_validateStringify_ConstantIntersection =
    _test_json_validateStringify(
        "ConstantIntersection",
        ConstantIntersection.generate,
        typia.json.createValidateStringify<ConstantIntersection>(),
        ConstantIntersection.SPOILERS,
    );
