import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_misc_clone_CommentTagFormat = _test_misc_clone(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)((input) =>
  ((input: CommentTagFormat): typia.Resolved<CommentTagFormat> => {
    const $co0 = (input: any): any => ({
      byte: input.byte as any,
      password: input.password as any,
      regex: input.regex as any,
      uuid: input.uuid as any,
      email: input.email as any,
      hostname: input.hostname as any,
      idnEmail: input.idnEmail as any,
      idnHostname: input.idnHostname as any,
      iri: input.iri as any,
      iriReference: input.iriReference as any,
      ipv4: input.ipv4 as any,
      ipv6: input.ipv6 as any,
      uri: input.uri as any,
      uriReference: input.uriReference as any,
      uriTemplate: input.uriTemplate as any,
      url: input.url as any,
      datetime: input.datetime as any,
      date: input.date as any,
      time: input.time as any,
      duration: input.duration as any,
      jsonPointer: input.jsonPointer as any,
      relativeJsonPointer: input.relativeJsonPointer as any,
    });
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
