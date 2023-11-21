import { HttpIsQueryProgrammer } from "../../../programmers/http/HttpIsQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsQueryTransformer {
  export const transform = GenericTransformer.scalar("http.isQuery")(
    (project) => (modulo) => HttpIsQueryProgrammer.write(project)(modulo),
  );
}
