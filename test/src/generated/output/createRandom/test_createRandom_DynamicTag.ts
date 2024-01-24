import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { DynamicTag } from "../../../structures/DynamicTag";

export const test_createRandom_DynamicTag = _test_random(
  "DynamicTag",
)<DynamicTag>(DynamicTag)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (DynamicTag as any).RANDOM,
  ): typia.Resolved<DynamicTag> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => {
      const output = {} as any;
      (generator?.array ?? $generator.array)(
        () =>
          (output[
            (generator?.customs ?? $generator.customs)?.number?.([
              {
                name: "Minimum<0>",
                kind: "minimum",
                value: 0,
              },
              {
                name: "ExclusiveMaximum<10>",
                kind: "exclusiveMaximum",
                value: 10,
              },
            ]) ?? (generator?.number ?? $generator.number)(0, 10)
          ] =
            (generator?.customs ?? $generator.customs)?.bigint?.([
              {
                name: 'Type<"uint64">',
                kind: "type",
                value: "uint64",
              },
            ]) ??
            (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10))),
        (generator?.integer ?? $generator.integer)(0, 3),
      );
      (generator?.array ?? $generator.array)(
        () =>
          (output[
            (generator?.customs ?? $generator.customs)?.string?.([
              {
                name: 'Format<"uuid">',
                kind: "format",
                value: "uuid",
              },
            ]) ?? (generator?.uuid ?? $generator.uuid)()
          ] =
            (generator?.customs ?? $generator.customs)?.string?.([
              {
                name: 'Format<"email">',
                kind: "format",
                value: "email",
              },
            ]) ?? (generator?.email ?? $generator.email)()),
        (generator?.integer ?? $generator.integer)(0, 3),
      );
      return output;
    };
    return $ro0();
  },
  assert: (input: any): DynamicTag => {
    const __is = (input: any): input is DynamicTag => {
      const $io0 = (input: any): boolean =>
        Object.keys(input).every((key: any) => {
          const value = input[key];
          if (undefined === value) return true;
          if (
            "number" === typeof Number(key) &&
            0 <= Number(key) &&
            Number(key) < 10
          )
            return "bigint" === typeof value && BigInt(0) <= value;
          if (
            "string" === typeof key &&
            /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              key,
            )
          )
            return (
              "string" === typeof value &&
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                value,
              )
            );
          return true;
        });
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is DynamicTag => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          false === _exceptionable ||
          Object.keys(input).every((key: any) => {
            const value = input[key];
            if (undefined === value) return true;
            if (
              "number" === typeof Number(key) &&
              0 <= Number(key) &&
              Number(key) < 10
            )
              return (
                ("bigint" === typeof value &&
                  (BigInt(0) <= value ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: 'bigint & Type<"uint64">',
                      value: value,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: '(bigint & Type<"uint64">)',
                  value: value,
                })
              );
            if (
              "string" === typeof key &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                key,
              )
            )
              return (
                ("string" === typeof value &&
                  (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
                    value,
                  ) ||
                    $guard(_exceptionable, {
                      path: _path + $join(key),
                      expected: 'string & Format<"email">',
                      value: value,
                    }))) ||
                $guard(_exceptionable, {
                  path: _path + $join(key),
                  expected: '(string & Format<"email">)',
                  value: value,
                })
              );
            return true;
          });
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "DynamicTag",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "DynamicTag",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
