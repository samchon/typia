import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_random_ObjectHierarchical = _test_random(
  "ObjectHierarchical",
)<ObjectHierarchical>(ObjectHierarchical)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectHierarchical> => {
      const $generator = require("typia/lib/functional/$generator").$generator;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        channel: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        member: (generator?.pick ?? $generator.pick)([
          () => null,
          () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
        account: (generator?.pick ?? $generator.pick)([
          () => null,
          () => $ro4(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
        href:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        referrer:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        ip: [
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
            (generator?.number ?? $generator.number)(0, 100),
        ],
        created_at: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        code:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        sequence:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        exclusive: (generator?.boolean ?? $generator.boolean)(),
        priority:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        created_at: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
        time:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        zone:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
      });
      const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        account: $ro4(_recursive, _recursive ? 1 + _depth : _depth),
        enterprise: (generator?.pick ?? $generator.pick)([
          () => null,
          () => $ro5(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
        emails: (generator?.array ?? $generator.array)(
          () =>
            (generator?.customs ?? $generator.customs)?.string?.([]) ??
            (generator?.string ?? $generator.string)(),
        ),
        created_at: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        authorized: (generator?.boolean ?? $generator.boolean)(),
      });
      const $ro4 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        code:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        created_at: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      });
      const $ro5 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        account: $ro4(_recursive, _recursive ? 1 + _depth : _depth),
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        grade:
          (generator?.customs ?? $generator.customs)?.number?.([]) ??
          (generator?.number ?? $generator.number)(0, 100),
        created_at: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
      });
      return $ro0();
    })((ObjectHierarchical as any).RANDOM),
  assert: (input: any): ObjectHierarchical => {
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
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHierarchical => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          (((("object" === typeof input.channel && null !== input.channel) ||
            $guard(_exceptionable, {
              path: _path + ".channel",
              expected: "ObjectHierarchical.IChannel",
              value: input.channel,
            })) &&
            $ao1(input.channel, _path + ".channel", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".channel",
              expected: "ObjectHierarchical.IChannel",
              value: input.channel,
            })) &&
          (null === input.member ||
            ((("object" === typeof input.member && null !== input.member) ||
              $guard(_exceptionable, {
                path: _path + ".member",
                expected: "(ObjectHierarchical.IMember | null)",
                value: input.member,
              })) &&
              $ao3(input.member, _path + ".member", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".member",
              expected: "(ObjectHierarchical.IMember | null)",
              value: input.member,
            })) &&
          (null === input.account ||
            ((("object" === typeof input.account && null !== input.account) ||
              $guard(_exceptionable, {
                path: _path + ".account",
                expected: "(ObjectHierarchical.IAccount | null)",
                value: input.account,
              })) &&
              $ao4(
                input.account,
                _path + ".account",
                true && _exceptionable,
              )) ||
            $guard(_exceptionable, {
              path: _path + ".account",
              expected: "(ObjectHierarchical.IAccount | null)",
              value: input.account,
            })) &&
          ("string" === typeof input.href ||
            $guard(_exceptionable, {
              path: _path + ".href",
              expected: "string",
              value: input.href,
            })) &&
          ("string" === typeof input.referrer ||
            $guard(_exceptionable, {
              path: _path + ".referrer",
              expected: "string",
              value: input.referrer,
            })) &&
          (((Array.isArray(input.ip) ||
            $guard(_exceptionable, {
              path: _path + ".ip",
              expected: "[number, number, number, number]",
              value: input.ip,
            })) &&
            (input.ip.length === 4 ||
              $guard(_exceptionable, {
                path: _path + ".ip",
                expected: "[number, number, number, number]",
                value: input.ip,
              })) &&
            (("number" === typeof input.ip[0] &&
              Number.isFinite(input.ip[0])) ||
              $guard(_exceptionable, {
                path: _path + ".ip[0]",
                expected: "number",
                value: input.ip[0],
              })) &&
            (("number" === typeof input.ip[1] &&
              Number.isFinite(input.ip[1])) ||
              $guard(_exceptionable, {
                path: _path + ".ip[1]",
                expected: "number",
                value: input.ip[1],
              })) &&
            (("number" === typeof input.ip[2] &&
              Number.isFinite(input.ip[2])) ||
              $guard(_exceptionable, {
                path: _path + ".ip[2]",
                expected: "number",
                value: input.ip[2],
              })) &&
            (("number" === typeof input.ip[3] &&
              Number.isFinite(input.ip[3])) ||
              $guard(_exceptionable, {
                path: _path + ".ip[3]",
                expected: "number",
                value: input.ip[3],
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".ip",
              expected: "[number, number, number, number]",
              value: input.ip,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            }));
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          ("string" === typeof input.code ||
            $guard(_exceptionable, {
              path: _path + ".code",
              expected: "string",
              value: input.code,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          (("number" === typeof input.sequence &&
            Number.isFinite(input.sequence)) ||
            $guard(_exceptionable, {
              path: _path + ".sequence",
              expected: "number",
              value: input.sequence,
            })) &&
          ("boolean" === typeof input.exclusive ||
            $guard(_exceptionable, {
              path: _path + ".exclusive",
              expected: "boolean",
              value: input.exclusive,
            })) &&
          (("number" === typeof input.priority &&
            Number.isFinite(input.priority)) ||
            $guard(_exceptionable, {
              path: _path + ".priority",
              expected: "number",
              value: input.priority,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            }));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.time && Number.isFinite(input.time)) ||
            $guard(_exceptionable, {
              path: _path + ".time",
              expected: "number",
              value: input.time,
            })) &&
          (("number" === typeof input.zone && Number.isFinite(input.zone)) ||
            $guard(_exceptionable, {
              path: _path + ".zone",
              expected: "number",
              value: input.zone,
            }));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          (((("object" === typeof input.account && null !== input.account) ||
            $guard(_exceptionable, {
              path: _path + ".account",
              expected: "ObjectHierarchical.IAccount",
              value: input.account,
            })) &&
            $ao4(input.account, _path + ".account", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".account",
              expected: "ObjectHierarchical.IAccount",
              value: input.account,
            })) &&
          (null === input.enterprise ||
            ((("object" === typeof input.enterprise &&
              null !== input.enterprise) ||
              $guard(_exceptionable, {
                path: _path + ".enterprise",
                expected: "(ObjectHierarchical.IEnterprise | null)",
                value: input.enterprise,
              })) &&
              $ao5(
                input.enterprise,
                _path + ".enterprise",
                true && _exceptionable,
              )) ||
            $guard(_exceptionable, {
              path: _path + ".enterprise",
              expected: "(ObjectHierarchical.IEnterprise | null)",
              value: input.enterprise,
            })) &&
          (((Array.isArray(input.emails) ||
            $guard(_exceptionable, {
              path: _path + ".emails",
              expected: "Array<string>",
              value: input.emails,
            })) &&
            input.emails.every(
              (elem: any, _index1: number) =>
                "string" === typeof elem ||
                $guard(_exceptionable, {
                  path: _path + ".emails[" + _index1 + "]",
                  expected: "string",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".emails",
              expected: "Array<string>",
              value: input.emails,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
          ("boolean" === typeof input.authorized ||
            $guard(_exceptionable, {
              path: _path + ".authorized",
              expected: "boolean",
              value: input.authorized,
            }));
        const $ao4 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          ("string" === typeof input.code ||
            $guard(_exceptionable, {
              path: _path + ".code",
              expected: "string",
              value: input.code,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            }));
        const $ao5 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.id && Number.isFinite(input.id)) ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "number",
              value: input.id,
            })) &&
          (((("object" === typeof input.account && null !== input.account) ||
            $guard(_exceptionable, {
              path: _path + ".account",
              expected: "ObjectHierarchical.IAccount",
              value: input.account,
            })) &&
            $ao4(input.account, _path + ".account", true && _exceptionable)) ||
            $guard(_exceptionable, {
              path: _path + ".account",
              expected: "ObjectHierarchical.IAccount",
              value: input.account,
            })) &&
          ("string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "string",
              value: input.name,
            })) &&
          (("number" === typeof input.grade && Number.isFinite(input.grade)) ||
            $guard(_exceptionable, {
              path: _path + ".grade",
              expected: "number",
              value: input.grade,
            })) &&
          (((("object" === typeof input.created_at &&
            null !== input.created_at) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            })) &&
            $ao2(
              input.created_at,
              _path + ".created_at",
              true && _exceptionable,
            )) ||
            $guard(_exceptionable, {
              path: _path + ".created_at",
              expected: "ObjectHierarchical.ITimestamp",
              value: input.created_at,
            }));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectHierarchical.ICustomer",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHierarchical.ICustomer",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
