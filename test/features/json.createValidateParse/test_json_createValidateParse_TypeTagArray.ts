import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_validateParse_TypeTagArray = _test_json_validateParse(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.json.createValidateParse<TypeTagArray>());
