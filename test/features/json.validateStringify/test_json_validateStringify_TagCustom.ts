import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagCustom } from "../../structures/TagCustom";

export const test_json_validateStringify_TagCustom =
    _test_json_validateStringify(
        "TagCustom",
        TagCustom.generate,
        (input) => typia.json.validateStringify(input),
        TagCustom.SPOILERS,
    );
