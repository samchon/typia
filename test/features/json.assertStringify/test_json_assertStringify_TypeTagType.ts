import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_assertStringify_TypeTagType = _test_json_assertStringify(
    "TypeTagType",
)<TypeTagType>(TypeTagType)((input) =>
    typia.json.assertStringify<TypeTagType>(input),
);
