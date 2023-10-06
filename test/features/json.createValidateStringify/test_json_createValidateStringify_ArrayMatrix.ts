import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createValidateStringify_ArrayMatrix =
    _test_json_validateStringify("ArrayMatrix")<ArrayMatrix>(ArrayMatrix)(
        typia.json.createValidateStringify<ArrayMatrix>(),
    );
