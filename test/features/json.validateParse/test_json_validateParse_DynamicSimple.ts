import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_validateParse_DynamicSimple = _test_json_validateParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.json.validateParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
