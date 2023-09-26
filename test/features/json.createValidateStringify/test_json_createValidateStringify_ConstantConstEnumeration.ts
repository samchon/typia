import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createValidateStringify_ConstantConstEnumeration =
    _test_json_validateStringify(
        "ConstantConstEnumeration",
    )<ConstantConstEnumeration>(ConstantConstEnumeration)(
        typia.json.createValidateStringify<ConstantConstEnumeration>(),
    );
