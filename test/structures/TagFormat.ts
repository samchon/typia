import { v4 } from "uuid";

import { Spoiler } from "../internal/Spoiler";

export interface TagFormat {
    /**
     * @format uuid
     */
    uuid: string;

    /**
     * Email address
     *
     * @format email
     */
    email: string;

    /**
     * URL address.
     *
     * @format url
     */
    url: string;

    /**
     * IPv4 address.
     *
     * @format ipv4
     */
    ipv4: string;

    /**
     * IPv6 address.
     *
     * @format ipv6
     */
    ipv6: string;

    /**
     * A custom format string.
     *
     * @format my-custom-format
     */
    custom: string;
}
export namespace TagFormat {
    export function generate(): TagFormat {
        return {
            uuid: v4(),
            email: "samchon.github@gmail.com",
            url: "https://github.com/samchon/typia",
            ipv4: "127.0.0.1",
            ipv6: "0:0:0:0:0:0:0:1",
            custom: "2016-02-06",
        };
    }

    export const SPOILERS: Spoiler<TagFormat>[] = [
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
    ];
}
