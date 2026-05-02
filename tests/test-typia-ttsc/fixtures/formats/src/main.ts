import typia, { tags } from "typia";

// One validator per format in typia's FormatCheatSheet. Ensures every
// pattern we shipped actually parses as a RegExp and validates correctly.
export const email = (x: unknown) => typia.is<string & tags.Format<"email">>(x);
export const idnEmail = (x: unknown) =>
  typia.is<string & tags.Format<"idn-email">>(x);
export const hostname = (x: unknown) =>
  typia.is<string & tags.Format<"hostname">>(x);
export const idnHostname = (x: unknown) =>
  typia.is<string & tags.Format<"idn-hostname">>(x);
export const ipv4 = (x: unknown) => typia.is<string & tags.Format<"ipv4">>(x);
export const ipv6 = (x: unknown) => typia.is<string & tags.Format<"ipv6">>(x);
export const uri = (x: unknown) => typia.is<string & tags.Format<"uri">>(x);
export const uriRef = (x: unknown) =>
  typia.is<string & tags.Format<"uri-reference">>(x);
export const uriTpl = (x: unknown) =>
  typia.is<string & tags.Format<"uri-template">>(x);
export const iri = (x: unknown) => typia.is<string & tags.Format<"iri">>(x);
export const iriRef = (x: unknown) =>
  typia.is<string & tags.Format<"iri-reference">>(x);
export const url = (x: unknown) => typia.is<string & tags.Format<"url">>(x);
export const uuid = (x: unknown) => typia.is<string & tags.Format<"uuid">>(x);
export const byte = (x: unknown) => typia.is<string & tags.Format<"byte">>(x);
export const dateOnly = (x: unknown) =>
  typia.is<string & tags.Format<"date">>(x);
export const dateTime = (x: unknown) =>
  typia.is<string & tags.Format<"date-time">>(x);
export const time = (x: unknown) => typia.is<string & tags.Format<"time">>(x);
export const duration = (x: unknown) =>
  typia.is<string & tags.Format<"duration">>(x);
export const jsonPointer = (x: unknown) =>
  typia.is<string & tags.Format<"json-pointer">>(x);
export const relJsonPointer = (x: unknown) =>
  typia.is<string & tags.Format<"relative-json-pointer">>(x);
export const password = (x: unknown) =>
  typia.is<string & tags.Format<"password">>(x);
export const regexFmt = (x: unknown) =>
  typia.is<string & tags.Format<"regex">>(x);
