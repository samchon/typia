import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_createAssertParse_ObjectPrimitive =
    _test_json_assertParse("ObjectPrimitive")<ObjectPrimitive>(ObjectPrimitive)(
        typia.json.createAssertParse<ObjectPrimitive>(),
    );
