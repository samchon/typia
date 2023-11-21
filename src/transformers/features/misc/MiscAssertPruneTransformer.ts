import { MiscAssertPruneProgrammer } from "../../../programmers/misc/MiscAssertPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscAssertPruneTransformer {
  export const transform = GenericTransformer.scalar("misc.assertPrune")(
    (project) => (modulo) => MiscAssertPruneProgrammer.write(project)(modulo),
  );
}
