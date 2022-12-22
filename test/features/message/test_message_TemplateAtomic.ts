import typia from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_message } from "../internal/_test_message";

export const test_message_TemplateAtomic = _test_message(
    "TemplateAtomic",
    typia.message<TemplateAtomic>(),
);