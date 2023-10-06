import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_assertParse_TypeTagRange = _test_json_assertParse(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
    typia.json.assertParse<TypeTagRange>(input),
);
