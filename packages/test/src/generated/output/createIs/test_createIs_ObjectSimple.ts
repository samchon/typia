import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createIs_ObjectSimple = _test_is(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)((input: any): input is ObjectSimple => {
  return (
    "object" === typeof input &&
    null !== input &&
    "object" === typeof (input as any).scale &&
    null !== (input as any).scale &&
    "number" === typeof ((input as any).scale as any).x &&
    Number.isFinite(((input as any).scale as any).x) &&
    "number" === typeof ((input as any).scale as any).y &&
    Number.isFinite(((input as any).scale as any).y) &&
    "number" === typeof ((input as any).scale as any).z &&
    Number.isFinite(((input as any).scale as any).z) &&
    "object" === typeof (input as any).position &&
    null !== (input as any).position &&
    "number" === typeof ((input as any).position as any).x &&
    Number.isFinite(((input as any).position as any).x) &&
    "number" === typeof ((input as any).position as any).y &&
    Number.isFinite(((input as any).position as any).y) &&
    "number" === typeof ((input as any).position as any).z &&
    Number.isFinite(((input as any).position as any).z) &&
    "object" === typeof (input as any).rotate &&
    null !== (input as any).rotate &&
    "number" === typeof ((input as any).rotate as any).x &&
    Number.isFinite(((input as any).rotate as any).x) &&
    "number" === typeof ((input as any).rotate as any).y &&
    Number.isFinite(((input as any).rotate as any).y) &&
    "number" === typeof ((input as any).rotate as any).z &&
    Number.isFinite(((input as any).rotate as any).z) &&
    "object" === typeof (input as any).pivot &&
    null !== (input as any).pivot &&
    "number" === typeof ((input as any).pivot as any).x &&
    Number.isFinite(((input as any).pivot as any).x) &&
    "number" === typeof ((input as any).pivot as any).y &&
    Number.isFinite(((input as any).pivot as any).y) &&
    "number" === typeof ((input as any).pivot as any).z &&
    Number.isFinite(((input as any).pivot as any).z)
  );
});
