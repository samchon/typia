import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_isParse_ObjectUnionImplicit =
    _test_json_isParse<ObjectUnionImplicit>(ObjectUnionImplicit)(
        typia.json.createIsParse<ObjectUnionImplicit>(),
    );
