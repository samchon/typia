import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_validateParse_ObjectSimple = _test_json_validateParse(
    "ObjectSimple",
    ObjectSimple.generate,
    typia.json.createValidateParse<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
