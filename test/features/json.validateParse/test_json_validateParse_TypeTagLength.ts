import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_validateParse_TypeTagLength = _test_json_validateParse(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)((input) =>
    typia.json.validateParse<TypeTagLength>(input),
);
