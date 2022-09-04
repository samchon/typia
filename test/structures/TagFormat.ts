import { v4 } from "uuid";

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
}
export namespace TagFormat {
    export function generate(): TagFormat {
        return {
            uuid: v4(),
            email: "samchon.github@gmail.com",
            url: "https://github.com/samchon/typescript-json",
            ipv4: "127.0.0.1",
            ipv6: "0:0:0:0:0:0:0:1",
        };
    }
}
