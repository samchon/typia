import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_assertEquals_TypeTagFormat = _test_assertEquals(
  "TypeTagFormat",
)<TypeTagFormat>(TypeTagFormat)((input) =>
  ((input: any): TypeTagFormat => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagFormat => {
        const $guard = (typia.assertEquals as any).guard;
        const $join = (typia.assertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("string" === typeof input.uuid &&
            (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
              input.uuid,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".uuid",
                expected: 'string & Format<"uuid">',
                value: input.uuid,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uuid",
              expected: '(string & Format<"uuid">)',
              value: input.uuid,
            })) &&
          (("string" === typeof input.email &&
            (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
              input.email,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".email",
                expected: 'string & Format<"email">',
                value: input.email,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".email",
              expected: '(string & Format<"email">)',
              value: input.email,
            })) &&
          (("string" === typeof input.url &&
            (/^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
              input.url,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".url",
                expected: 'string & Format<"url">',
                value: input.url,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".url",
              expected: '(string & Format<"url">)',
              value: input.url,
            })) &&
          (("string" === typeof input.ipv4 &&
            (/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
              input.ipv4,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".ipv4",
                expected: 'string & Format<"ipv4">',
                value: input.ipv4,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ipv4",
              expected: '(string & Format<"ipv4">)',
              value: input.ipv4,
            })) &&
          (("string" === typeof input.ipv6 &&
            (/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
              input.ipv6,
            ) ||
              $guard(_exceptionable, {
                path: _path + ".ipv6",
                expected: 'string & Format<"ipv6">',
                value: input.ipv6,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ipv6",
              expected: '(string & Format<"ipv6">)',
              value: input.ipv6,
            })) &&
          (("string" === typeof input.date &&
            (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
              $guard(_exceptionable, {
                path: _path + ".date",
                expected: 'string & Format<"date">',
                value: input.date,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".date",
              expected: '(string & Format<"date">)',
              value: input.date,
            })) &&
          (("string" === typeof input.date_time &&
            (!isNaN(new Date(input.date_time).getTime()) ||
              $guard(_exceptionable, {
                path: _path + ".date_time",
                expected: 'string & Format<"date-time">',
                value: input.date_time,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".date_time",
              expected: '(string & Format<"date-time">)',
              value: input.date_time,
            })) &&
          (7 === Object.keys(input).length ||
            false === _exceptionable ||
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
              return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value,
              });
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagFormat",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagFormat",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  })(input),
);
