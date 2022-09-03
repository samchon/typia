import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_is } from "./_test_is";

export const test_is_tag_pattern = _test_is(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.uuid = "invalid uuid"),
        (input) => (input.email = "invalid email"),
        (input) => (input.url = "invalid url"),
        (input) => (input.ipv4 = "invalid ipv4"),
        (input) => (input.ipv6 = "invalid ipv6"),
    ],
);
