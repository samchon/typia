import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createValidateParse_ConstantIntersection =
    _test_json_validateParse("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )(typia.json.createValidateParse<ConstantIntersection>());
