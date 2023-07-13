import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_assertParse_ObjectUnionExplicit = _test_json_assertParse(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    (input) => typia.json.assertParse<ObjectUnionExplicit>(input),
    ObjectUnionExplicit.SPOILERS,
);
