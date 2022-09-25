import TSON from "../../../src";
import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_is } from "./_test_is";

export const test_is_template_atomic = _test_is(
    "template atomic",
    TemplateAtomic.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.prefix = "prefix-something-wrong" as any),
        (input) => (input.postfix = "something-wrong-postfix" as any),
        (input) => (input.middle_string = "the-middle-value" as any),
        (input) => (input.middle_string_empty = "the--value" as any),
        (input) => (input.middle_numeric = "the-0-value" as any),
        (input) => (input.middle_boolean = "the-false-value" as any),
        (input) => (input.ipv4 = "a.b.c.d" as any),
        (input) => (input.email = "samchon_github.com" as any),
    ],
);
