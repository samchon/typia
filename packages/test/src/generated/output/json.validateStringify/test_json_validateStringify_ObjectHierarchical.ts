import typia from "typia";

import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_validateStringify_ObjectHierarchical =
  _test_json_validateStringify("ObjectHierarchical")<ObjectHierarchical>(
    ObjectHierarchical,
  )((input) =>
    ((input: ObjectHierarchical): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ObjectHierarchical> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectHierarchical => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.channel &&
            null !== input.channel &&
            $io1(input.channel) &&
            (null === input.member ||
              ("object" === typeof input.member &&
                null !== input.member &&
                $io3(input.member))) &&
            (null === input.account ||
              ("object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account))) &&
            "string" === typeof input.href &&
            "string" === typeof input.referrer &&
            Array.isArray(input.ip) &&
            input.ip.length === 4 &&
            "number" === typeof input.ip[0] &&
            Number.isFinite(input.ip[0]) &&
            "number" === typeof input.ip[1] &&
            Number.isFinite(input.ip[1]) &&
            "number" === typeof input.ip[2] &&
            Number.isFinite(input.ip[2]) &&
            "number" === typeof input.ip[3] &&
            Number.isFinite(input.ip[3]) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          const $io1 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "string" === typeof input.name &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "boolean" === typeof input.exclusive &&
            "number" === typeof input.priority &&
            Number.isFinite(input.priority) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account) &&
            (null === input.enterprise ||
              ("object" === typeof input.enterprise &&
                null !== input.enterprise &&
                $io5(input.enterprise))) &&
            Array.isArray(input.emails) &&
            input.emails.every((elem: any) => "string" === typeof elem) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone) &&
            "boolean" === typeof input.authorized;
          const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          const $io5 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "object" === typeof input.account &&
            null !== input.account &&
            $io4(input.account) &&
            "string" === typeof input.name &&
            "number" === typeof input.grade &&
            Number.isFinite(input.grade) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.json.validateStringify as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectHierarchical => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                ((("object" === typeof input.channel &&
                  null !== input.channel) ||
                  $report(_exceptionable, {
                    path: _path + ".channel",
                    expected: "ObjectHierarchical.IChannel",
                    value: input.channel,
                  })) &&
                  $vo1(
                    input.channel,
                    _path + ".channel",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".channel",
                    expected: "ObjectHierarchical.IChannel",
                    value: input.channel,
                  }),
                null === input.member ||
                  ((("object" === typeof input.member &&
                    null !== input.member) ||
                    $report(_exceptionable, {
                      path: _path + ".member",
                      expected: "(ObjectHierarchical.IMember | null)",
                      value: input.member,
                    })) &&
                    $vo3(
                      input.member,
                      _path + ".member",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".member",
                    expected: "(ObjectHierarchical.IMember | null)",
                    value: input.member,
                  }),
                null === input.account ||
                  ((("object" === typeof input.account &&
                    null !== input.account) ||
                    $report(_exceptionable, {
                      path: _path + ".account",
                      expected: "(ObjectHierarchical.IAccount | null)",
                      value: input.account,
                    })) &&
                    $vo4(
                      input.account,
                      _path + ".account",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".account",
                    expected: "(ObjectHierarchical.IAccount | null)",
                    value: input.account,
                  }),
                "string" === typeof input.href ||
                  $report(_exceptionable, {
                    path: _path + ".href",
                    expected: "string",
                    value: input.href,
                  }),
                "string" === typeof input.referrer ||
                  $report(_exceptionable, {
                    path: _path + ".referrer",
                    expected: "string",
                    value: input.referrer,
                  }),
                ((Array.isArray(input.ip) ||
                  $report(_exceptionable, {
                    path: _path + ".ip",
                    expected: "[number, number, number, number]",
                    value: input.ip,
                  })) &&
                  (input.ip.length === 4 ||
                    $report(_exceptionable, {
                      path: _path + ".ip",
                      expected: "[number, number, number, number]",
                      value: input.ip,
                    })) &&
                  [
                    ("number" === typeof input.ip[0] &&
                      Number.isFinite(input.ip[0])) ||
                      $report(_exceptionable, {
                        path: _path + ".ip[0]",
                        expected: "number",
                        value: input.ip[0],
                      }),
                    ("number" === typeof input.ip[1] &&
                      Number.isFinite(input.ip[1])) ||
                      $report(_exceptionable, {
                        path: _path + ".ip[1]",
                        expected: "number",
                        value: input.ip[1],
                      }),
                    ("number" === typeof input.ip[2] &&
                      Number.isFinite(input.ip[2])) ||
                      $report(_exceptionable, {
                        path: _path + ".ip[2]",
                        expected: "number",
                        value: input.ip[2],
                      }),
                    ("number" === typeof input.ip[3] &&
                      Number.isFinite(input.ip[3])) ||
                      $report(_exceptionable, {
                        path: _path + ".ip[3]",
                        expected: "number",
                        value: input.ip[3],
                      }),
                  ].every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".ip",
                    expected: "[number, number, number, number]",
                    value: input.ip,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo2(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            const $vo1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                "string" === typeof input.code ||
                  $report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)) ||
                  $report(_exceptionable, {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence,
                  }),
                "boolean" === typeof input.exclusive ||
                  $report(_exceptionable, {
                    path: _path + ".exclusive",
                    expected: "boolean",
                    value: input.exclusive,
                  }),
                ("number" === typeof input.priority &&
                  Number.isFinite(input.priority)) ||
                  $report(_exceptionable, {
                    path: _path + ".priority",
                    expected: "number",
                    value: input.priority,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo2(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            const $vo2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.time &&
                  Number.isFinite(input.time)) ||
                  $report(_exceptionable, {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  }),
                ("number" === typeof input.zone &&
                  Number.isFinite(input.zone)) ||
                  $report(_exceptionable, {
                    path: _path + ".zone",
                    expected: "number",
                    value: input.zone,
                  }),
              ].every((flag: boolean) => flag);
            const $vo3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                ((("object" === typeof input.account &&
                  null !== input.account) ||
                  $report(_exceptionable, {
                    path: _path + ".account",
                    expected: "ObjectHierarchical.IAccount",
                    value: input.account,
                  })) &&
                  $vo4(
                    input.account,
                    _path + ".account",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".account",
                    expected: "ObjectHierarchical.IAccount",
                    value: input.account,
                  }),
                null === input.enterprise ||
                  ((("object" === typeof input.enterprise &&
                    null !== input.enterprise) ||
                    $report(_exceptionable, {
                      path: _path + ".enterprise",
                      expected: "(ObjectHierarchical.IEnterprise | null)",
                      value: input.enterprise,
                    })) &&
                    $vo5(
                      input.enterprise,
                      _path + ".enterprise",
                      true && _exceptionable,
                    )) ||
                  $report(_exceptionable, {
                    path: _path + ".enterprise",
                    expected: "(ObjectHierarchical.IEnterprise | null)",
                    value: input.enterprise,
                  }),
                ((Array.isArray(input.emails) ||
                  $report(_exceptionable, {
                    path: _path + ".emails",
                    expected: "Array<string>",
                    value: input.emails,
                  })) &&
                  input.emails
                    .map(
                      (elem: any, _index1: number) =>
                        "string" === typeof elem ||
                        $report(_exceptionable, {
                          path: _path + ".emails[" + _index1 + "]",
                          expected: "string",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                  $report(_exceptionable, {
                    path: _path + ".emails",
                    expected: "Array<string>",
                    value: input.emails,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo2(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  }),
                "boolean" === typeof input.authorized ||
                  $report(_exceptionable, {
                    path: _path + ".authorized",
                    expected: "boolean",
                    value: input.authorized,
                  }),
              ].every((flag: boolean) => flag);
            const $vo4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                "string" === typeof input.code ||
                  $report(_exceptionable, {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo2(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            const $vo5 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                ("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $report(_exceptionable, {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  }),
                ((("object" === typeof input.account &&
                  null !== input.account) ||
                  $report(_exceptionable, {
                    path: _path + ".account",
                    expected: "ObjectHierarchical.IAccount",
                    value: input.account,
                  })) &&
                  $vo4(
                    input.account,
                    _path + ".account",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".account",
                    expected: "ObjectHierarchical.IAccount",
                    value: input.account,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                ("number" === typeof input.grade &&
                  Number.isFinite(input.grade)) ||
                  $report(_exceptionable, {
                    path: _path + ".grade",
                    expected: "number",
                    value: input.grade,
                  }),
                ((("object" === typeof input.created_at &&
                  null !== input.created_at) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  })) &&
                  $vo2(
                    input.created_at,
                    _path + ".created_at",
                    true && _exceptionable,
                  )) ||
                  $report(_exceptionable, {
                    path: _path + ".created_at",
                    expected: "ObjectHierarchical.ITimestamp",
                    value: input.created_at,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectHierarchical.ICustomer",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectHierarchical.ICustomer",
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
      };
      const stringify = (input: ObjectHierarchical): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "string" === typeof input.name &&
          "number" === typeof input.sequence &&
          "boolean" === typeof input.exclusive &&
          "number" === typeof input.priority &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at);
        const $io2 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $io3 = (input: any): boolean =>
          "number" === typeof input.id &&
          "object" === typeof input.account &&
          null !== input.account &&
          $io4(input.account) &&
          (null === input.enterprise ||
            ("object" === typeof input.enterprise &&
              null !== input.enterprise &&
              $io5(input.enterprise))) &&
          Array.isArray(input.emails) &&
          input.emails.every((elem: any) => "string" === typeof elem) &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at) &&
          "boolean" === typeof input.authorized;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at);
        const $io5 = (input: any): boolean =>
          "number" === typeof input.id &&
          "object" === typeof input.account &&
          null !== input.account &&
          $io4(input.account) &&
          "string" === typeof input.name &&
          "number" === typeof input.grade &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at);
        const $number = (typia.json.validateStringify as any).number;
        const $string = (typia.json.validateStringify as any).string;
        const $so0 = (input: any): any =>
          `{"id":${$number(input.id)},"channel":${$so1(
            input.channel,
          )},"member":${
            null !== input.member ? $so3(input.member) : "null"
          },"account":${
            null !== input.account ? $so4(input.account) : "null"
          },"href":${$string(input.href)},"referrer":${$string(
            input.referrer,
          )},"ip":${`[${$number(input.ip[0])},${$number(input.ip[1])},${$number(
            input.ip[2],
          )},${$number(input.ip[3])}]`},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        const $so1 = (input: any): any =>
          `{"id":${$number(input.id)},"code":${$string(
            input.code,
          )},"name":${$string(input.name)},"sequence":${$number(
            input.sequence,
          )},"exclusive":${input.exclusive},"priority":${$number(
            input.priority,
          )},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        const $so3 = (input: any): any =>
          `{"id":${$number(input.id)},"account":${$so4(
            input.account,
          )},"enterprise":${
            null !== input.enterprise ? $so5(input.enterprise) : "null"
          },"emails":${`[${input.emails
            .map((elem: any) => $string(elem))
            .join(",")}]`},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number(
            (input.created_at as any).zone,
          )}}`},"authorized":${input.authorized}}`;
        const $so4 = (input: any): any =>
          `{"id":${$number(input.id)},"code":${$string(
            input.code,
          )},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        const $so5 = (input: any): any =>
          `{"id":${$number(input.id)},"account":${$so4(
            input.account,
          )},"name":${$string(input.name)},"grade":${$number(
            input.grade,
          )},"created_at":${`{"time":${$number(
            (input.created_at as any).time,
          )},"zone":${$number((input.created_at as any).zone)}}`}}`;
        return $so0(input);
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    })(input),
  );
