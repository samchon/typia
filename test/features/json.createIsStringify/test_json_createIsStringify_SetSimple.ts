import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { SetSimple } from "../../structures/SetSimple";

export const test_json_isStringify_SetSimple =
    _test_json_isStringify<SetSimple>(SetSimple)(
        typia.json.createIsStringify<SetSimple>(),
    );
