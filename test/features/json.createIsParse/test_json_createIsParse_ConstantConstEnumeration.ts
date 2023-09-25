import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_createIsParse_ConstantConstEnumeration =
    _test_json_isParse("ConstantConstEnumeration")<ConstantConstEnumeration>(
        ConstantConstEnumeration,
    )(typia.json.createIsParse<ConstantConstEnumeration>());
