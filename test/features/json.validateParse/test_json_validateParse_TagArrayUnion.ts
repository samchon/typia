import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_json_validateParse_TagArrayUnion =
    _test_json_validateParse<TagArrayUnion>(TagArrayUnion)((input) =>
        typia.json.validateParse<TagArrayUnion>(input),
    );
