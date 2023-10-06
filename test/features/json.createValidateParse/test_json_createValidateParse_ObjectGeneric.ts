import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createValidateParse_ObjectGeneric =
    _test_json_validateParse("ObjectGeneric")<ObjectGeneric>(ObjectGeneric)(
        typia.json.createValidateParse<ObjectGeneric>(),
    );
