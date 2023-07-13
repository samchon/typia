import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_json_assertParse_ConstantConstEnumeration =
    _test_json_assertParse(
        "ConstantConstEnumeration",
        ConstantConstEnumeration.generate,
        typia.json.createAssertParse<ConstantConstEnumeration>(),
        ConstantConstEnumeration.SPOILERS,
    );
