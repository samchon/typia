import typia from "typia";

class User {
  /** @format uuid */
  id!: string;

  /** @minLength 3 */
  name!: string;

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

// Plain data with no prototype (e.g. the result of JSON.parse).
const plain = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  name: "Samchon",
};

// Reconstruct a real User instance — its prototype and methods are restored,
// after validating that `plain` matches User.
const user: User = typia.plain.assertClassify<User>(plain);

console.log(user instanceof User, user.greet());
