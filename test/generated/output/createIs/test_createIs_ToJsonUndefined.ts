import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ToJsonUndefined } from "../../../structures/ToJsonUndefined";
export const test_createIs_ToJsonUndefined = _test_is("ToJsonUndefined", ToJsonUndefined.generate, (input: any): input is ToJsonUndefined => {
    return "object" === typeof input && null !== input && true;
});
