import { HttpIsHeadersProgrammer } from "../../../programmers/http/HttpIsHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsHeadersTransformer {
  export const transform = GenericTransformer.scalar("http.isHeaders")(
    (project) => (modulo) => HttpIsHeadersProgrammer.write(project)(modulo),
  );
}
