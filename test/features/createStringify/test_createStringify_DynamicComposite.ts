import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createStringify_DynamicComposite = _test_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createStringify<DynamicComposite>(),
);
