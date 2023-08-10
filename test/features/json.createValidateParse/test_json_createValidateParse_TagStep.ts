import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagStep } from "../../structures/TagStep";

export const test_json_validateParse_TagStep =
    _test_json_validateParse<TagStep>(TagStep)(
        typia.json.createValidateParse<TagStep>(),
    );
