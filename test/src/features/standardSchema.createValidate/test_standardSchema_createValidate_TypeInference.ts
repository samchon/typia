import typia from "typia";
import { StandardSchemaV1 } from "@standard-schema/spec";

/**
 * Test that StandardSchema properly infers Input and Output types for createValidate
 */
export const test_standardSchema_createValidate_TypeInference = (): void => {
  interface Post {
    slug: string;
    title: string;
    content: string;
  }

  const postSchema = typia.createValidate<Post>();

  // Test 1: Verify the schema works at runtime
  const validPost = {
    slug: "test-post",
    title: "Test Post",
    content: "This is a test post",
  };

  const validationResult = postSchema["~standard"].validate(validPost);
  if (!("value" in validationResult)) {
    throw new Error("Valid post should pass validation");
  }
  if (validationResult.value !== validPost) {
    throw new Error("Validated value should be the same as input");
  }

  // Test 2: Verify invalid input is rejected
  const invalidPost = {
    slug: "test-post",
    title: 123, // Invalid: should be string
    content: "This is a test post",
  };

  const invalidResult = postSchema["~standard"].validate(invalidPost);
  if (!("issues" in invalidResult)) {
    throw new Error("Invalid post should fail validation");
  }
  if (!invalidResult.issues || invalidResult.issues.length === 0) {
    throw new Error("Invalid post should have validation issues");
  }

  // Test 3: Type inference checks (compile-time only, but included for documentation)
  // These type assertions verify that Input and Output are both Post
  type InferredInput = StandardSchemaV1.InferInput<typeof postSchema>;
  type InferredOutput = StandardSchemaV1.InferOutput<typeof postSchema>;

  // These should compile without errors after the fix:
  // InferredInput should be Post, not unknown
  const inputTest: InferredInput = validPost;
  const outputTest: InferredOutput = validPost;

  // Verify the types are assignable
  const _inputCheck: Post = inputTest;
  const _outputCheck: Post = outputTest;

  // Use the variables to avoid unused variable errors
  void _inputCheck;
  void _outputCheck;
};
