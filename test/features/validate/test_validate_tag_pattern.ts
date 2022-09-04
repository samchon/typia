import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_pattern = _test_validate(
    "pattern tag",
    TagPattern.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.uuid = "invalid uuid";
            return ["$input.uuid"];
        },
        (input) => {
            input.email = "invalid email";
            return ["$input.email"];
        },
        (input) => {
            input.url = "invalid url";
            return ["$input.url"];
        },
        (input) => {
            input.ipv4 = "invalid ipv4";
            return ["$input.ipv4"];
        },
        (input) => {
            input.ipv6 = "invalid ipv6";
            return ["$input.ipv6"];
        },
    ],
);
