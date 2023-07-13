import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_json_assertParse_UltimateUnion = _test_json_assertParse(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.json.assertParse<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
