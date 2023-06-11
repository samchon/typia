import typia from "../../../../src";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_ToJsonDouble = _test_is("ToJsonDouble", ToJsonDouble.generate, (input: any): input is ToJsonDouble => {
    return "object" === typeof input && null !== input && true;
});
