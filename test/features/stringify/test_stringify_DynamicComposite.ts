import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_stringify_DynamicComposite = _test_stringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.stringify<DynamicComposite>(input),
);
