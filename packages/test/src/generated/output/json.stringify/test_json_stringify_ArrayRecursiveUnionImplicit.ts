import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_json_stringify_ArrayRecursiveUnionImplicit =
  _test_json_stringify(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
    ((input: ArrayRecursiveUnionImplicit): string => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        Array.isArray(input.children) &&
        input.children.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        );
      const $io1 = (input: any): boolean =>
        ("read" === input.access || "write" === input.access) &&
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        Array.isArray(input.children) &&
        input.children.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        );
      const $io2 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.width &&
        "number" === typeof input.height &&
        "string" === typeof input.url &&
        "number" === typeof input.size;
      const $io3 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        "string" === typeof input.content;
      const $io4 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "number" === typeof input.size &&
        "number" === typeof input.count;
      const $io5 = (input: any): boolean =>
        "number" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.path &&
        "object" === typeof input.target &&
        null !== input.target &&
        $iu0(input.target);
      const $iu0 = (input: any): any =>
        (() => {
          if (undefined !== input.access) return $io1(input);
          else if (undefined !== input.width) return $io2(input);
          else if (undefined !== input.content) return $io3(input);
          else if (undefined !== input.count) return $io4(input);
          else if (undefined !== input.target) return $io5(input);
          else return $io0(input);
        })();
      const $number = (typia.json.stringify as any).number;
      const $string = (typia.json.stringify as any).string;
      const $throws = (typia.json.stringify as any).throws;
      const $so0 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"children":${`[${input.children
          .map((elem: any) => $su0(elem))
          .join(",")}]`}}`;
      const $so1 = (input: any): any =>
        `{"access":${(() => {
          if ("string" === typeof input.access) return $string(input.access);
          if ("string" === typeof input.access) return '"' + input.access + '"';
          $throws({
            expected: '("read" | "write")',
            value: input.access,
          });
        })()},"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"children":${`[${input.children
          .map((elem: any) => $su0(elem))
          .join(",")}]`}}`;
      const $so2 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"width":${$number(
          input.width,
        )},"height":${$number(input.height)},"url":${$string(
          input.url,
        )},"size":${$number(input.size)}}`;
      const $so3 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"size":${$number(
          input.size,
        )},"content":${$string(input.content)}}`;
      const $so4 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"size":${$number(
          input.size,
        )},"count":${$number(input.count)}}`;
      const $so5 = (input: any): any =>
        `{"id":${$number(input.id)},"name":${$string(
          input.name,
        )},"path":${$string(input.path)},"target":${$su0(input.target)}}`;
      const $su0 = (input: any): any =>
        (() => {
          if (undefined !== input.access) return $so1(input);
          else if (undefined !== input.width) return $so2(input);
          else if (undefined !== input.content) return $so3(input);
          else if (undefined !== input.count) return $so4(input);
          else if (undefined !== input.target) return $so5(input);
          else return $so0(input);
        })();
      return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    })(input),
  );
