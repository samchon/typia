import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies llm application against the native typia.llm.application,
 * typia.validate output.
 *
 * The case builds its input in this file and asserts functions count, has
 * getMember, has createMember, has updateMember, has deleteMember, getMember
 * has description.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.application, typia.validate is evaluated by the native host on the types declared in this case and the result is checked by 10 assertions (functions count; has getMember; has createMember; has updateMember; has deleteMember; getMember has description).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (functions count; has getMember; has createMember; has updateMember; has deleteMember; getMember has description) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_llm_application is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_llm_application = (): void => {
  interface IMember {
    id: number;
    name: string;
    email: string;
  }

  interface IGetMemberInput {
    id: number;
  }
  interface ICreateMemberInput {
    name: string;
    email: string;
  }
  interface IUpdateMemberInput {
    id: number;
    name?: string;
    email?: string;
  }
  interface IDeleteMemberInput {
    id: number;
  }

  interface IController {
    /**
     * Get member by ID.
     *
     * @param input Member ID input
     *
     * @returns Member information
     */
    getMember(input: IGetMemberInput): IMember;

    /**
     * Create a new member.
     *
     * @param input Member creation input
     *
     * @returns Created member
     */
    createMember(input: ICreateMemberInput): IMember;

    /**
     * Update member information.
     *
     * @param input Member update input
     *
     * @returns Updated member
     */
    updateMember(input: IUpdateMemberInput): IMember;

    /**
     * Delete a member.
     *
     * @param input Member ID input
     */
    deleteMember(input: IDeleteMemberInput): void;
  }

  const app: ILlmApplication = typia.llm.application<IController>();

  // check functions count
  TestEquality.equals("functions count", app.functions.length, 4);

  // check function names
  const names = app.functions.map((f) => f.name);
  TestValidator.predicate("has getMember", () => names.includes("getMember"));
  TestValidator.predicate("has createMember", () =>
    names.includes("createMember"),
  );
  TestValidator.predicate("has updateMember", () =>
    names.includes("updateMember"),
  );
  TestValidator.predicate("has deleteMember", () =>
    names.includes("deleteMember"),
  );

  // check getMember function
  const getMember = app.functions.find((f) => f.name === "getMember");
  if (getMember) {
    TestValidator.predicate(
      "getMember has description",
      () =>
        getMember.description !== undefined &&
        getMember.description.includes("Get member"),
    );
    TestValidator.predicate(
      "getMember has parameters",
      () => getMember.parameters !== undefined,
    );
  }

  // check createMember function
  const createMember = app.functions.find((f) => f.name === "createMember");
  if (createMember && createMember.parameters) {
    TestValidator.predicate(
      "createMember parameters has properties",
      () => "properties" in createMember.parameters,
    );
  }

  // validate actual data with typia.validate
  const validMember: IMember = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };
  const memberValidation = typia.validate<IMember>(validMember);
  TestEquality.equals("valid member passes", memberValidation.success, true);

  const invalidMember = {
    id: "not-a-number",
    name: 123,
    email: null,
  };
  const invalidValidation = typia.validate<IMember>(invalidMember);
  TestEquality.equals("invalid member fails", invalidValidation.success, false);
};
