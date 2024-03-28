import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../../internal/_test_functional_validateReturnAsync";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_functional_validateReturnAsync_CommentTagPattern =
  _test_functional_validateReturnAsync("CommentTagPattern")(CommentTagPattern)(
    (p: (input: CommentTagPattern) => Promise<CommentTagPattern>) =>
      async (
        input: CommentTagPattern,
      ): Promise<import("typia").IValidation<CommentTagPattern>> => {
        const result = ((input: any): typia.IValidation<CommentTagPattern> => {
          const errors = [] as any[];
          const __is = (input: any): input is CommentTagPattern => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).uuid &&
              RegExp(
                /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
              ).test((input as any).uuid) &&
              "string" === typeof (input as any).email &&
              RegExp(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
              ).test((input as any).email) &&
              "string" === typeof (input as any).ipv4 &&
              RegExp(
                /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
              ).test((input as any).ipv4) &&
              "string" === typeof (input as any).ipv6 &&
              RegExp(
                /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
              ).test((input as any).ipv6)
            );
          };
          if (false === __is(input)) {
            const $report = (typia.functional.validateReturn as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is CommentTagPattern => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("string" === typeof input.uuid &&
                    (RegExp(
                      /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
                    ).test(input.uuid) ||
                      $report(_exceptionable, {
                        path: _path + ".uuid",
                        expected:
                          'string & Pattern<"[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$">',
                        value: input.uuid,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".uuid",
                      expected:
                        '(string & Pattern<"[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$">)',
                      value: input.uuid,
                    }),
                  ("string" === typeof input.email &&
                    (RegExp(
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
                    ).test(input.email) ||
                      $report(_exceptionable, {
                        path: _path + ".email",
                        expected:
                          'string & Pattern<"^(([^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+(\\\\.[^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+)*)|(\\\\\\".+\\\\\\"))@(([^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+\\\\.)+[^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]{2,})$">',
                        value: input.email,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected:
                        '(string & Pattern<"^(([^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+(\\\\.[^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+)*)|(\\\\\\".+\\\\\\"))@(([^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]+\\\\.)+[^<>()[\\\\]\\\\.,;:\\\\s@\\\\\\"]{2,})$">)',
                      value: input.email,
                    }),
                  ("string" === typeof input.ipv4 &&
                    (RegExp(
                      /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                    ).test(input.ipv4) ||
                      $report(_exceptionable, {
                        path: _path + ".ipv4",
                        expected:
                          'string & Pattern<"(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$">',
                        value: input.ipv4,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".ipv4",
                      expected:
                        '(string & Pattern<"(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$">)',
                      value: input.ipv4,
                    }),
                  ("string" === typeof input.ipv6 &&
                    (RegExp(
                      /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
                    ).test(input.ipv6) ||
                      $report(_exceptionable, {
                        path: _path + ".ipv6",
                        expected:
                          'string & Pattern<"(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$">',
                        value: input.ipv6,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".ipv6",
                      expected:
                        '(string & Pattern<"(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$">)',
                      value: input.ipv6,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "CommentTagPattern",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "CommentTagPattern",
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
        })(await p(input));
        if (!result.success)
          result.errors = result.errors.map((error: any) => ({
            ...error,
            path: error.path.replace("$input", "$input.return"),
          }));
        return result;
      },
  );
