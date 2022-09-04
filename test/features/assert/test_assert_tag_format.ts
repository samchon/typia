import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assert } from "./_test_assert";

export const test_assert_tag_format = _test_assert(
    "format tag",
    TagFormat.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            input.uuid = "invalid uuid";
            return "$input.uuid";
        },
        (input) => {
            input.email = "invalid email";
            return "$input.email";
        },
        (input) => {
            input.url = "invalid url";
            return "$input.url";
        },
        (input) => {
            input.ipv4 = "invalid ipv4";
            return "$input.ipv4";
        },
        (input) => {
            input.ipv6 = "invalid ipv6";
            return "$input.ipv6";
        },
    ],
);
