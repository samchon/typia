import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_stringify_ObjectUnionImplicit =
    _test_json_stringify<ObjectUnionImplicit>(ObjectUnionImplicit)(
        typia.json.createStringify<ObjectUnionImplicit>(),
    );
