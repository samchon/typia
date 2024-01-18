import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_json_isStringify_ObjectPartial = _test_json_isStringify(
  "ObjectPartial",
)<ObjectPartial>(ObjectPartial)((input) =>
  ((input: ObjectPartial): string | null => {
    const is = (input: any): input is ObjectPartial => {
      const $io0 = (input: any): boolean =>
        (undefined === input.boolean || "boolean" === typeof input.boolean) &&
        (undefined === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number))) &&
        (undefined === input.string || "string" === typeof input.string) &&
        (undefined === input.array ||
          (Array.isArray(input.array) &&
            input.array.every(
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            ))) &&
        (null === input.object ||
          undefined === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      const $io1 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        Number.isFinite(input.number) &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    const stringify = (input: ObjectPartial): string => {
      const $io1 = (input: any): boolean =>
        "boolean" === typeof input.boolean &&
        "number" === typeof input.number &&
        "string" === typeof input.string &&
        Array.isArray(input.array) &&
        input.array.every((elem: any) => "number" === typeof elem) &&
        (null === input.object ||
          ("object" === typeof input.object &&
            null !== input.object &&
            $io1(input.object)));
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $tail = require("typia/lib/functional/$tail").$tail;
      const $so0 = (input: any): any =>
        `{${$tail(
          `${
            undefined === input.boolean
              ? ""
              : `"boolean":${
                  undefined !== input.boolean ? input.boolean : undefined
                },`
          }${
            undefined === input.number
              ? ""
              : `"number":${
                  undefined !== input.number ? $number(input.number) : undefined
                },`
          }${
            undefined === input.string
              ? ""
              : `"string":${
                  undefined !== input.string ? $string(input.string) : undefined
                },`
          }${
            undefined === input.array
              ? ""
              : `"array":${
                  undefined !== input.array
                    ? `[${input.array
                        .map((elem: any) => $number(elem))
                        .join(",")}]`
                    : undefined
                },`
          }${
            undefined === input.object
              ? ""
              : `"object":${
                  undefined !== input.object
                    ? null !== input.object
                      ? $so1(input.object)
                      : "null"
                    : undefined
                }`
          }`,
        )}}`;
      const $so1 = (input: any): any =>
        `{"boolean":${input.boolean},"number":${$number(
          input.number,
        )},"string":${$string(input.string)},"array":${`[${input.array
          .map((elem: any) => $number(elem))
          .join(",")}]`},"object":${
          null !== input.object ? $so1(input.object) : "null"
        }}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
