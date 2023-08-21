import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_assertStringify_ObjectUnionImplicit =
    _test_json_assertStringify("ObjectUnionImplicit")<ObjectUnionImplicit>(
        ObjectUnionImplicit,
    )(typia.json.createAssertStringify<ObjectUnionImplicit>());
