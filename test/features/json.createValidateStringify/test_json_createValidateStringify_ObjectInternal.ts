import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_json_validateStringify_ObjectInternal =
    _test_json_validateStringify<ObjectInternal>(ObjectInternal)(
        typia.json.createValidateStringify<ObjectInternal>(),
    );
