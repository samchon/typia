import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagLength } from "../../structures/TagLength";

export const test_json_validateParse_TagLength =
    _test_json_validateParse<TagLength>(TagLength)(
        typia.json.createValidateParse<TagLength>(),
    );
