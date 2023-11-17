import { HttpAssertHeadersProgrammer } from "../../../programmers/http/HttpAssertHeadersProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertHeadersTransformer {
  export const transform = GenericTransformer.factory(
    "http.createAssertHeaders",
  )(
    (project) => (modulo) => HttpAssertHeadersProgrammer.write(project)(modulo),
  );
}
