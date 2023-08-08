import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_json_validateParse_ArrayRepeatedUnion =
    _test_json_validateParse(
        "ArrayRepeatedUnion",
        ArrayRepeatedUnion.generate,
        typia.json.createValidateParse<ArrayRepeatedUnion>(),
        ArrayRepeatedUnion.SPOILERS,
    );
