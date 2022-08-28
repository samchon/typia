import { v4 } from "uuid";
import { RandomGenerator } from "../internal/RandomGenerator";

export interface TagSimple {
    /**
     * Ranged integer value.
     *
     * @range [3, 11)
     */
    numeric: number;

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
     * Ranged length string.
     *
     * @length [2, 5]
     */
    short: string;

    /**
     * Regex pattern.
     *
     * @pattern ^[a-zA-Z0-9]*$
     */
    regex: string;
}
export namespace TagSimple {
    export function generate(): TagSimple {
        return {
            uuid: v4(),
            numeric: RandomGenerator.integer(1, 3),
            email: `${RandomGenerator.string()}@samchon.org`,
            ipv4: `127.0.0.1/8`,
            ipv6: "0:0:0:0:0:0:0:1",
            short: RandomGenerator.string(RandomGenerator.integer(2, 5)),
            regex: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        };
    }
}
