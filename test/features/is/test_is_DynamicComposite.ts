import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_is_DynamicComposite = _test_is(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.is(input),
    DynamicComposite.SPOILERS,
);
