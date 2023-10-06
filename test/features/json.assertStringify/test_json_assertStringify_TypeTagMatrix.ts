import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_assertStringify_TypeTagMatrix =
    _test_json_assertStringify("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
        (input) => typia.json.assertStringify<TypeTagMatrix>(input),
    );
