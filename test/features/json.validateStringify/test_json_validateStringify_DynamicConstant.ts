import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_validateStringify_DynamicConstant =
    _test_json_validateStringify("DynamicConstant")<DynamicConstant>(
        DynamicConstant,
    )((input) => typia.json.validateStringify<DynamicConstant>(input));
