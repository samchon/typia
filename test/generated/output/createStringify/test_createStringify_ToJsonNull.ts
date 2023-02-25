import typia from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ToJsonNull = _test_stringify("ToJsonNull", ToJsonNull.generate, (input: ToJsonNull): string => {
    return "null";
});
