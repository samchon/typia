import { AssertProgrammer } from "../../programmers/AssertProgrammer";

import { GenericTransformer } from "../internal/GenericTransformer";

export namespace AssertTransformer {
  export const transform = (props: { equals: boolean; guard: boolean }) =>
    GenericTransformer.scalar(
      props.equals
        ? props.guard
          ? "assertGuardEquals"
          : "assertEquals"
        : props.guard
          ? "assertGuard"
          : "assert",
    )((project) => (modulo) => AssertProgrammer.write(project)(modulo)(props));
}
