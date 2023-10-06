import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createValidateStringify_ObjectDynamic =
    _test_json_validateStringify("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)(
        typia.json.createValidateStringify<ObjectDynamic>(),
    );
