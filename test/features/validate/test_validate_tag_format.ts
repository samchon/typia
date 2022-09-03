import TSON from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_validate } from "./_test_validate";

export const test_validate_tag_format = _test_validate(
    "format tag",
    TagFormat.generate,
    (input) => TSON.validate(input),
    [
        // INDIVIDUAL
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
        // ENTIRE
        (input) => {
            input.uuid = "invalid uuid";
            input.email = "invalid email";
            input.url = "invalid url";
            input.ipv4 = "invalid ipv4";
            input.ipv6 = "invalid ipv6";

            return [
                "$input.uuid",
                "$input.email",
                "$input.url",
                "$input.ipv4",
                "$input.ipv6",
            ];
        },
    ],
);
