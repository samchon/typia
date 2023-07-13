import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_validateStringify_SetSimple =
    _test_json_validateStringify(
        "SetSimple",
        SetSimple.generate,
        (input) => typia.json.validateStringify(input),
        SetSimple.SPOILERS,
    );
