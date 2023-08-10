import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagFormat } from "../../structures/TagFormat";

export const test_json_validateStringify_TagFormat =
    _test_json_validateStringify<TagFormat>(TagFormat)(
        typia.json.createValidateStringify<TagFormat>(),
    );
