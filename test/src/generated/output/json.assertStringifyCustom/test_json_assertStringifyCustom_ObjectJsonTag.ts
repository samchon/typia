import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_assertStringifyCustom_ObjectJsonTag =
  _test_json_assertStringify(CustomGuardError)("ObjectJsonTag")<ObjectJsonTag>(
    ObjectJsonTag,
  )((input) =>
    ((
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectJsonTag => {
        const $guard = (typia.json.assertStringify as any).guard(errorFactory);
        const __is = (input: any): input is ObjectJsonTag => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).vulnerable &&
            "string" === typeof (input as any).description &&
            "string" === typeof (input as any).title &&
            "string" === typeof (input as any).complicate_title
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectJsonTag => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.vulnerable ||
                $guard(_exceptionable, {
                  path: _path + ".vulnerable",
                  expected: "string",
                  value: input.vulnerable,
                })) &&
              ("string" === typeof input.description ||
                $guard(_exceptionable, {
                  path: _path + ".description",
                  expected: "string",
                  value: input.description,
                })) &&
              ("string" === typeof input.title ||
                $guard(_exceptionable, {
                  path: _path + ".title",
                  expected: "string",
                  value: input.title,
                })) &&
              ("string" === typeof input.complicate_title ||
                $guard(_exceptionable, {
                  path: _path + ".complicate_title",
                  expected: "string",
                  value: input.complicate_title,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectJsonTag",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectJsonTag",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectJsonTag): string => {
        const $string = (typia.json.assertStringify as any).string;
        return `{"vulnerable":${$string(
          (input as any).vulnerable,
        )},"description":${$string(
          (input as any).description,
        )},"title":${$string(
          (input as any).title,
        )},"complicate_title":${$string((input as any).complicate_title)}}`;
      };
      return stringify(assert(input, errorFactory));
    })(input, (p) => new CustomGuardError(p)),
  );
