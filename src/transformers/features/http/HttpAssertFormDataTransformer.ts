import { HttpAssertFormDataProgrammer } from "../../../programmers/http/HttpAssertFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpAssertFormDataTransformer {
  export const transform = GenericTransformer.scalar("http.assertFormData")(
    (project) => (modulo) =>
      HttpAssertFormDataProgrammer.write(project)(modulo),
  );
}
