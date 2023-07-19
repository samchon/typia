import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";

export const test_is_ToJsonUndefined = _test_is<ToJsonUndefined>(
    ToJsonUndefined,
)((input) =>
    ((input: any): input is ToJsonUndefined => {
        return "object" === typeof input && null !== input && true;
    })(input),
);
