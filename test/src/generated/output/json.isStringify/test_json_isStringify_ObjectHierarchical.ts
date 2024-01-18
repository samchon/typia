import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_isStringify_ObjectHierarchical = _test_json_isStringify(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)((input) =>
  ((input: ObjectHierarchical): string | null => {
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
    const stringify = (input: ObjectHierarchical): string => {
      const $io1 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        "string" === typeof input.name &&
        "number" === typeof input.sequence &&
        "boolean" === typeof input.exclusive &&
        "number" === typeof input.priority &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io2(input.created_at);
      const $io2 = (input: any): boolean =>
        "number" === typeof input.time && "number" === typeof input.zone;
      const $io3 = (input: any): boolean =>
        "number" === typeof input.id &&
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
        $io2(input.created_at) &&
        "boolean" === typeof input.authorized;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.code &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io2(input.created_at);
      const $io5 = (input: any): boolean =>
        "number" === typeof input.id &&
        "object" === typeof input.account &&
        null !== input.account &&
        $io4(input.account) &&
        "string" === typeof input.name &&
        "number" === typeof input.grade &&
        "object" === typeof input.created_at &&
        null !== input.created_at &&
        $io2(input.created_at);
      // @ts-ignore;
      declare const require: (lib: string) => any;
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $so0 = (input: any): any =>
        `{"id":${$number(input.id)},"channel":${$so1(input.channel)},"member":${
          null !== input.member ? $so3(input.member) : "null"
        },"account":${
          null !== input.account ? $so4(input.account) : "null"
        },"href":${$string(input.href)},"referrer":${$string(
          input.referrer,
        )},"ip":${`[${$number(input.ip[0])},${$number(input.ip[1])},${$number(
          input.ip[2],
        )},${$number(input.ip[3])}]`},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number((input.created_at as any).zone)}}`}}`;
      const $so1 = (input: any): any =>
        `{"id":${$number(input.id)},"code":${$string(
          input.code,
        )},"name":${$string(input.name)},"sequence":${$number(
          input.sequence,
        )},"exclusive":${input.exclusive},"priority":${$number(
          input.priority,
        )},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number((input.created_at as any).zone)}}`}}`;
      const $so3 = (input: any): any =>
        `{"id":${$number(input.id)},"account":${$so4(
          input.account,
        )},"enterprise":${
          null !== input.enterprise ? $so5(input.enterprise) : "null"
        },"emails":${`[${input.emails
          .map((elem: any) => $string(elem))
          .join(",")}]`},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number((input.created_at as any).zone)}}`},"authorized":${
          input.authorized
        }}`;
      const $so4 = (input: any): any =>
        `{"id":${$number(input.id)},"code":${$string(
          input.code,
        )},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number((input.created_at as any).zone)}}`}}`;
      const $so5 = (input: any): any =>
        `{"id":${$number(input.id)},"account":${$so4(
          input.account,
        )},"name":${$string(input.name)},"grade":${$number(
          input.grade,
        )},"created_at":${`{"time":${$number(
          (input.created_at as any).time,
        )},"zone":${$number((input.created_at as any).zone)}}`}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
