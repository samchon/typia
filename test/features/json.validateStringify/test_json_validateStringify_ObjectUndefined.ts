import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_validateStringify_ObjectUndefined =
    _test_json_validateStringify(
        "ObjectUndefined",
        ObjectUndefined.generate,
        (input) => typia.json.validateStringify(input),
        ObjectUndefined.SPOILERS,
    );
