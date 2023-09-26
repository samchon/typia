import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createAssertParse_ObjectGenericUnion =
    _test_json_assertParse("ObjectGenericUnion")<ObjectGenericUnion>(
        ObjectGenericUnion,
    )(typia.json.createAssertParse<ObjectGenericUnion>());
