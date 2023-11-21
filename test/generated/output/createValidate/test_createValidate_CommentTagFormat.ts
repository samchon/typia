import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_createValidate_CommentTagFormat = _test_validate(
  "CommentTagFormat",
)<CommentTagFormat>(CommentTagFormat)(
  (input: any): typia.IValidation<CommentTagFormat> => {
    const errors = [] as any[];
    const __is = (input: any): input is CommentTagFormat => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
          (input as any).uuid,
        ) &&
        "string" === typeof (input as any).email &&
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          (input as any).email,
        ) &&
        "string" === typeof (input as any).url &&
        /^[a-zA-Z0-9]+:\/\/(?:www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(
          (input as any).url,
        ) &&
        "string" === typeof (input as any).ipv4 &&
        /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          (input as any).ipv4,
        ) &&
        "string" === typeof (input as any).ipv6 &&
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/.test(
          (input as any).ipv6,
        ) &&
        "string" === typeof (input as any).date &&
        /^(\d{4})-(\d{2})-(\d{2})$/.test((input as any).date) &&
        "string" === typeof (input as any).date_time &&
        !isNaN(new Date((input as any).date_time).getTime()) &&
        "string" === typeof (input as any).custom
      );
    };
    if (false === __is(input)) {
      const $report = (typia.createValidate as any).report(errors);
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is CommentTagFormat => {
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
            "string" === typeof input.custom ||
              $report(_exceptionable, {
                path: _path + ".custom",
                expected: "string",
                value: input.custom,
              }),
          ].every((flag: boolean) => flag);
        return (
          ((("object" === typeof input && null !== input) ||
            $report(true, {
              path: _path + "",
              expected: "CommentTagFormat",
              value: input,
            })) &&
            $vo0(input, _path + "", true)) ||
          $report(true, {
            path: _path + "",
            expected: "CommentTagFormat",
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
  },
);
