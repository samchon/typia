import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createAssertStringify_ToJsonUnion = _test_assertStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createAssertStringify<ToJsonUnion>(),
);
