import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_createValidateStringify_DynamicConstant =
    _test_json_validateStringify("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )(typia.json.createValidateStringify<DynamicConstant>());
