import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_assertStringify_TypeTagArray =
    _test_json_assertStringify("TypeTagArray")<TypeTagArray>(TypeTagArray)(
        (input) => typia.json.assertStringify<TypeTagArray>(input),
    );
