import typia from "typia";

interface UserQuery {
  name: string;
  age: number;
}

class UserService {
  // Test the decorator - for now it's just a stub
  @typia.decorators.assertEquals()
  async findMany(query: UserQuery): Promise<UserQuery[]> {
    // Implementation here
    return [query];
  }
}

export const test_decorator_basic = (): void => {
  console.log("Decorators module is available");
  
  // Test that we can instantiate the class with decorator
  const service = new UserService();
  console.log("Service created successfully with decorator");
};