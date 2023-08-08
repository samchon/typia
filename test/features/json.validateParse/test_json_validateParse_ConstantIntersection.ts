import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_validateParse_ConstantIntersection =
    _test_json_validateParse(
        "ConstantIntersection",
        ConstantIntersection.generate,
        (input) => typia.json.validateParse<ConstantIntersection>(input),
        ConstantIntersection.SPOILERS,
    );
