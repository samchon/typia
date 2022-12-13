import { v4 } from "uuid";

import { Spoiler } from "../internal/Spoiler";

export interface TagPattern {
    /**
     * @pattern [0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$
     */
    uuid: string;

    /**
     * @pattern ^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$
     */
    email: string;

    /**
     * @pattern ^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)
     */
    url: string;

    /**
     * @pattern (?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
     */
    ipv4: string;

    /**
     * @pattern (([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$
     */
    ipv6: string;
}
export namespace TagPattern {
    export function generate(): TagPattern {
        return {
            uuid: v4(),
            email: "samchon.github@gmail.com",
            url: "https://github.com/samchon/typia",
            ipv4: "127.0.0.1",
            ipv6: "0:0:0:0:0:0:0:1",
        };
    }

    export const SPOILERS: Spoiler<TagPattern>[] = [
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
    ];
}
