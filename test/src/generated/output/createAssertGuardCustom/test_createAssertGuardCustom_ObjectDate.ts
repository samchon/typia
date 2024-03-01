import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_createAssertGuardCustom_ObjectDate = _test_assertGuard(
  CustomGuardError,
)("ObjectDate")<ObjectDate>(ObjectDate)(
  (
    input: any,
    errorFactory: import("typia").TypeGuardError.IProps = (p) =>
      new CustomGuardError(p),
  ): asserts input is ObjectDate => {
    const $guard = (typia.createAssertGuard as any).guard(errorFactory);
    const __is = (input: any): input is ObjectDate => {
      const $io0 = (input: any): boolean =>
        (null === input.classDate ||
          undefined === input.classDate ||
          input.classDate instanceof Date) &&
        (null === input.date ||
          ("string" === typeof input.date &&
            /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date))) &&
        (null === input.datetime ||
          ("string" === typeof input.datetime &&
            !isNaN(new Date(input.datetime).getTime()))) &&
        (null === input.time ||
          ("string" === typeof input.time &&
            /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
              input.time,
            ))) &&
        (null === input.duration ||
          ("string" === typeof input.duration &&
            /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
              input.duration,
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectDate => {
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.classDate ||
            undefined === input.classDate ||
            input.classDate instanceof Date ||
            $guard(_exceptionable, {
              path: _path + ".classDate",
              expected: "(Date | null | undefined)",
              value: input.classDate,
            })) &&
          (null === input.date ||
            ("string" === typeof input.date &&
              (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                $guard(_exceptionable, {
                  path: _path + ".date",
                  expected: 'string & Format<"date">',
                  value: input.date,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".date",
              expected: '((string & Format<"date">) | null)',
              value: input.date,
            })) &&
          (null === input.datetime ||
            ("string" === typeof input.datetime &&
              (!isNaN(new Date(input.datetime).getTime()) ||
                $guard(_exceptionable, {
                  path: _path + ".datetime",
                  expected: 'string & Format<"date-time">',
                  value: input.datetime,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".datetime",
              expected: '((string & Format<"date-time">) | null)',
              value: input.datetime,
            })) &&
          (null === input.time ||
            ("string" === typeof input.time &&
              (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                input.time,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".time",
                  expected: 'string & Format<"time">',
                  value: input.time,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".time",
              expected: '((string & Format<"time">) | null)',
              value: input.time,
            })) &&
          (null === input.duration ||
            ("string" === typeof input.duration &&
              (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                input.duration,
              ) ||
                $guard(_exceptionable, {
                  path: _path + ".duration",
                  expected: 'string & Format<"duration">',
                  value: input.duration,
                }))) ||
            $guard(_exceptionable, {
              path: _path + ".duration",
              expected: '((string & Format<"duration">) | null)',
              value: input.duration,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectDate",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectDate",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
