import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_json_validateStringify_TagTuple =
    _test_json_validateStringify(
        "TagTuple",
        TagTuple.generate,
        typia.json.createValidateStringify<TagTuple>(),
        TagTuple.SPOILERS,
    );
