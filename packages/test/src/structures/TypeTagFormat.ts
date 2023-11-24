import typia from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";

export interface TypeTagFormat {
  uuid: string & typia.tags.Format<"uuid">;
  email: string & typia.tags.Format<"email">;
  url: string & typia.tags.Format<"url">;
  ipv4: string & typia.tags.Format<"ipv4">;
  ipv6: string & typia.tags.Format<"ipv6">;
  date: string & typia.tags.Format<"date">;
  date_time: string & typia.tags.Format<"date-time">;
}
export namespace TypeTagFormat {
  export function generate(): TypeTagFormat {
    return {
      uuid: v4(),
      email: "samchon.github@gmail.com",
      url: "https://github.com/samchon/typia",
      ipv4: "127.0.0.1",
      ipv6: "0:0:0:0:0:0:0:1",
      date: new Date().toISOString().substring(0, 10),
      date_time: new Date().toLocaleDateString(),
    };
  }

  export const SPOILERS: Spoiler<TypeTagFormat>[] = [
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
