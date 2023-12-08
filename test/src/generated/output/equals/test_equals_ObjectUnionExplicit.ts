import typia from "typia";

import { _test_equals } from "../../../internal/_test_equals";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_equals_ObjectUnionExplicit = _test_equals(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  ((
    input: any,
    _exceptionable: boolean = true,
  ): input is ObjectUnionExplicit => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "number" === typeof input.x &&
      Number.isFinite(input.x) &&
      "number" === typeof input.y &&
      Number.isFinite(input.y) &&
      "point" === input.type &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["x", "y", "type"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io2(input.p1, true && _exceptionable) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io2(input.p2, true && _exceptionable) &&
      "line" === input.type &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["p1", "p2", "type"].some((prop: any) => key === prop))
            return true;
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
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io2(input.p3, true && _exceptionable) &&
      "triangle" === input.type &&
      (4 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["p1", "p2", "p3", "type"].some((prop: any) => key === prop))
            return true;
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
      "object" === typeof input.p4 &&
      null !== input.p4 &&
      $io2(input.p4, true && _exceptionable) &&
      "rectangle" === input.type &&
      (5 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["p1", "p2", "p3", "p4", "type"].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.points) &&
      input.points.every(
        (elem: any, _index2: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io2(elem, true && _exceptionable),
      ) &&
      "polyline" === input.type &&
      (2 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["points", "type"].some((prop: any) => key === prop)) return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io6 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.outer &&
      null !== input.outer &&
      $io7(input.outer, true && _exceptionable) &&
      Array.isArray(input.inner) &&
      input.inner.every(
        (elem: any, _index3: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io7(elem, true && _exceptionable),
      ) &&
      "polygon" === input.type &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["outer", "inner", "type"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io7 = (input: any, _exceptionable: boolean = true): boolean =>
      Array.isArray(input.points) &&
      input.points.every(
        (elem: any, _index4: number) =>
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
    const $io8 = (input: any, _exceptionable: boolean = true): boolean =>
      "object" === typeof input.centroid &&
      null !== input.centroid &&
      $io2(input.centroid, true && _exceptionable) &&
      "number" === typeof input.radius &&
      Number.isFinite(input.radius) &&
      "circle" === input.type &&
      (3 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (["centroid", "radius", "type"].some((prop: any) => key === prop))
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $iu0 = (input: any, _exceptionable: boolean = true): any =>
      (() => {
        if ("point" === input.type) return $io0(input, true && _exceptionable);
        else if ("line" === input.type)
          return $io1(input, true && _exceptionable);
        else if ("triangle" === input.type)
          return $io3(input, true && _exceptionable);
        else if ("rectangle" === input.type)
          return $io4(input, true && _exceptionable);
        else if ("polyline" === input.type)
          return $io5(input, true && _exceptionable);
        else if ("polygon" === input.type)
          return $io6(input, true && _exceptionable);
        else if ("circle" === input.type)
          return $io8(input, true && _exceptionable);
        else return false;
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
