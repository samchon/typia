import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ObjectNullable } from "../../../structures/ObjectNullable";
export const test_random_ObjectNullable = _test_random(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)({
  random: () =>
    ((
      generator?: Partial<typia.IRandomGenerator>,
    ): import("typia").Resolved<ObjectNullable> => {
      const $generator = (typia.random as any).generator;
      const $pick = (typia.random as any).pick;
      const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        value: (generator?.array ?? $generator.array)(() =>
          $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        ),
      });
      const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
        manufacturer: $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        brand: $pick([
          () => null,
          () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
        similar: $pick([
          () => null,
          () => $ro3(_recursive, _recursive ? 1 + _depth : _depth),
          () => $ro2(_recursive, _recursive ? 1 + _depth : _depth),
        ])(),
      });
      const $ro2 = (_recursive: boolean = false, _depth: number = 0): any => ({
        type: "manufacturer",
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      const $ro3 = (_recursive: boolean = false, _depth: number = 0): any => ({
        type: "brand",
        name:
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      });
      return $ro0();
    })((ObjectNullable as any).RANDOM),
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectNullable => {
    const __is = (input: any): input is ObjectNullable => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        );
      const $io1 = (input: any): boolean =>
        "string" === typeof input.name &&
        "object" === typeof input.manufacturer &&
        null !== input.manufacturer &&
        $io2(input.manufacturer) &&
        (null === input.brand ||
          ("object" === typeof input.brand &&
            null !== input.brand &&
            $io3(input.brand))) &&
        (null === input.similar ||
          ("object" === typeof input.similar &&
            null !== input.similar &&
            $iu0(input.similar)));
      const $io2 = (input: any): boolean =>
        "manufacturer" === input.type && "string" === typeof input.name;
      const $io3 = (input: any): boolean =>
        "brand" === input.type && "string" === typeof input.name;
      const $iu0 = (input: any): any =>
        (() => {
          if ("brand" === input.type) return $io3(input);
          else if ("manufacturer" === input.type) return $io2(input);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectNullable => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ((Array.isArray(input.value) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".value",
                expected: "Array<ObjectNullable.IProduct>",
                value: input.value,
              },
              errorFactory,
            )) &&
            input.value.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "ObjectNullable.IProduct",
                      value: elem,
                    },
                    errorFactory,
                  )) &&
                  $ao1(
                    elem,
                    _path + ".value[" + _index1 + "]",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "ObjectNullable.IProduct",
                    value: elem,
                  },
                  errorFactory,
                ),
            )) ||
          $guard(
            _exceptionable,
            {
              path: _path + ".value",
              expected: "Array<ObjectNullable.IProduct>",
              value: input.value,
            },
            errorFactory,
          );
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            )) &&
          (((("object" === typeof input.manufacturer &&
            null !== input.manufacturer) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".manufacturer",
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              },
              errorFactory,
            )) &&
            $ao2(
              input.manufacturer,
              _path + ".manufacturer",
              true && _exceptionable,
            )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".manufacturer",
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              },
              errorFactory,
            )) &&
          (null === input.brand ||
            ((("object" === typeof input.brand && null !== input.brand) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".brand",
                  expected: "(ObjectNullable.IBrand | null)",
                  value: input.brand,
                },
                errorFactory,
              )) &&
              $ao3(input.brand, _path + ".brand", true && _exceptionable)) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".brand",
                expected: "(ObjectNullable.IBrand | null)",
                value: input.brand,
              },
              errorFactory,
            )) &&
          (null === input.similar ||
            ((("object" === typeof input.similar && null !== input.similar) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".similar",
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                  value: input.similar,
                },
                errorFactory,
              )) &&
              $au0(
                input.similar,
                _path + ".similar",
                true && _exceptionable,
              )) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".similar",
                expected:
                  "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                value: input.similar,
              },
              errorFactory,
            ));
        const $ao2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("manufacturer" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"manufacturer"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            ));
        const $ao3 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("brand" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"brand"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("string" === typeof input.name ||
            $guard(
              _exceptionable,
              {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              },
              errorFactory,
            ));
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if ("brand" === input.type)
              return $ao3(input, _path, true && _exceptionable);
            else if ("manufacturer" === input.type)
              return $ao2(input, _path, true && _exceptionable);
            else
              return $guard(
                _exceptionable,
                {
                  path: _path,
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                  value: input,
                },
                errorFactory,
              );
          })();
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectNullable",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ObjectNullable",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
