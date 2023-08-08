import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_json_validateStringify_NativeAlias =
    _test_json_validateStringify(
        "NativeAlias",
        NativeAlias.generate,
        (input) => typia.json.validateStringify(input),
        NativeAlias.SPOILERS,
    );
