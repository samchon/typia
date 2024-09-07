import { RandomGenerator } from "../../utils/RandomGenerator";

import { $every } from "../$every";
import { $guard } from "../$guard";
import { $join } from "../$join";
import { $report } from "../$report";
import { IValidation } from "../../IValidation";
import { TypeGuardError } from "../../TypeGuardError";
import { is } from "../is";

export * as functional from "./functional";
export * as json from "./json";
export * as http from "./http";
export * as notations from "./notations";
export * as misc from "./misc";
export * as protobuf from "./protobuf";
export * as llm from "./llm";

export { is };

export const assert = (method: string) => ({
  ...is(),
  join: $join,
  every: $every,
  guard: $guard(`typia.${method}`),
  predicate: (
    matched: boolean,
    exceptionable: boolean,
    closure: () => Omit<TypeGuardError.IProps, "method">,
  ): boolean => {
    if (matched === false && exceptionable === true)
      throw new TypeGuardError({
        ...closure(),
        method: `typia.${method}`,
      });
    return matched;
  },
});

export const validate = () => ({
  ...is(),
  join: $join,
  report: $report,
  predicate:
    (res: IValidation) =>
    (
      matched: boolean,
      exceptionable: boolean,
      closure: () => IValidation.IError,
    ) => {
      // CHECK FAILURE
      if (matched === false && exceptionable === true)
        (() => {
          res.success &&= false;
          const errorList = (res as IValidation.IFailure).errors;

          // TRACE ERROR
          const error = closure();
          if (errorList.length) {
            const last = errorList[errorList.length - 1]!.path;
            if (
              last.length >= error.path.length &&
              last.substring(0, error.path.length) === error.path
            )
              return;
          }
          errorList.push(error);
          return;
        })();
      return matched;
    },
});

export const random = () => ({
  generator: RandomGenerator,
  pick: RandomGenerator.pick,
});
