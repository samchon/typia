import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_validateStringify_ConstantConstEnumeration =
    _test_json_validateStringify<ConstantConstEnumeration>(
        ConstantConstEnumeration,
    )((input) => typia.json.validateStringify(input));
