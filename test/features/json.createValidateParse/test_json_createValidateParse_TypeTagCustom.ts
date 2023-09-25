import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_createValidateParse_TypeTagCustom =
    _test_json_validateParse("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
        typia.json.createValidateParse<TypeTagCustom>(),
    );
