import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_validateParse_ObjectUnionDouble =
    _test_json_validateParse("ObjectUnionDouble")<ObjectUnionDouble>(
        ObjectUnionDouble,
    )((input) => typia.json.validateParse<ObjectUnionDouble>(input));
