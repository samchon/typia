import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_isParse_ObjectHierarchical = _test_json_isParse(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  ((input: any): typia.Primitive<ObjectHierarchical> => {
    const is = (input: any): input is ObjectHierarchical => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "object" === typeof input.channel &&
        null !== input.channel &&
        $io1(input.channel) &&
        (null === input.member ||
          ("object" === typeof input.member &&
            null !== input.member &&
            $io3(input.member))) &&
        (null === input.account ||
          ("object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account))) &&
        "string" === typeof input.href &&
        "string" === typeof input.referrer &&
        Array.isArray(input.ip) &&
        input.ip.length === 4 &&
        "number" === typeof input.ip[0] &&
        Number.isFinite(input.ip[0]) &&
        "number" === typeof input.ip[1] &&
        Number.isFinite(input.ip[1]) &&
        "number" === typeof input.ip[2] &&
        Number.isFinite(input.ip[2]) &&
        "number" === typeof input.ip[3] &&
        Number.isFinite(input.ip[3]) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      const $io1 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        Number.isFinite(input.sequence) &&
        "boolean" === typeof input.exclusive &&
        "number" === typeof input.priority &&
        Number.isFinite(input.priority) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      const $io3 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "object" === typeof input.account &&
        null !== input.account &&
        $io4(input.account) &&
        (null === input.enterprise ||
          ("object" === typeof input.enterprise &&
            null !== input.enterprise &&
            $io5(input.enterprise))) &&
        Array.isArray(input.emails) &&
        input.emails.every((elem: any) => "string" === typeof elem) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone) &&
        "boolean" === typeof input.authorized;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "string" === typeof input.code &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      const $io5 = (input: any): boolean =>
        "number" === typeof input.id &&
        Number.isFinite(input.id) &&
        "object" === typeof input.account &&
        null !== input.account &&
        $io4(input.account) &&
        "string" === typeof input.name &&
        "number" === typeof input.grade &&
        Number.isFinite(input.grade) &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        "number" === typeof (input.created_at as any).time &&
        Number.isFinite((input.created_at as any).time) &&
        "number" === typeof (input.created_at as any).zone &&
        Number.isFinite((input.created_at as any).zone);
      return "object" === typeof input && null !== input && $io0(input);
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  })(input),
);
