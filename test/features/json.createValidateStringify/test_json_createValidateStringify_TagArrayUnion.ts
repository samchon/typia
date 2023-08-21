import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_validateStringify_TagArrayUnion =
    _test_json_validateStringify("TagArrayUnion")<TagArrayUnion>(TagArrayUnion)(
        typia.json.createValidateStringify<TagArrayUnion>(),
    );
