import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagType } from "../../structures/TagType";

export const test_json_validateStringify_TagType =
    _test_json_validateStringify<TagType>(TagType)((input) =>
        typia.json.validateStringify(input),
    );
