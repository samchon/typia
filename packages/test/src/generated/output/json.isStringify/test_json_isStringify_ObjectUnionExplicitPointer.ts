import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectUnionExplicitPointer } from "../../../structures/ObjectUnionExplicitPointer";

export const test_json_isStringify_ObjectUnionExplicitPointer =
  _test_json_isStringify(
    "ObjectUnionExplicitPointer",
  )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)((input) =>
    ((input: ObjectUnionExplicitPointer): string | null => {
      const is = (input: any): input is ObjectUnionExplicitPointer => {
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
          Number.isFinite(input.y) &&
          "point" === input.type;
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
          "line" === input.type;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.x &&
          Number.isFinite(input.x) &&
          "number" === typeof input.y &&
          Number.isFinite(input.y);
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
          "triangle" === input.type;
        const $io6 = (input: any): boolean =>
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
          Number.isFinite((input.p4 as any).y) &&
          "rectangle" === input.type;
        const $io7 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          ) &&
          "polyline" === input.type;
        const $io8 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io9(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io9(elem),
          ) &&
          "polygon" === input.type;
        const $io9 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io10 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          "number" === typeof (input.centroid as any).x &&
          Number.isFinite((input.centroid as any).x) &&
          "number" === typeof (input.centroid as any).y &&
          Number.isFinite((input.centroid as any).y) &&
          "number" === typeof input.radius &&
          Number.isFinite(input.radius) &&
          "circle" === input.type;
        const $iu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $io2(input);
            else if ("line" === input.type) return $io3(input);
            else if ("triangle" === input.type) return $io5(input);
            else if ("rectangle" === input.type) return $io6(input);
            else if ("polyline" === input.type) return $io7(input);
            else if ("polygon" === input.type) return $io8(input);
            else if ("circle" === input.type) return $io10(input);
            else return false;
          })();
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: ObjectUnionExplicitPointer): string => {
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io2 = (input: any): boolean =>
          "number" === typeof input.x &&
          "number" === typeof input.y &&
          "point" === input.type;
        const $io3 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "line" === input.type;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.x && "number" === typeof input.y;
        const $io5 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io4(input.p3) &&
          "triangle" === input.type;
        const $io6 = (input: any): boolean =>
          "object" === typeof input.p1 &&
          null !== input.p1 &&
          $io4(input.p1) &&
          "object" === typeof input.p2 &&
          null !== input.p2 &&
          $io4(input.p2) &&
          "object" === typeof input.p3 &&
          null !== input.p3 &&
          $io4(input.p3) &&
          "object" === typeof input.p4 &&
          null !== input.p4 &&
          $io4(input.p4) &&
          "rectangle" === input.type;
        const $io7 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          ) &&
          "polyline" === input.type;
        const $io8 = (input: any): boolean =>
          "object" === typeof input.outer &&
          null !== input.outer &&
          $io9(input.outer) &&
          Array.isArray(input.inner) &&
          input.inner.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io9(elem),
          ) &&
          "polygon" === input.type;
        const $io9 = (input: any): boolean =>
          Array.isArray(input.points) &&
          input.points.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io10 = (input: any): boolean =>
          "object" === typeof input.centroid &&
          null !== input.centroid &&
          $io4(input.centroid) &&
          "number" === typeof input.radius &&
          "circle" === input.type;
        const $iu0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $io2(input);
            else if ("line" === input.type) return $io3(input);
            else if ("triangle" === input.type) return $io5(input);
            else if ("rectangle" === input.type) return $io6(input);
            else if ("polyline" === input.type) return $io7(input);
            else if ("polygon" === input.type) return $io8(input);
            else if ("circle" === input.type) return $io10(input);
            else return false;
          })();
        const $number = (typia.json.isStringify as any).number;
        const $string = (typia.json.isStringify as any).string;
        const $throws = (typia.json.isStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map((elem: any) => $so1(elem))
            .join(",")}]`}}`;
        const $so1 = (input: any): any => `{"value":${$su0(input.value)}}`;
        const $so2 = (input: any): any =>
          `{"x":${$number(input.x)},"y":${$number(input.y)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"point"',
              value: input.type,
            });
          })()}}`;
        const $so3 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"line"',
              value: input.type,
            });
          })()}}`;
        const $so5 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
            (input.p3 as any).y,
          )}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"triangle"',
              value: input.type,
            });
          })()}}`;
        const $so6 = (input: any): any =>
          `{"p1":${`{"x":${$number((input.p1 as any).x)},"y":${$number(
            (input.p1 as any).y,
          )}}`},"p2":${`{"x":${$number((input.p2 as any).x)},"y":${$number(
            (input.p2 as any).y,
          )}}`},"p3":${`{"x":${$number((input.p3 as any).x)},"y":${$number(
            (input.p3 as any).y,
          )}}`},"p4":${`{"x":${$number((input.p4 as any).x)},"y":${$number(
            (input.p4 as any).y,
          )}}`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"rectangle"',
              value: input.type,
            });
          })()}}`;
        const $so7 = (input: any): any =>
          `{"points":${`[${input.points
            .map(
              (elem: any) =>
                `{"x":${$number((elem as any).x)},"y":${$number(
                  (elem as any).y,
                )}}`,
            )
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"polyline"',
              value: input.type,
            });
          })()}}`;
        const $so8 = (input: any): any =>
          `{"outer":${$so9(input.outer)},"inner":${`[${input.inner
            .map((elem: any) => $so9(elem))
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"polygon"',
              value: input.type,
            });
          })()}}`;
        const $so9 = (input: any): any =>
          `{"points":${`[${input.points
            .map(
              (elem: any) =>
                `{"x":${$number((elem as any).x)},"y":${$number(
                  (elem as any).y,
                )}}`,
            )
            .join(",")}]`}}`;
        const $so10 = (input: any): any =>
          `{"centroid":${`{"x":${$number(
            (input.centroid as any).x,
          )},"y":${$number((input.centroid as any).y)}}`},"radius":${$number(
            input.radius,
          )},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"circle"',
              value: input.type,
            });
          })()}}`;
        const $su0 = (input: any): any =>
          (() => {
            if ("point" === input.type) return $so2(input);
            else if ("line" === input.type) return $so3(input);
            else if ("triangle" === input.type) return $so5(input);
            else if ("rectangle" === input.type) return $so6(input);
            else if ("polyline" === input.type) return $so7(input);
            else if ("polygon" === input.type) return $so8(input);
            else if ("circle" === input.type) return $so10(input);
            else
              $throws({
                expected:
                  '(ObjectUnionExplicitPointer.Discriminator<"point", ObjectUnionExplicitPointer.IPoint> | ObjectUnionExplicitPointer.Discriminator<"line", ObjectUnionExplicitPointer.ILine> | ObjectUnionExplicitPointer.Discriminator<"triangle", ObjectUnionExplicitPointer.ITriangle> | ObjectUnionExplicitPointer.Discriminator<"rectangle", ObjectUnionExplicitPointer.IRectangle> | ObjectUnionExplicitPointer.Discriminator<"polyline", ObjectUnionExplicitPointer.IPolyline> | ObjectUnionExplicitPointer.Discriminator<"polygon", ObjectUnionExplicitPointer.IPolygon> | ObjectUnionExplicitPointer.Discriminator<"circle", ObjectUnionExplicitPointer.ICircle>)',
                value: input,
              });
          })();
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );
