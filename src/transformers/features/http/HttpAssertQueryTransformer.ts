import { HttpAssertQueryProgrammer } from "../../../programmers/http/HttpAssertQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertQueryTransformer {
  export const transform = GenericTransformer.scalar("http.assertQuery")(
    (project) => (modulo) => HttpAssertQueryProgrammer.write(project)(modulo),
  );
}
