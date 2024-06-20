import { OpenApi } from "@samchon/openapi";
import typia, { IJsonApplication } from "typia";

import { TestValidator } from "../../helpers/TestValidator";

export const test_issue_1100_json_description = (): void => {
  const v30 = typia.json.application<[Something], "3.0">();
  const v31 = typia.json.application<[Something], "3.1">();

  validate(v30);
  validate(v31);
};

const validate = (
  app: IJsonApplication.IV3_0 | IJsonApplication.IV3_1,
): void => {
  const something: OpenApi.IJsonSchema.IObject = (app.components.schemas as any)
    .Something;
  const id: OpenApi.IJsonSchema.IString = something.properties
    ?.id as OpenApi.IJsonSchema.IString;
  const name: OpenApi.IJsonSchema.IString = something.properties
    ?.name as OpenApi.IJsonSchema.IString;
  const description: OpenApi.IJsonSchema.IString = something.properties
    ?.description as OpenApi.IJsonSchema.IString;

  TestValidator.equals("Something.description")({
    title: something.title,
    description: something.description,
  })({
    title: "Something DTO",
    description: [
      "This is a description of the Something DTO.",
      "Let's fill the content of it.",
    ].join("\n\n"),
  });
  TestValidator.equals("Something.properties.id")({
    title: id.title,
    description: id.description,
  })({
    title: "This is the title",
    description: ["This is the title.", "This is the description."].join(
      "\n\n",
    ),
  });
  TestValidator.equals("Something.properties.name")({
    title: name.title,
    description: name.description,
  })({
    title: "Name",
    description: "This is the description of the name",
  });
  TestValidator.equals("Something.properties.description")({
    title: description.title,
    description: description.description,
  })({
    title: undefined,
    description: ["No title.", "Only description."].join("\n\n"),
  });
};

/**
 * @title Something DTO
 * @description This is a description of the Something DTO.
 *
 *              Let's fill the content of it.
 * @author Samchon
 */
interface Something {
  /**
   * This is the title.
   *
   * This is the description.
   */
  id: string;

  /**
   * This is not the description.
   *
   * @title Name
   * @description This is the description of the name
   */
  name: string;

  /**
   * @description No title.
   *
   *              Only description.
   */
  description: string;
}
