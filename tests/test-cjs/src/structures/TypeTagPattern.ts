import typia from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagPattern {
  uuid: string &
    typia.tags.Pattern<`^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$`>;

  email: string &
    typia.tags.Pattern<"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$">;

  ipv4: string &
    typia.tags.Pattern<`^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$`>;

  ipv6: string &
    typia.tags.Pattern<`^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$`>;
}
export namespace TypeTagPattern {
  export function generate(): TypeTagPattern {
    return {
      uuid: v4(),
      email: "samchon.github@gmail.com",
      ipv4: "127.0.0.1",
      ipv6: "0:0:0:0:0:0:0:1",
    };
  }

  export const SPOILERS: Spoiler<TypeTagPattern>[] = [
    (input) => {
      input.uuid = "invalid uuid";
      return ["$input.uuid"];
    },
    (input) => {
      input.email = "invalid email";
      return ["$input.email"];
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
