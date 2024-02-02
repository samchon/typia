import { HttpAssertFormDataProgrammer } from "../../../programmers/http/HttpAssertFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpAssertFormDataTransformer {
  export const transform = GenericTransformer.factory(
    "http.createAssertFormData",
  )(
    (project) => (modulo) =>
      HttpAssertFormDataProgrammer.write(project)(modulo),
  );
}
