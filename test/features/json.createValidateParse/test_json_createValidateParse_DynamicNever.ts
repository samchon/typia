import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_json_validateParse_DynamicNever = _test_json_validateParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.json.createValidateParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);
