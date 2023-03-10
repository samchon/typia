import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_message_TemplateAtomic = _test_message(
    "TemplateAtomic",
    typia.message<TemplateAtomic>(),
);
