import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_json_validateParse_DynamicUnion = _test_json_validateParse(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.json.createValidateParse<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
