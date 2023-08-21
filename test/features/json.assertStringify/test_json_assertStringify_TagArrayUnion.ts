import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_assertStringify_TagArrayUnion =
    _test_json_assertStringify("TagArrayUnion")<TagArrayUnion>(TagArrayUnion)(
        (input) => typia.json.assertStringify<TagArrayUnion>(input),
    );
