import { AssertProgrammer } from "../../programmers/AssertProgrammer";

import { GenericTransformer } from "../internal/GenericTransformer";

export namespace CreateAssertTransformer {
  export const transform = (props: { equals: boolean; guard: boolean }) =>
    GenericTransformer.factory(
      props.equals
        ? props.guard
          ? "createAssertGuardEquals"
          : "createAssertEquals"
        : props.guard
        ? "createAssertGuard"
        : "createAssert",
    )((project) => (modulo) => AssertProgrammer.write(project)(modulo)(props));
}
