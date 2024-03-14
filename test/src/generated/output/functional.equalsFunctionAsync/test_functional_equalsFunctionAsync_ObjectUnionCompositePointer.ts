import typia from "typia";
import { _test_functional_equalsFunctionAsync } from "../../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";
export const test_functional_equalsFunctionAsync_ObjectUnionCompositePointer =
  _test_functional_equalsFunctionAsync("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) =>
      async (
        input: ObjectUnionCompositePointer,
      ): Promise<ObjectUnionCompositePointer | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectUnionCompositePointer => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io1(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              $iu0(input.value, true && _exceptionable) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["value"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.x &&
              Number.isFinite(input.x) &&
              "number" === typeof input.y &&
              Number.isFinite(input.y) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["x", "y"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["p1", "p2"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io4 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              (3 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["p1", "p2", "p3"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io5 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.p1 &&
              null !== input.p1 &&
              $io2(input.p1, true && _exceptionable) &&
              "object" === typeof input.p2 &&
              null !== input.p2 &&
              $io2(input.p2, true && _exceptionable) &&
              "object" === typeof input.p3 &&
              null !== input.p3 &&
              $io2(input.p3, true && _exceptionable) &&
              "object" === typeof input.p4 &&
              null !== input.p4 &&
              $io2(input.p4, true && _exceptionable) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["p1", "p2", "p3", "p4"].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io6 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.points) &&
              input.points.every(
                (elem: any, _index2: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["points"].some((prop: any) => key === prop)) return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io7 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.outer &&
              null !== input.outer &&
              $io6(input.outer, true && _exceptionable) &&
              Array.isArray(input.inner) &&
              input.inner.every(
                (elem: any, _index3: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io6(elem, true && _exceptionable),
              ) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["outer", "inner"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io8 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              Array.isArray(input.outer) &&
              input.outer.every(
                (elem: any, _index4: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              "object" === typeof input.inner &&
              null !== input.inner &&
              $io2(input.inner, true && _exceptionable) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["outer", "inner"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io9 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.centroid &&
              null !== input.centroid &&
              $io2(input.centroid, true && _exceptionable) &&
              "number" === typeof input.radius &&
              Number.isFinite(input.radius) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["centroid", "radius"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
              (() => {
                if (undefined !== input.x)
                  return $io2(input, true && _exceptionable);
                else if (undefined !== input.p4)
                  return $io5(input, true && _exceptionable);
                else if (undefined !== input.points)
                  return $io6(input, true && _exceptionable);
                else if (
                  Array.isArray(input.outer) &&
                  input.outer.every(
                    (elem: any, _index5: number) =>
                      "object" === typeof elem &&
                      null !== elem &&
                      $io2(elem, false && _exceptionable),
                  )
                )
                  return $io8(input, true && _exceptionable);
                else if (
                  "object" === typeof input.outer &&
                  null !== input.outer &&
                  $io6(input.outer, false && _exceptionable)
                )
                  return $io7(input, true && _exceptionable);
                else if (undefined !== input.centroid)
                  return $io9(input, true && _exceptionable);
                else
                  return (() => {
                    if (undefined !== input.p3)
                      return $io4(input, true && _exceptionable);
                    else return $io3(input, true && _exceptionable);
                  })();
              })();
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectUnionCompositePointer => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value, true && _exceptionable) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.x &&
            Number.isFinite(input.x) &&
            "number" === typeof input.y &&
            Number.isFinite(input.y) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["x", "y"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1, true && _exceptionable) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2, true && _exceptionable) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["p1", "p2"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1, true && _exceptionable) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2, true && _exceptionable) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            $io2(input.p3, true && _exceptionable) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["p1", "p2", "p3"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.p1 &&
            null !== input.p1 &&
            $io2(input.p1, true && _exceptionable) &&
            "object" === typeof input.p2 &&
            null !== input.p2 &&
            $io2(input.p2, true && _exceptionable) &&
            "object" === typeof input.p3 &&
            null !== input.p3 &&
            $io2(input.p3, true && _exceptionable) &&
            "object" === typeof input.p4 &&
            null !== input.p4 &&
            $io2(input.p4, true && _exceptionable) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["p1", "p2", "p3", "p4"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.points) &&
            input.points.every(
              (elem: any, _index2: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io2(elem, true && _exceptionable),
            ) &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["points"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io7 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io6(input.outer, true && _exceptionable) &&
            Array.isArray(input.inner) &&
            input.inner.every(
              (elem: any, _index3: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io6(elem, true && _exceptionable),
            ) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["outer", "inner"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io8 = (input: any, _exceptionable: boolean = true): boolean =>
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any, _index4: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io2(elem, true && _exceptionable),
            ) &&
            "object" === typeof input.inner &&
            null !== input.inner &&
            $io2(input.inner, true && _exceptionable) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["outer", "inner"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io9 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.centroid &&
            null !== input.centroid &&
            $io2(input.centroid, true && _exceptionable) &&
            "number" === typeof input.radius &&
            Number.isFinite(input.radius) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["centroid", "radius"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $iu0 = (input: any, _exceptionable: boolean = true): any =>
            (() => {
              if (undefined !== input.x)
                return $io2(input, true && _exceptionable);
              else if (undefined !== input.p4)
                return $io5(input, true && _exceptionable);
              else if (undefined !== input.points)
                return $io6(input, true && _exceptionable);
              else if (
                Array.isArray(input.outer) &&
                input.outer.every(
                  (elem: any, _index5: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io2(elem, false && _exceptionable),
                )
              )
                return $io8(input, true && _exceptionable);
              else if (
                "object" === typeof input.outer &&
                null !== input.outer &&
                $io6(input.outer, false && _exceptionable)
              )
                return $io7(input, true && _exceptionable);
              else if (undefined !== input.centroid)
                return $io9(input, true && _exceptionable);
              else
                return (() => {
                  if (undefined !== input.p3)
                    return $io4(input, true && _exceptionable);
                  else return $io3(input, true && _exceptionable);
                })();
            })();
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
