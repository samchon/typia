import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_validateParse_ObjectNullable =
    _test_json_validateParse<ObjectNullable>(ObjectNullable)(
        typia.json.createValidateParse<ObjectNullable>(),
    );
