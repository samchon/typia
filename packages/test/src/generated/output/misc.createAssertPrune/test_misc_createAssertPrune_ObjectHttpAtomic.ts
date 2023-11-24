import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";

export const test_misc_createAssertPrune_ObjectHttpAtomic =
  _test_misc_assertPrune("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )((input: any): ObjectHttpAtomic => {
    const assert = (input: any): ObjectHttpAtomic => {
      const __is = (input: any): input is ObjectHttpAtomic => {
        return (
          "object" === typeof input &&
          null !== input &&
          "boolean" === typeof (input as any).boolean &&
          "bigint" === typeof (input as any).bigint &&
          "number" === typeof (input as any).number &&
          Number.isFinite((input as any).number) &&
          "string" === typeof (input as any).string
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectHttpAtomic => {
          const $guard = (typia.misc.createAssertPrune as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("boolean" === typeof input.boolean ||
              $guard(_exceptionable, {
                path: _path + ".boolean",
                expected: "boolean",
                value: input.boolean,
              })) &&
            ("bigint" === typeof input.bigint ||
              $guard(_exceptionable, {
                path: _path + ".bigint",
                expected: "bigint",
                value: input.bigint,
              })) &&
            (("number" === typeof input.number &&
              Number.isFinite(input.number)) ||
              $guard(_exceptionable, {
                path: _path + ".number",
                expected: "number",
                value: input.number,
              })) &&
            ("string" === typeof input.string ||
              $guard(_exceptionable, {
                path: _path + ".string",
                expected: "string",
                value: input.string,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectHttpAtomic",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHttpAtomic",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const prune = (input: ObjectHttpAtomic): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "boolean" === key ||
            "bigint" === key ||
            "number" === key ||
            "string" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    assert(input);
    prune(input);
    return input;
  });
