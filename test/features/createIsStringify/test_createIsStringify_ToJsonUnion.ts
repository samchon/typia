import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_createIsStringify_ToJsonUnion = _test_isStringify(
    "ToJsonUnion",
    ToJsonUnion.generate,
    typia.createIsStringify<ToJsonUnion>(),
);
