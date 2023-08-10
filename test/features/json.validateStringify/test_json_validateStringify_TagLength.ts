import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagLength } from "../../structures/TagLength";

export const test_json_validateStringify_TagLength =
    _test_json_validateStringify<TagLength>(TagLength)((input) =>
        typia.json.validateStringify<TagLength>(input),
    );
