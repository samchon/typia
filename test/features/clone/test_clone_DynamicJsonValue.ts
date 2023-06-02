import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_clone_DynamicJsonValue = _test_clone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.clone(input),
);
