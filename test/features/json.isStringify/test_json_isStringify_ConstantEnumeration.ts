import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_isStringify_ConstantEnumeration = _test_json_isStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) => typia.json.isStringify(input),
    ConstantEnumeration.SPOILERS,
);
