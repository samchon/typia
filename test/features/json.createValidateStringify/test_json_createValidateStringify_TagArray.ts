import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagArray } from "../../structures/TagArray";

export const test_json_validateStringify_TagArray =
    _test_json_validateStringify<TagArray>(TagArray)(
        typia.json.createValidateStringify<TagArray>(),
    );
