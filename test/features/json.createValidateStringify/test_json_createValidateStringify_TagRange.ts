import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagRange } from "../../structures/TagRange";

export const test_json_validateStringify_TagRange =
    _test_json_validateStringify("TagRange")<TagRange>(TagRange)(
        typia.json.createValidateStringify<TagRange>(),
    );
