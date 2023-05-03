import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";

export interface TagFormat {
    /**
     * Universally Unique Identifier.
     *
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
     * Date only.
     *
     * @format date
     */
    date: string;

    /**
     * Date and time.
     *
     * @format date-time
     */
    date_time: string;

    /**
     * Date and time with only lowercase characters.
     *
     * @format datetime
     */
    datetime: string;

    /**
     * Date and time with camelCase.
     *
     * @format dateTime
     */
    dateTime: string;

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
            date: new Date().toISOString().substring(0, 10),
            date_time: new Date().toLocaleDateString(),
            datetime: new Date().toISOString(),
            dateTime: new Date().toString(),
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
        (input) => {
            input.date = new Date().toString();
            return ["$input.date"];
        },
        (input) => {
            input.date_time = "invalid datetime";
            return ["$input.date_time"];
        },
        (input) => {
            input.datetime = "invalid datetime";
            return ["$input.datetime"];
        },
        (input) => {
            input.dateTime = "invalid datetime";
            return ["$input.dateTime"];
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
