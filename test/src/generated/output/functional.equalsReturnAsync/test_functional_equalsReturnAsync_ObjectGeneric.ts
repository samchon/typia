import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
export const test_functional_equalsReturnAsync_ObjectGeneric =
  _test_functional_equalsReturnAsync("ObjectGeneric")(ObjectGeneric)(
    (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
      async (input: ObjectGeneric): Promise<ObjectGeneric | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectGeneric => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "boolean" === typeof input.value &&
            "object" === typeof input.child &&
            null !== input.child &&
            $io1(input.child, true && _exceptionable) &&
            Array.isArray(input.elements) &&
            input.elements.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io1(elem, true && _exceptionable),
            ) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["value", "child", "elements"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "boolean" === typeof input.child_value &&
            "boolean" === typeof input.child_next &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["child_value", "child_next"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $io3(input.child, true && _exceptionable) &&
            Array.isArray(input.elements) &&
            input.elements.every(
              (elem: any, _index2: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io3(elem, true && _exceptionable),
            ) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["value", "child", "elements"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.child_value &&
            Number.isFinite(input.child_value) &&
            "number" === typeof input.child_next &&
            Number.isFinite(input.child_next) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["child_value", "child_next"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.value &&
            "object" === typeof input.child &&
            null !== input.child &&
            $io5(input.child, true && _exceptionable) &&
            Array.isArray(input.elements) &&
            input.elements.every(
              (elem: any, _index3: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io5(elem, true && _exceptionable),
            ) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["value", "child", "elements"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io5 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.child_value &&
            "string" === typeof input.child_next &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["child_value", "child_next"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0], true) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io2(input[1], true) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io4(input[2], true)
          );
        })(result)
          ? result
          : null;
      },
  );
