import { ILlmApplication, ILlmController } from "@samchon/openapi";
import typia, { IValidation, tags } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1631_llm_application_custom_validate = (): void => {
  let applicationCustom: boolean = false;
  let controllerCustom: boolean = false;

  const app: ILlmApplication<"chatgpt"> = typia.llm.application<
    BbsArticleService,
    "chatgpt"
  >({
    validate: {
      create: (input: unknown): IValidation<IBbsArticle.ICreate> => {
        applicationCustom = true;
        return typia.validate<IBbsArticle.ICreate>(input);
      },
    },
  });
  app.functions[0]?.validate("something");

  const controller: ILlmController<"chatgpt"> = typia.llm.controller<
    BbsArticleService,
    "chatgpt"
  >("bbs", new BbsArticleService(), {
    validate: {
      create: (input: unknown): IValidation<IBbsArticle.ICreate> => {
        controllerCustom = true;
        return typia.validate<IBbsArticle.ICreate>(input);
      },
    },
  });
  controller.application.functions[0]?.validate("something");

  TestValidator.equals("application custom")(applicationCustom)(true);
  TestValidator.equals("controller custom")(controllerCustom)(true);
};

class BbsArticleService {
  public async create(input: IBbsArticle.ICreate): Promise<void> {
    input;
  }
}
namespace IBbsArticle {
  export interface ICreate {
    id: string & tags.Format<"uuid">;
    title: string & tags.MinLength<1> & tags.MaxLength<100>;
    content: string & tags.MinLength<1> & tags.MaxLength<1000>;
    created_at: string & tags.Format<"date-time">;
  }
}
