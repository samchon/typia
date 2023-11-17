import { HttpAssertHeadersProgrammer } from "../../../programmers/http/HttpAssertHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertHeadersTransformer {
  export const transform = GenericTransformer.scalar("http.assertHeaders")(
    (project) => (modulo) => HttpAssertHeadersProgrammer.write(project)(modulo),
  );
}
