import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_json_validateParse_DynamicEnumeration =
    _test_json_validateParse(
        "DynamicEnumeration",
        DynamicEnumeration.generate,
        (input) => typia.json.validateParse<DynamicEnumeration>(input),
        DynamicEnumeration.SPOILERS,
    );
