import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_json_isParse_DynamicSimple = _test_json_isParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.json.isParse<DynamicSimple>(input),
    DynamicSimple.SPOILERS,
);
