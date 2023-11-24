import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectRequired } from "../../../structures/ObjectRequired";

export const test_json_createIsStringify_ObjectRequired =
  _test_json_isStringify("ObjectRequired")<ObjectRequired>(ObjectRequired)(
    (input: ObjectRequired): string | null => {
      const is = (input: any): input is ObjectRequired => {
        const $io0 = (input: any): boolean =>
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
              false === Array.isArray(input.object) &&
              $io1(input.object)));
        const $io1 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.array ||
            (Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              ))) &&
          (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              false === Array.isArray(input.object) &&
              $io1(input.object)));
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: ObjectRequired): string => {
        const $io1 = (input: any): boolean =>
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.array ||
            (Array.isArray(input.array) &&
              input.array.every((elem: any) => "number" === typeof elem))) &&
          (null === input.object ||
            undefined === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              false === Array.isArray(input.object) &&
              $io1(input.object)));
        const $number = (typia.json.createIsStringify as any).number;
        const $string = (typia.json.createIsStringify as any).string;
        const $tail = (typia.json.createIsStringify as any).tail;
        const $so0 = (input: any): any =>
          `{"boolean":${input.boolean},"number":${$number(
            input.number,
          )},"string":${$string(input.string)},"array":${`[${input.array
            .map((elem: any) => $number(elem))
            .join(",")}]`},"object":${
            null !== input.object ? $so1(input.object) : "null"
          }}`;
        const $so1 = (input: any): any =>
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
                    undefined !== input.number
                      ? $number(input.number)
                      : undefined
                  },`
            }${
              undefined === input.string
                ? ""
                : `"string":${
                    undefined !== input.string
                      ? $string(input.string)
                      : undefined
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
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    },
  );
