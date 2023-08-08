import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_json_validateParse_ObjectUndefined = _test_json_validateParse(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.json.createValidateParse<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
