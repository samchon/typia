import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_validateParse_TagTuple =
    _test_json_validateParse<TagTuple>(TagTuple)(
        typia.json.createValidateParse<TagTuple>(),
    );
