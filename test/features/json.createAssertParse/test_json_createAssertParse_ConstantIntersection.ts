import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_createAssertParse_ConstantIntersection =
    _test_json_assertParse("ConstantIntersection")<ConstantIntersection>(
        ConstantIntersection,
    )(typia.json.createAssertParse<ConstantIntersection>());
