import typia from "../../../../src";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonNull = _test_is(
    "ToJsonNull",
    ToJsonNull.generate,
    (input: any): input is ToJsonNull => {
        const $io0 = (input: any): boolean =>
            "function" === typeof input.toJSON;
        return "object" === typeof input && null !== input && $io0(input);
    },
);
