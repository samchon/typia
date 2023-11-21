import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_equals_ObjectUnionImplicit = _test_equals(
  "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectUnionImplicit => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.x &&
      Number.isFinite(input.x) &&
      "number" === typeof input.y &&
      Number.isFinite(input.y) &&
      (null === input.slope ||
        undefined === input.slope ||
        ("number" === typeof input.slope && Number.isFinite(input.slope))) &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["x", "y", "slope"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1, true && _exceptionable) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2, true && _exceptionable) &&
      (null === input.width ||
        undefined === input.width ||
        ("number" === typeof input.width && Number.isFinite(input.width))) &&
      (null === input.distance ||
        undefined === input.distance ||
        ("number" === typeof input.distance &&
          Number.isFinite(input.distance))) &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["p1", "p2", "width", "distance"].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1, true && _exceptionable) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2, true && _exceptionable) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io0(input.p3, true && _exceptionable) &&
      (null === input.width ||
        undefined === input.width ||
        ("number" === typeof input.width && Number.isFinite(input.width))) &&
      (null === input.height ||
        undefined === input.height ||
        ("number" === typeof input.height && Number.isFinite(input.height))) &&
      (null === input.area ||
        undefined === input.area ||
        ("number" === typeof input.area && Number.isFinite(input.area))) &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["p1", "p2", "p3", "width", "height", "area"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io0(input.p1, true && _exceptionable) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io0(input.p2, true && _exceptionable) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io0(input.p3, true && _exceptionable) &&
      "object" === typeof input.p4 &&
      null !== input.p4 &&
      $io0(input.p4, true && _exceptionable) &&
      (null === input.width ||
        undefined === input.width ||
        ("number" === typeof input.width && Number.isFinite(input.width))) &&
      (null === input.height ||
        undefined === input.height ||
        ("number" === typeof input.height && Number.isFinite(input.height))) &&
      (null === input.area ||
        undefined === input.area ||
        ("number" === typeof input.area && Number.isFinite(input.area))) &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["p1", "p2", "p3", "p4", "width", "height", "area"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.points) &&
      input.points.every(
        (elem: any, _index2: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io0(elem, true && _exceptionable),
      ) &&
      (null === input.length ||
        undefined === input.length ||
        ("number" === typeof input.length && Number.isFinite(input.length))) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["points", "length"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.outer &&
      null !== input.outer &&
      $io4(input.outer, true && _exceptionable) &&
      (undefined === input.inner ||
        (Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any, _index3: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io4(elem, true && _exceptionable),
          ))) &&
      (null === input.area ||
        undefined === input.area ||
        ("number" === typeof input.area && Number.isFinite(input.area))) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["outer", "inner", "area"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.radius &&
      Number.isFinite(input.radius) &&
      (undefined === input.centroid ||
        ("object" === typeof input.centroid &&
          null !== input.centroid &&
          $io0(input.centroid, true && _exceptionable))) &&
      (null === input.area ||
        undefined === input.area ||
        ("number" === typeof input.area && Number.isFinite(input.area))) &&
      (1 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["radius", "centroid", "area"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $iu0 = (input: any, _exceptionable: boolean = true): any =>
      (() => {
        if (undefined !== input.x) return $io0(input, true && _exceptionable);
        else if (undefined !== input.p4)
          return $io3(input, true && _exceptionable);
        else if (undefined !== input.points)
          return $io4(input, true && _exceptionable);
        else if (undefined !== input.outer)
          return $io5(input, true && _exceptionable);
        else if (undefined !== input.radius)
          return $io6(input, true && _exceptionable);
        else
          return (() => {
            if (undefined !== input.p3)
              return $io2(input, true && _exceptionable);
            else return $io1(input, true && _exceptionable);
          })();
      })();
    return (
      Array.isArray(input) &&
      input.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem && null !== elem && $iu0(elem, true),
      )
    );
  })(input),
);
