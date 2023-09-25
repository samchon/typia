import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createIs_DynamicComposite = _test_is(
    "DynamicComposite",
)<DynamicComposite>(DynamicComposite)(typia.createIs<DynamicComposite>());
