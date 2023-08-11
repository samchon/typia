import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagDefault } from "../../structures/TagDefault";

export const test_json_validateParse_TagDefault =
    _test_json_validateParse<TagDefault>(TagDefault)(
        typia.json.createValidateParse<TagDefault>(),
    );
