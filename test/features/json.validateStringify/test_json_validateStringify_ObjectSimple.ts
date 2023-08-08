import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_validateStringify_ObjectSimple =
    _test_json_validateStringify(
        "ObjectSimple",
        ObjectSimple.generate,
        (input) => typia.json.validateStringify(input),
        ObjectSimple.SPOILERS,
    );
