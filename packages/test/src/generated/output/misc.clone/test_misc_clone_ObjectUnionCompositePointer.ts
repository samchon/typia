import typia from "typia";

import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_misc_clone_ObjectUnionCompositePointer = _test_misc_clone(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)((input) =>
  ((
    input: ObjectUnionCompositePointer,
  ): typia.Resolved<ObjectUnionCompositePointer> => {
    const $io1 = (input: any): boolean =>
      "object" === typeof input.value &&
      null !== input.value &&
      $iu0(input.value);
    const $io2 = (input: any): boolean =>
      "number" === typeof input.x && "number" === typeof input.y;
    const $io3 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io2(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io2(input.p2);
    const $io4 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io2(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io2(input.p2) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io2(input.p3);
    const $io5 = (input: any): boolean =>
      "object" === typeof input.p1 &&
      null !== input.p1 &&
      $io2(input.p1) &&
      "object" === typeof input.p2 &&
      null !== input.p2 &&
      $io2(input.p2) &&
      "object" === typeof input.p3 &&
      null !== input.p3 &&
      $io2(input.p3) &&
      "object" === typeof input.p4 &&
      null !== input.p4 &&
      $io2(input.p4);
    const $io6 = (input: any): boolean =>
      Array.isArray(input.points) &&
      input.points.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io2(elem),
      );
    const $io7 = (input: any): boolean =>
      "object" === typeof input.outer &&
      null !== input.outer &&
      $io6(input.outer) &&
      Array.isArray(input.inner) &&
      input.inner.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io6(elem),
      );
    const $io8 = (input: any): boolean =>
      Array.isArray(input.outer) &&
      input.outer.every(
        (elem: any) => "object" === typeof elem && null !== elem && $io2(elem),
      ) &&
      "object" === typeof input.inner &&
      null !== input.inner &&
      $io2(input.inner);
    const $io9 = (input: any): boolean =>
      "object" === typeof input.centroid &&
      null !== input.centroid &&
      $io2(input.centroid) &&
      "number" === typeof input.radius;
    const $iu0 = (input: any): any =>
      (() => {
        if (undefined !== input.x) return $io2(input);
        else if (undefined !== input.p4) return $io5(input);
        else if (undefined !== input.points) return $io6(input);
        else if (
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          )
        )
          return $io8(input);
        else if (
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io6(input.outer)
        )
          return $io7(input);
        else if (undefined !== input.centroid) return $io9(input);
        else
          return (() => {
            if (undefined !== input.p3) return $io4(input);
            else return $io3(input);
          })();
      })();
    const $cp0 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co1(elem) : (elem as any),
      );
    const $cp1 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co2(elem) : (elem as any),
      );
    const $cp2 = (input: any) =>
      input.map((elem: any) =>
        "object" === typeof elem && null !== elem ? $co6(elem) : (elem as any),
      );
    const $co0 = (input: any): any => ({
      value: Array.isArray(input.value)
        ? $cp0(input.value)
        : (input.value as any),
    });
    const $co1 = (input: any): any => ({
      value:
        "object" === typeof input.value && null !== input.value
          ? $cu0(input.value)
          : (input.value as any),
    });
    const $co2 = (input: any): any => ({
      x: input.x as any,
      y: input.y as any,
    });
    const $co3 = (input: any): any => ({
      p1:
        "object" === typeof input.p1 && null !== input.p1
          ? $co2(input.p1)
          : (input.p1 as any),
      p2:
        "object" === typeof input.p2 && null !== input.p2
          ? $co2(input.p2)
          : (input.p2 as any),
    });
    const $co4 = (input: any): any => ({
      p1:
        "object" === typeof input.p1 && null !== input.p1
          ? $co2(input.p1)
          : (input.p1 as any),
      p2:
        "object" === typeof input.p2 && null !== input.p2
          ? $co2(input.p2)
          : (input.p2 as any),
      p3:
        "object" === typeof input.p3 && null !== input.p3
          ? $co2(input.p3)
          : (input.p3 as any),
    });
    const $co5 = (input: any): any => ({
      p1:
        "object" === typeof input.p1 && null !== input.p1
          ? $co2(input.p1)
          : (input.p1 as any),
      p2:
        "object" === typeof input.p2 && null !== input.p2
          ? $co2(input.p2)
          : (input.p2 as any),
      p3:
        "object" === typeof input.p3 && null !== input.p3
          ? $co2(input.p3)
          : (input.p3 as any),
      p4:
        "object" === typeof input.p4 && null !== input.p4
          ? $co2(input.p4)
          : (input.p4 as any),
    });
    const $co6 = (input: any): any => ({
      points: Array.isArray(input.points)
        ? $cp1(input.points)
        : (input.points as any),
    });
    const $co7 = (input: any): any => ({
      outer:
        "object" === typeof input.outer && null !== input.outer
          ? $co6(input.outer)
          : (input.outer as any),
      inner: Array.isArray(input.inner)
        ? $cp2(input.inner)
        : (input.inner as any),
    });
    const $co8 = (input: any): any => ({
      outer: Array.isArray(input.outer)
        ? $cp1(input.outer)
        : (input.outer as any),
      inner:
        "object" === typeof input.inner && null !== input.inner
          ? $co2(input.inner)
          : (input.inner as any),
    });
    const $co9 = (input: any): any => ({
      centroid:
        "object" === typeof input.centroid && null !== input.centroid
          ? $co2(input.centroid)
          : (input.centroid as any),
      radius: input.radius as any,
    });
    const $cu0 = (input: any): any =>
      (() => {
        if (undefined !== input.x) return $co2(input);
        else if (undefined !== input.p4) return $co5(input);
        else if (undefined !== input.points) return $co6(input);
        else if (
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          )
        )
          return $co8(input);
        else if (
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io6(input.outer)
        )
          return $co7(input);
        else if (undefined !== input.centroid) return $co9(input);
        else
          return (() => {
            if (undefined !== input.p3) return $co4(input);
            else return $co3(input);
          })();
      })();
    return "object" === typeof input && null !== input
      ? $co0(input)
      : (input as any);
  })(input),
);
