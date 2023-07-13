import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_assertParse_DynamicConstant = _test_json_assertParse(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.json.createAssertParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
