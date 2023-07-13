import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_json_validateStringify_ConstantEnumeration =
    _test_json_validateStringify(
        "ConstantEnumeration",
        ConstantEnumeration.generate,
        typia.json.createValidateStringify<ConstantEnumeration>(),
        ConstantEnumeration.SPOILERS,
    );
