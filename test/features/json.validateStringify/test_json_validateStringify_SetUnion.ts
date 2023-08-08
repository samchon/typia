import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { SetUnion } from "../../structures/SetUnion";

export const test_json_validateStringify_SetUnion =
    _test_json_validateStringify(
        "SetUnion",
        SetUnion.generate,
        (input) => typia.json.validateStringify(input),
        SetUnion.SPOILERS,
    );
