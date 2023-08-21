import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_validate_NativeSimple = _test_validate(
    "NativeSimple",
)<NativeSimple>(NativeSimple)((input) => typia.validate<NativeSimple>(input));
