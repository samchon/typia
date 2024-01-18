import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_createStringify_ObjectPartialAndRequired =
  _test_json_stringify("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input: ObjectPartialAndRequired): string => {
    const $io0 = (input: any): boolean =>
      (undefined === input.string || "string" === typeof input.string) &&
      (undefined === input.number || "number" === typeof input.number) &&
      (undefined === input.boolean || "boolean" === typeof input.boolean) &&
      (null === input.object ||
        ("object" === typeof input.object &&
          null !== input.object &&
          $io0(input.object))) &&
      Array.isArray(input.array) &&
      input.array.every((elem: any) => "number" === typeof elem);
    const $string = require("typia/lib/functional/$string").$string;
    const $number = require("typia/lib/functional/$number").$number;
    const $so0 = (input: any): any =>
      `{${
        undefined === input.string
          ? ""
          : `"string":${
              undefined !== input.string ? $string(input.string) : undefined
            },`
      }${
        undefined === input.number
          ? ""
          : `"number":${
              undefined !== input.number ? $number(input.number) : undefined
            },`
      }${
        undefined === input.boolean
          ? ""
          : `"boolean":${
              undefined !== input.boolean ? input.boolean : undefined
            },`
      }"object":${
        null !== input.object ? $so0(input.object) : "null"
      },"array":${`[${input.array
        .map((elem: any) => $number(elem))
        .join(",")}]`}}`;
    return $so0(input);
  });
