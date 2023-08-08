import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_validateStringify_ArraySimple =
    _test_json_validateStringify(
        "ArraySimple",
        ArraySimple.generate,
        (input) => typia.json.validateStringify(input),
        ArraySimple.SPOILERS,
    );
