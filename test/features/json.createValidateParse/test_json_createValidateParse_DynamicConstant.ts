import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_json_validateParse_DynamicConstant =
    _test_json_validateParse<DynamicConstant>(DynamicConstant)(
        typia.json.createValidateParse<DynamicConstant>(),
    );
