import typia from "typia";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ObjectDate } from "../../../structures/ObjectDate";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_createAssertCloneCustom_ObjectDate =
  _test_misc_assertClone(CustomGuardError)("ObjectDate")<ObjectDate>(
    ObjectDate,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): import("typia").Resolved<ObjectDate> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectDate => {
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
            const $guard = (typia.misc.createAssertClone as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.classDate ||
                undefined === input.classDate ||
                input.classDate instanceof Date ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".classDate",
                    expected: "(Date | null | undefined)",
                    value: input.classDate,
                  },
                  errorFactory,
                )) &&
              (null === input.date ||
                ("string" === typeof input.date &&
                  (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".date",
                        expected: 'string & Format<"date">',
                        value: input.date,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".date",
                    expected: '((string & Format<"date">) | null)',
                    value: input.date,
                  },
                  errorFactory,
                )) &&
              (null === input.datetime ||
                ("string" === typeof input.datetime &&
                  (!isNaN(new Date(input.datetime).getTime()) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".datetime",
                        expected: 'string & Format<"date-time">',
                        value: input.datetime,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".datetime",
                    expected: '((string & Format<"date-time">) | null)',
                    value: input.datetime,
                  },
                  errorFactory,
                )) &&
              (null === input.time ||
                ("string" === typeof input.time &&
                  (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                    input.time,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".time",
                        expected: 'string & Format<"time">',
                        value: input.time,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".time",
                    expected: '((string & Format<"time">) | null)',
                    value: input.time,
                  },
                  errorFactory,
                )) &&
              (null === input.duration ||
                ("string" === typeof input.duration &&
                  (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                    input.duration,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".duration",
                        expected: 'string & Format<"duration">',
                        value: input.duration,
                      },
                      errorFactory,
                    ))) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".duration",
                    expected: '((string & Format<"duration">) | null)',
                    value: input.duration,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectDate",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectDate",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ObjectDate,
      ): import("typia").Resolved<ObjectDate> => {
        const $co0 = (input: any): any => ({
          classDate:
            input.classDate instanceof Date
              ? new Date(input.classDate)
              : (input.classDate as any),
          date: input.date as any,
          datetime: input.datetime as any,
          time: input.time as any,
          duration: input.duration as any,
        });
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      };
      assert(input, errorFactory);
      const output = clone(input);
      return output;
    },
  );
