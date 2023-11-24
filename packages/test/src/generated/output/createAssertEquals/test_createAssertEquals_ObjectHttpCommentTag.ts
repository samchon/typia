import typia from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_createAssertEquals_ObjectHttpCommentTag = _test_assertEquals(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (input: any): ObjectHttpCommentTag => {
    const __is = (
      input: any,
      _exceptionable: boolean = true,
    ): input is ObjectHttpCommentTag => {
      const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
        "number" === typeof input.int &&
        Math.floor(input.int) === input.int &&
        -2147483648 <= input.int &&
        input.int <= 2147483647 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        "string" === typeof input.uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
          input.uuid,
        ) &&
        Array.isArray(input.items) &&
        10 <= input.items.length &&
        input.items.length <= 100 &&
        input.items.every(
          (elem: any, _index1: number) =>
            "number" === typeof elem && Number.isFinite(elem),
        ) &&
        (4 === Object.keys(input).length ||
          Object.keys(input).every((key: any) => {
            if (
              ["int", "uint64", "uuid", "items"].some(
                (prop: any) => key === prop,
              )
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
      ): input is ObjectHttpCommentTag => {
        const $guard = (typia.createAssertEquals as any).guard;
        const $join = (typia.createAssertEquals as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("number" === typeof input.int &&
            ((Math.floor(input.int) === input.int &&
              -2147483648 <= input.int &&
              input.int <= 2147483647) ||
              $guard(_exceptionable, {
                path: _path + ".int",
                expected: 'number & Type<"int32">',
                value: input.int,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".int",
              expected: '(number & Type<"int32">)',
              value: input.int,
            })) &&
          (("bigint" === typeof input.uint64 &&
            (BigInt(0) <= input.uint64 ||
              $guard(_exceptionable, {
                path: _path + ".uint64",
                expected: 'bigint & Type<"uint64">',
                value: input.uint64,
              }))) ||
            $guard(_exceptionable, {
              path: _path + ".uint64",
              expected: '(bigint & Type<"uint64">)',
              value: input.uint64,
            })) &&
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
          (((Array.isArray(input.items) ||
            $guard(_exceptionable, {
              path: _path + ".items",
              expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
              value: input.items,
            })) &&
            (10 <= input.items.length ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<> & MinItems<10>",
                value: input.items,
              })) &&
            (input.items.length <= 100 ||
              $guard(_exceptionable, {
                path: _path + ".items",
                expected: "Array<> & MaxItems<100>",
                value: input.items,
              })) &&
            input.items.every(
              (elem: any, _index1: number) =>
                ("number" === typeof elem && Number.isFinite(elem)) ||
                $guard(_exceptionable, {
                  path: _path + ".items[" + _index1 + "]",
                  expected: "number",
                  value: elem,
                }),
            )) ||
            $guard(_exceptionable, {
              path: _path + ".items",
              expected: "(Array<number> & MinItems<10> & MaxItems<100>)",
              value: input.items,
            })) &&
          (4 === Object.keys(input).length ||
            false === _exceptionable ||
            Object.keys(input).every((key: any) => {
              if (
                ["int", "uint64", "uuid", "items"].some(
                  (prop: any) => key === prop,
                )
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
              expected: "ObjectHttpCommentTag",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectHttpCommentTag",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
);
