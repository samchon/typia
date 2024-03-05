import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_json_createIsParse_ObjectUnionCompositePointer =
  _test_json_isParse(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
    (input: any): import("typia").Primitive<ObjectUnionCompositePointer> => {
      const is = (input: any): input is ObjectUnionCompositePointer => {
        const $io0 = (input: any): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          );
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y);
        const $io4 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          "number" === typeof (input.p3 as any).x &&
          Number.isFinite((input.p3 as any).x) &&
          "number" === typeof (input.p3 as any).y &&
          Number.isFinite((input.p3 as any).y);
        const $io5 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          "number" === typeof (input.p1 as any).x &&
          Number.isFinite((input.p1 as any).x) &&
          "number" === typeof (input.p1 as any).y &&
          Number.isFinite((input.p1 as any).y) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          "number" === typeof (input.p2 as any).x &&
          Number.isFinite((input.p2 as any).x) &&
          "number" === typeof (input.p2 as any).y &&
          Number.isFinite((input.p2 as any).y) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          "number" === typeof (input.p3 as any).x &&
          Number.isFinite((input.p3 as any).x) &&
          "number" === typeof (input.p3 as any).y &&
          Number.isFinite((input.p3 as any).y) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          "number" === typeof (input.p4 as any).x &&
          Number.isFinite((input.p4 as any).x) &&
          "number" === typeof (input.p4 as any).y &&
          Number.isFinite((input.p4 as any).y);
        const $io6 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          );
        const $io7 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io6(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io6(elem),
          );
        const $io8 = (input: any): boolean =>
          Array.isArray(input.outer) &&
          input.outer.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io2(elem),
          ) &&
          "object" === typeof input.inner &&
          null !== input.inner &&
          "number" === typeof (input.inner as any).x &&
          Number.isFinite((input.inner as any).x) &&
          "number" === typeof (input.inner as any).y &&
          Number.isFinite((input.inner as any).y);
        const $io9 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          "number" === typeof (input.centroid as any).x &&
          Number.isFinite((input.centroid as any).x) &&
          "number" === typeof (input.centroid as any).y &&
          Number.isFinite((input.centroid as any).y) &&
          "number" === typeof input.radius &&
          Number.isFinite(input.radius);
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
        return "object" === typeof input && null !== input && $io0(input);
      };
      input = JSON.parse(input);
      return is(input) ? (input as any) : null;
    },
  );
