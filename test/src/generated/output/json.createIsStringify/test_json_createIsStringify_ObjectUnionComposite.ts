import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_json_createIsStringify_ObjectUnionComposite =
  _test_json_isStringify("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )((input: ObjectUnionComposite): string | null => {
    const is = (input: any): input is ObjectUnionComposite => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x &&
        Number.isFinite(input.x) &&
        "number" === typeof input.y &&
        Number.isFinite(input.y);
      const $io1 = (input: any): boolean =>
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
      const $io2 = (input: any): boolean =>
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
      const $io4 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        );
      const $io5 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io6 = (input: any): boolean =>
        Array.isArray(input.outer) &&
        input.outer.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "object" === typeof input.inner &&
        null !== input.inner &&
        "number" === typeof (input.inner as any).x &&
        Number.isFinite((input.inner as any).x) &&
        "number" === typeof (input.inner as any).y &&
        Number.isFinite((input.inner as any).y);
      const $io7 = (input: any): boolean =>
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
          if (undefined !== input.x) return $io0(input);
          else if (undefined !== input.p4) return $io3(input);
          else if (undefined !== input.points) return $io4(input);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          )
            return $io6(input);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer)
          )
            return $io5(input);
          else if (undefined !== input.centroid) return $io7(input);
          else
            return (() => {
              if (undefined !== input.p3) return $io2(input);
              else return $io1(input);
            })();
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    const stringify = (input: ObjectUnionComposite): string => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.x && "number" === typeof input.y;
      const $io1 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2);
      const $io2 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3);
      const $io3 = (input: any): boolean =>
        "object" === typeof input.p1 &&
        null !== input.p1 &&
        $io0(input.p1) &&
        "object" === typeof input.p2 &&
        null !== input.p2 &&
        $io0(input.p2) &&
        "object" === typeof input.p3 &&
        null !== input.p3 &&
        $io0(input.p3) &&
        "object" === typeof input.p4 &&
        null !== input.p4 &&
        $io0(input.p4);
      const $io4 = (input: any): boolean =>
        Array.isArray(input.points) &&
        input.points.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        );
      const $io5 = (input: any): boolean =>
        "object" === typeof input.outer &&
        null !== input.outer &&
        $io4(input.outer) &&
        Array.isArray(input.inner) &&
        input.inner.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io4(elem),
        );
      const $io6 = (input: any): boolean =>
        Array.isArray(input.outer) &&
        input.outer.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        ) &&
        "object" === typeof input.inner &&
        null !== input.inner &&
        $io0(input.inner);
      const $io7 = (input: any): boolean =>
        "object" === typeof input.centroid &&
        null !== input.centroid &&
        $io0(input.centroid) &&
        "number" === typeof input.radius;
      const $number = require("typia/lib/functional/$number").$number;
      const $so0 = (input: any): any =>
        `{"x":${$number(input.x)},"y":${$number(input.y)}}`;
      const $so1 = (input: any): any =>
        `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
          (input.p1 as any).y,
        )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
          (input.p2 as any).y,
        )}}`}}`;
      const $so2 = (input: any): any =>
        `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
          (input.p1 as any).y,
        )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
          (input.p2 as any).y,
        )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
          (input.p3 as any).y,
        )}}`}}`;
      const $so3 = (input: any): any =>
        `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
          (input.p1 as any).y,
        )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
          (input.p2 as any).y,
        )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
          (input.p3 as any).y,
        )}}`},"p4":${`{"x":${$number((input.p4 as any).x)},"y":${$number(
          (input.p4 as any).y,
        )}}`}}`;
      const $so4 = (input: any): any =>
        `{"points":${`[${input.points
          .map(
            (elem: any) =>
              `{"x":${$number((elem as any).x)},"y":${$number(
                (elem as any).y,
              )}}`,
          )
          .join(",")}]`}}`;
      const $so5 = (input: any): any =>
        `{"outer":${$so4(input.outer)},"inner":${`[${input.inner
          .map((elem: any) => $so4(elem))
          .join(",")}]`}}`;
      const $so6 = (input: any): any =>
        `{"outer":${`[${input.outer
          .map(
            (elem: any) =>
              `{"x":${$number((elem as any).x)},"y":${$number(
                (elem as any).y,
              )}}`,
          )
          .join(",")}]`},"inner":${`{"x":${$number(
          (input.inner as any).x,
        )},"y":${$number((input.inner as any).y)}}`}}`;
      const $so7 = (input: any): any =>
        `{"centroid":${`{"x":${$number(
          (input.centroid as any).x,
        )},"y":${$number((input.centroid as any).y)}}`},"radius":${$number(
          input.radius,
        )}}`;
      const $su0 = (input: any): any =>
        (() => {
          if (undefined !== input.x) return $so0(input);
          else if (undefined !== input.p4) return $so3(input);
          else if (undefined !== input.points) return $so4(input);
          else if (
            Array.isArray(input.outer) &&
            input.outer.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          )
            return $so6(input);
          else if (
            "object" === typeof input.outer &&
            null !== input.outer &&
            $io4(input.outer)
          )
            return $so5(input);
          else if (undefined !== input.centroid) return $so7(input);
          else
            return (() => {
              if (undefined !== input.p3) return $so2(input);
              else return $so1(input);
            })();
        })();
      return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  });
