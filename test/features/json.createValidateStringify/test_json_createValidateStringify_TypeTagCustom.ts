import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_validateStringify_TypeTagCustom =
    _test_json_validateStringify("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
        typia.json.createValidateStringify<TypeTagCustom>(),
    );
