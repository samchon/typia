import crypto from "crypto";
import { tags } from "typia";
import { _randomFormatIpv4 } from "typia/lib/internal/_randomFormatIpv4";
import { _randomFormatIpv6 } from "typia/lib/internal/_randomFormatIpv6";
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
  idnEmail: string & tags.Format<"idn-email">;
  idnHostname: string & tags.Format<"idn-hostname">;
  iri: string & tags.Format<"iri">;
  iriReference: string & tags.Format<"iri-reference">;
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
      idnEmail: "삼촌.github@지메일.com",
      idnHostname: "깃허브.com",
      iri: "http://깃허브.com/삼촌/타이피아",
      iriReference: "http://깃허브.com/삼촌/타이피아/../네스티아",
      ipv4: "127.0.0.1",
      ipv6: "0:0:0:0:0:0:0:1",
      uri: "git://github.com/samchon/typia.git",
      uriReference: "git://github.com/samchon/typia.git/../nestia.git",
      uriTemplate: "git://github.com/{account}/{repository}.git",
      url: "https://github.com/samchon/typia",
      // TIMESTAMPS
      datetime: new Date().toISOString(),
      date: new Date().toISOString().substring(0, 10),
      time: new Date().toISOString().substring(11),
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
      input.email = "samchon.github@gmail";
      return ["$input.email"];
    },
    (input) => {
      input.hostname =
        "abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.example.com";
      return ["$input.hostname"];
    },
    (input) => {
      input.idnEmail = "삼촌.github@지메일";
      return ["$input.idnEmail"];
    },
    (input) => {
      input.idnHostname = "깃허브";
      return ["$input.idnHostname"];
    },
    (input) => {
      input.iri = "깃허브.com";
      return ["$input.iri"];
    },
    (input) => {
      input.iriReference = "/네스티아";
      return ["$input.iriReference"];
    },
    ...[_randomFormatIpv6(), "127.0.0.1234", "github.com"].map(
      (ipv4) => (input: TypeTagFormat) => {
        input.ipv4 = ipv4;
        return ["$input.ipv4"];
      },
    ),
    (input) => {
      input.ipv6 = _randomFormatIpv4();
      return ["$input.ipv6"];
    },
    ...["github.com", "http://깃허브.com", "/abc"].map(
      (uri) => (input: TypeTagFormat) => {
        input.uri = uri;
        return ["$input.uri"];
      },
    ),
    (input: TypeTagFormat) => {
      input.uriReference = "http://깃허브.com";
      return ["$input.uriReference"];
    },
    (input: TypeTagFormat) => {
      input.uriTemplate = "http://example.com/dictionary/{term:1}/{term";
      return ["$input.uriTemplate"];
    },
    ...["httpx://github.com", "telnet://something.damain", "/path", "abcd"].map(
      (url) => (input: TypeTagFormat) => {
        input.url = url;
        return ["$input.url"];
      },
    ),

    // TIMESTAMPS
    (input) => {
      input.date = new Date().toString();
      return ["$input.date"];
    },
    (input) => {
      input.datetime = "invalid datetime";
      return ["$input.datetime"];
    },
    (input) => {
      input.time = "123456";
      return ["$input.time"];
    },
    (input) => {
      input.duration = "30D";
      return ["$input.duration"];
    },

    // POINTERS,
    (input) => {
      input.jsonPointer = "/foo/bar~";
      return ["$input.jsonPointer"];
    },
    (input) => {
      input.relativeJsonPointer = "#/foo/%a";
      return ["$input.relativeJsonPointer"];
    },

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
