import crypto from "crypto";
import { tags } from "typia";
import { v4 } from "uuid";

import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface TypeTagFormat {
  // SPECIAL CHARACTERS
  byte: string & tags.Format<"byte">;
  password: string & tags.Format<"password">;
  regex: string & tags.Format<"regex">;
  uuid: string & tags.Format<"uuid">;

  // ADDRESSES
  email: string & tags.Format<"email">;
  hostname: string & tags.Format<"hostname">;
  ipv4: string & tags.Format<"ipv4">;
  ipv6: string & tags.Format<"ipv6">;
  uri: string & tags.Format<"uri">;
  uriReference: string & tags.Format<"uri-reference">;
  uriTemplate: string & tags.Format<"uri-template">;
  url: string & tags.Format<"url">;

  // TIMESTAMPS
  datetime: string & tags.Format<"date-time">;
  date: string & tags.Format<"date">;
  time: string & tags.Format<"time">;
  duration: string & tags.Format<"duration">;

  // POINTERS
  jsonPointer: string & tags.Format<"json-pointer">;
  relativeJsonPointer: string & tags.Format<"relative-json-pointer">;
}
export namespace TypeTagFormat {
  export function generate(): TypeTagFormat {
    return {
      // SPECIAL CHARACTERS
      byte: crypto.randomBytes(128).toString("base64"),
      password: TestRandomGenerator.string(),
      regex:
        "/^(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)$/",
      uuid: v4(),
      // ADDRESSES
      email: "samchon.github@gmail.com",
      hostname: "github.com",
      ipv4: "127.0.0.1",
      ipv6: "0:0:0:0:0:0:0:1",
      uri: "git://github.com/samchon/typia.git",
      uriReference: "git://github.com/samchon/typia.git",
      uriTemplate: "git://github.com/{account}/{repository}.git",
      url: "https://github.com/samchon/typia",
      // TIMESTAMPS
      datetime: new Date().toISOString(),
      date: new Date().toISOString().substring(0, 10),
      time: new Date().toISOString().substring(11, 23),
      duration: TestRandomGenerator.duration(),
      // POINTERS
      jsonPointer: "/components/schemas/ObjectSimple.IPoint3D",
      relativeJsonPointer: "2#",
    };
  }

  export const SPOILERS: Spoiler<TypeTagFormat>[] = [
    // SPECIAL CHARACTERS
    (input) => {
      input.byte = "aGVsbG8gd29ybG=";
      return ["$input.byte"];
    },
    (input) => {
      input.regex = "[9-0]";
      return ["$input.regex"];
    },
    (input) => {
      input.uuid = "f81d4fae7dec11d0a76500a0c91e6bf6";
      return ["$input.uuid"];
    },

    // ADDRESSES
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

    // TIMESTAMPS
    (input) => {
      input.date = new Date().toString();
      return ["$input.date"];
    },
    (input) => {
      input.datetime = "invalid datetime";
      return ["$input.datetime"];
    },

    // POINTERS

    // INDIVIDUAL

    // COMPOSITE
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
