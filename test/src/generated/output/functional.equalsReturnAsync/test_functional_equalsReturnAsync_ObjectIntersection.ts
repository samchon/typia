import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_functional_equalsReturnAsync_ObjectIntersection =
  _test_functional_equalsReturnAsync("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      async (input: ObjectIntersection): Promise<ObjectIntersection | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectIntersection => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.email &&
            "string" === typeof input.name &&
            "boolean" === typeof input.vulnerable &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["email", "name", "vulnerable"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
