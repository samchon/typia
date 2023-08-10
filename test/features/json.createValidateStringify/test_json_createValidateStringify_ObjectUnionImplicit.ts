import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_validateStringify_ObjectUnionImplicit =
    _test_json_validateStringify<ObjectUnionImplicit>(ObjectUnionImplicit)(
        typia.json.createValidateStringify<ObjectUnionImplicit>(),
    );
