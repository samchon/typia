import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_is_DynamicUndefined = _test_is<DynamicUndefined>(
    DynamicUndefined,
)(typia.createIs<DynamicUndefined>());
