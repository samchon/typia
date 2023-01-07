import typia from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicComposite = _test_is(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIs<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);