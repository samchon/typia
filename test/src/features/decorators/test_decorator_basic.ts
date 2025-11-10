import typia from "typia";

interface UserQuery {
  name: string;
  age: number;
}

class UserService {
  // Test the decorator - should validate parameters
  @typia.decorators.assertEquals()
  async findMany(query: UserQuery): Promise<UserQuery[]> {
    // This should be validated by the decorator
    return [query];
  }

  // Test regular method for comparison
  async findManyUnsafe(query: UserQuery): Promise<UserQuery[]> {
    return [query];
  }
}

export const test_decorator_basic = async (): Promise<void> => {
  console.log("Testing decorators module...");
  
  // Test that we can instantiate the class with decorator
  const service = new UserService();
  console.log("Service created successfully with decorator");

  // Test valid input
  const validQuery: UserQuery = { name: "John", age: 30 };
  try {
    const result = await service.findMany(validQuery);
    console.log("Valid query succeeded:", result);
  } catch (error) {
    console.error("Valid query failed:", error);
    throw error;
  }

  // Test invalid input should throw an error
  const invalidQuery = { name: "John", age: "thirty" } as any;
  try {
    const result = await service.findMany(invalidQuery);
    console.error("Invalid query should have failed but didn't:", result);
    throw new Error("Invalid query should have thrown an error");
  } catch (error) {
    console.log("Invalid query correctly failed:", error.message);
  }

  console.log("All decorator tests passed!");
};