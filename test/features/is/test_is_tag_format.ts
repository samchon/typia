import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_is } from "./_test_is";

export const test_is_tag_format = _test_is(
    "format tag",
    TagFormat.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.uuid = "invalid uuid"),
        (input) => (input.email = "invalid email"),
        (input) => (input.url = "invalid url"),
        (input) => (input.ipv4 = "invalid ipv4"),
        (input) => (input.ipv6 = "invalid ipv6"),
    ],
);
