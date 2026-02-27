import { OpenApiTypeChecker } from "@typia/utils";
import typia from "typia";

import { TestValidator } from "../../TestValidator";

export const test_json_schemas = (): void => {
  interface IUser {
    id: number;
    name: string;
  }
  interface IPost {
    id: number;
    title: string;
    author: IUser;
  }

  const units = typia.json.schemas<[IUser, IPost]>();

  TestValidator.equals("schemas count", units.schemas.length, 2);

  const [userSchema, postSchema] = units.schemas;
  if (userSchema === undefined) return TestValidator.error("no user schema");
  if (postSchema === undefined) return TestValidator.error("no post schema");

  // Both should be $ref because they are named types
  TestValidator.predicate("user is reference", () =>
    OpenApiTypeChecker.isReference(userSchema),
  );
  TestValidator.predicate("post is reference", () =>
    OpenApiTypeChecker.isReference(postSchema),
  );

  // Check components has both schemas
  const components = units.components;
  const schemas = components.schemas;
  if (schemas === undefined) return TestValidator.error("no components.schemas");

  // Get actual schemas from $ref
  const userRefName = (userSchema as { $ref: string }).$ref.replace(
    "#/components/schemas/",
    "",
  );
  const postRefName = (postSchema as { $ref: string }).$ref.replace(
    "#/components/schemas/",
    "",
  );

  const actualUser = schemas[userRefName];
  const actualPost = schemas[postRefName];

  if (actualUser === undefined) return TestValidator.error("user not in schemas");
  if (actualPost === undefined) return TestValidator.error("post not in schemas");

  TestValidator.predicate("user is object", () =>
    OpenApiTypeChecker.isObject(actualUser),
  );
  TestValidator.predicate("post is object", () =>
    OpenApiTypeChecker.isObject(actualPost),
  );

  // Check user properties
  if (OpenApiTypeChecker.isObject(actualUser)) {
    const props = actualUser.properties;
    if (props === undefined) return TestValidator.error("no user properties");
    TestValidator.predicate("user has id", () => props["id"] !== undefined);
    TestValidator.predicate("user has name", () => props["name"] !== undefined);
  }

  // Check post properties
  if (OpenApiTypeChecker.isObject(actualPost)) {
    const props = actualPost.properties;
    if (props === undefined) return TestValidator.error("no post properties");
    TestValidator.predicate("post has id", () => props["id"] !== undefined);
    TestValidator.predicate("post has title", () => props["title"] !== undefined);
    TestValidator.predicate("post has author", () => props["author"] !== undefined);

    // author should be $ref to IUser
    const author = props["author"];
    if (author !== undefined) {
      TestValidator.predicate("author is reference", () =>
        OpenApiTypeChecker.isReference(author),
      );
    }
  }
};
