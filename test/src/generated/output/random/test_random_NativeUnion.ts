import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_random_NativeUnion = _test_random("NativeUnion")<NativeUnion>(
  NativeUnion,
)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<NativeUnion> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        date: $pick([
          () => null,
          () => new Date((generator?.datetime ?? $generator.datetime)()),
        ])(),
        unsigned: $pick([
          () =>
            new Uint8Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 255),
              ),
            ),
          () =>
            new Uint8ClampedArray(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 255),
              ),
            ),
          () =>
            new Uint16Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 65535),
              ),
            ),
          () =>
            new Uint32Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 4294967295),
              ),
            ),
          () =>
            new BigUint64Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.bigint ?? $generator.bigint)(
                  BigInt(0),
                  BigInt(18446744073709552000),
                ),
              ),
            ),
        ])(),
        signed: $pick([
          () =>
            new Int8Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(-128, 127),
              ),
            ),
          () =>
            new Int16Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(-32768, 32767),
              ),
            ),
          () =>
            new Int32Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(
                  -2147483648,
                  2147483647,
                ),
              ),
            ),
          () =>
            new BigInt64Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.bigint ?? $generator.bigint)(
                  BigInt(-9223372036854776000),
                  BigInt(9223372036854776000),
                ),
              ),
            ),
        ])(),
        float: $pick([
          () =>
            new Float32Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.number ?? $generator.number)(
                  -1.175494351e38,
                  3.4028235e38,
                ),
              ),
            ),
          () =>
            new Float64Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.number ?? $generator.number)(
                  5e-324,
                  1.7976931348623157e308,
                ),
              ),
            ),
        ])(),
        buffer: $pick([
          () =>
            new Uint8Array(
              (generator?.array ?? $generator.array)((): any =>
                (generator?.integer ?? $generator.integer)(0, 255),
              ),
            ).buffer,
          () =>
            (() => {
              const length = (generator?.integer ?? $generator.integer)();
              const buffer = new SharedArrayBuffer(length);
              const bytes = new Uint8Array(buffer);
              bytes.set(
                (generator?.array ?? $generator.array)(
                  (): any => (generator?.integer ?? $generator.integer)(0, 255),
                  length,
                ),
                0,
              );
              return buffer;
            })(),
        ])(),
      });
      return (generator?.array ?? $generator.array)(() => $ro0());
    })((NativeUnion as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): NativeUnion => {
    const __is = (input: any): input is NativeUnion => {
      const $io0 = (input: any): boolean =>
        (null === input.date || input.date instanceof Date) &&
        (input.unsigned instanceof Uint8Array ||
          input.unsigned instanceof Uint8ClampedArray ||
          input.unsigned instanceof Uint16Array ||
          input.unsigned instanceof Uint32Array ||
          input.unsigned instanceof BigUint64Array) &&
        (input.signed instanceof Int8Array ||
          input.signed instanceof Int16Array ||
          input.signed instanceof Int32Array ||
          input.signed instanceof BigInt64Array) &&
        (input.float instanceof Float32Array ||
          input.float instanceof Float64Array) &&
        (input.buffer instanceof ArrayBuffer ||
          input.buffer instanceof SharedArrayBuffer);
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is NativeUnion => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (null === input.date ||
            input.date instanceof Date ||
            $guard(
              _exceptionable,
              {
                path: _path + ".date",
                expected: "(Date | null)",
                value: input.date,
              },
              errorFactory,
            )) &&
          (input.unsigned instanceof Uint8Array ||
            input.unsigned instanceof Uint8ClampedArray ||
            input.unsigned instanceof Uint16Array ||
            input.unsigned instanceof Uint32Array ||
            input.unsigned instanceof BigUint64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".unsigned",
                expected:
                  "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                value: input.unsigned,
              },
              errorFactory,
            )) &&
          (input.signed instanceof Int8Array ||
            input.signed instanceof Int16Array ||
            input.signed instanceof Int32Array ||
            input.signed instanceof BigInt64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".signed",
                expected:
                  "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                value: input.signed,
              },
              errorFactory,
            )) &&
          (input.float instanceof Float32Array ||
            input.float instanceof Float64Array ||
            $guard(
              _exceptionable,
              {
                path: _path + ".float",
                expected: "(Float32Array | Float64Array)",
                value: input.float,
              },
              errorFactory,
            )) &&
          (input.buffer instanceof ArrayBuffer ||
            input.buffer instanceof SharedArrayBuffer ||
            $guard(
              _exceptionable,
              {
                path: _path + ".buffer",
                expected: "(ArrayBuffer | SharedArrayBuffer)",
                value: input.buffer,
              },
              errorFactory,
            ));
        return (
          ((Array.isArray(input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "NativeUnion",
                value: input,
              },
              errorFactory,
            )) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    true,
                    {
                      path: _path + "[" + _index1 + "]",
                      expected: "NativeUnion.Union",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "[" + _index1 + "]",
                    expected: "NativeUnion.Union",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "NativeUnion",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
