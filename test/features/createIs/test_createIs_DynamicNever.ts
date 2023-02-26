import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createIs_DynamicNever = _test_is(
    "DynamicNever",
    DynamicNever.generate,
    typia.createIs<DynamicNever>(),
    DynamicNever.SPOILERS,
);
