import typia from "typia";

import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_validateEquals_TypeTagFormat = _test_validateEquals(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  ((input: any): typia.IValidation<TypeTagFormat> => {
    const errors = [] as any[];
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is TypeTagFormat => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "string" === typeof input.uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
          input.uuid,
        ) &&
        "string" === typeof input.email &&
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          input.email,
        ) &&
        "string" === typeof input.url &&
        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
          input.url,
        ) &&
        "string" === typeof input.ipv4 &&
        /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          input.ipv4,
        ) &&
        "string" === typeof input.ipv6 &&
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
          input.ipv6,
        ) &&
        "string" === typeof input.date &&
        /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) &&
        "string" === typeof input.date_time &&
        !isNaN(new Date(input.date_time).getTime()) &&
        (7 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              [
                "uuid",
                "email",
                "url",
                "ipv4",
                "ipv6",
                "date",
                "date_time",
              ].some((prop: any) => key === prop)
            )
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return false;
          }));
      return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input)) {
      const $report = require("typia/lib/functional/$report").$report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagFormat => {
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $join = require("typia/lib/functional/$join").$join;
        const $vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.uuid &&
              (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                input.uuid,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".uuid",
                  expected: 'string & Format<"uuid">',
                  value: input.uuid,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".uuid",
                expected: '(string & Format<"uuid">)',
                value: input.uuid,
              }),
            ("string" === typeof input.email &&
              (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
                input.email,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".email",
                  expected: 'string & Format<"email">',
                  value: input.email,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".email",
                expected: '(string & Format<"email">)',
                value: input.email,
              }),
            ("string" === typeof input.url &&
              (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
                input.url,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".url",
                  expected: 'string & Format<"url">',
                  value: input.url,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".url",
                expected: '(string & Format<"url">)',
                value: input.url,
              }),
            ("string" === typeof input.ipv4 &&
              (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                input.ipv4,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".ipv4",
                  expected: 'string & Format<"ipv4">',
                  value: input.ipv4,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".ipv4",
                expected: '(string & Format<"ipv4">)',
                value: input.ipv4,
              }),
            ("string" === typeof input.ipv6 &&
              (/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
                input.ipv6,
              ) ||
                $report(_exceptionable, {
                  path: _path + ".ipv6",
                  expected: 'string & Format<"ipv6">',
                  value: input.ipv6,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".ipv6",
                expected: '(string & Format<"ipv6">)',
                value: input.ipv6,
              }),
            ("string" === typeof input.date &&
              (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                $report(_exceptionable, {
                  path: _path + ".date",
                  expected: 'string & Format<"date">',
                  value: input.date,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".date",
                expected: '(string & Format<"date">)',
                value: input.date,
              }),
            ("string" === typeof input.date_time &&
              (!isNaN(new Date(input.date_time).getTime()) ||
                $report(_exceptionable, {
                  path: _path + ".date_time",
                  expected: 'string & Format<"date-time">',
                  value: input.date_time,
                }))) ||
              $report(_exceptionable, {
                path: _path + ".date_time",
                expected: '(string & Format<"date-time">)',
                value: input.date_time,
              }),
            7 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input)
                .map((key: any) => {
                  if (
                    [
                      "uuid",
                      "email",
                      "url",
                      "ipv4",
                      "ipv6",
                      "date",
                      "date_time",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return $report(_exceptionable, {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  });
                })
                .every((flag: boolean) => flag),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "TypeTagFormat",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "TypeTagFormat",
            value: input,
          })
        );
      })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
      success,
      errors,
      data: success ? input : undefined,
    } as any;
  })(input),
);
