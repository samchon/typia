import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_assertParse_DynamicEnumeration = _test_json_assertParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.json.assertParse<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
