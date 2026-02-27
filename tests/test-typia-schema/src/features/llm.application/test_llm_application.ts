import { TestValidator } from "@nestia/e2e";
import { ILlmApplication } from "@typia/interface";
import typia from "typia";

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
     * @param input Member ID input
     * @returns Member information
     */
    getMember(input: IGetMemberInput): IMember;

    /**
     * Create a new member.
     * @param input Member creation input
     * @returns Created member
     */
    createMember(input: ICreateMemberInput): IMember;

    /**
     * Update member information.
     * @param input Member update input
     * @returns Updated member
     */
    updateMember(input: IUpdateMemberInput): IMember;

    /**
     * Delete a member.
     * @param input Member ID input
     */
    deleteMember(input: IDeleteMemberInput): void;
  }

  const app: ILlmApplication = typia.llm.application<IController>();

  // check functions count
  TestValidator.equals("functions count", app.functions.length, 4);

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
    TestValidator.predicate("getMember has description", () =>
      getMember.description !== undefined &&
      getMember.description.includes("Get member"),
    );
    TestValidator.predicate("getMember has parameters", () =>
      getMember.parameters !== undefined,
    );
  }

  // check createMember function
  const createMember = app.functions.find((f) => f.name === "createMember");
  if (createMember && createMember.parameters) {
    TestValidator.predicate("createMember parameters has properties", () =>
      "properties" in createMember.parameters,
    );
  }

  // validate actual data with typia.validate
  const validMember: IMember = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };
  const memberValidation = typia.validate<IMember>(validMember);
  TestValidator.equals("valid member passes", memberValidation.success, true);

  const invalidMember = {
    id: "not-a-number",
    name: 123,
    email: null,
  };
  const invalidValidation = typia.validate<IMember>(invalidMember);
  TestValidator.equals("invalid member fails", invalidValidation.success, false);
};
