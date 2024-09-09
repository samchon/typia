import { ILlmApplication } from "@samchon/openapi";

import { LlmSchemaSeparator } from "@samchon/openapi/lib/utils/LlmSchemaSeparator";

export const application = () => ({
  finalize: (
    app: ILlmApplication,
    options?: ILlmApplication.IOptions,
  ): void => {
    app.options = {
      separate: options?.separate ?? null,
    };
    if (app.options.separate === null) return;
    for (const func of app.functions)
      func.separated = LlmSchemaSeparator.parameters({
        parameters: func.parameters,
        predicator: app.options.separate,
      });
  },
});
