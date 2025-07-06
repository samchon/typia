import { RandomGenerator } from "./RandomGenerator";
import { json_equal_to } from "./internal/json_equal_to";

/**
 * A comprehensive test validation namespace for End-to-End (E2E) testing.
 *
 * `TestValidator` provides a collection of validation functions designed for robust E2E testing,
 * including condition validation, equality testing, error handling, HTTP error validation,
 * and specialized validators for pagination APIs with search and sorting capabilities.
 *
 * All functions are implemented using currying pattern to enhance composability and reusability
 * in test scenarios. The namespace is particularly useful for API testing, data validation,
 * and ensuring consistent behavior across different test cases.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @namespace TestValidator
 * @example
 * ```typescript
 * // Basic condition testing
 * TestValidator.predicate("User validation")(user.isValid());
 *
 * // Equality testing with custom exception handling
 * TestValidator.equals("API Response", key => key === 'timestamp')(expected)(actual);
 *
 * // Error validation
 * TestValidator.error("Invalid input")(() => parseInvalidJson());
 * ```
 */
export namespace TestValidator {
  /**
   * Validates that a given condition is satisfied, supporting both synchronous and asynchronous conditions.
   *
   * This function can handle three types of conditions:
   * - Boolean values (synchronous)
   * - Functions returning boolean values (synchronous)
   * - Functions returning Promise<boolean> (asynchronous)
   *
   * The return type is conditionally typed based on the input condition type,
   * ensuring type safety across different usage scenarios.
   *
   * @template T - The type of the condition, constrained to boolean, function returning boolean, or function returning Promise<boolean>
   * @param title - The title used in error messages when the condition fails
   * @returns A curried function that takes a condition and validates it
   * @throws {Error} When the condition is not satisfied
   *
   * @example
   * ```typescript
   * // Synchronous boolean validation
   * TestValidator.predicate("User age validation")(user.age >= 18);
   *
   * // Synchronous function validation
   * TestValidator.predicate("Data consistency")(() => data.length > 0);
   *
   * // Asynchronous validation
   * await TestValidator.predicate("Database connection")(async () => {
   *   const isConnected = await database.ping();
   *   return isConnected;
   * });
   *
   * // Usage in test suites
   * describe("User Service", () => {
   *   it("should validate user permissions", () => {
   *     TestValidator.predicate("Admin permissions")(user.hasAdminRole());
   *   });
   * });
   * ```
   */
  export const predicate =
    (title: string) =>
    <T extends boolean | (() => boolean) | (() => Promise<boolean>)>(
      condition: T,
    ): T extends () => Promise<boolean> ? Promise<void> : void => {
      const message = () =>
        `Bug on ${title}: expected condition is not satisfied.`;

      // SCALAR
      if (typeof condition === "boolean") {
        if (condition !== true) throw new Error(message());
        return undefined as any;
      }

      // CLOSURE
      const output: boolean | Promise<boolean> = condition();
      if (typeof output === "boolean") {
        if (output !== true) throw new Error(message());
        return undefined as any;
      }

      // ASYNCHRONOUS
      return new Promise<void>((resolve, reject) => {
        output
          .then((flag) => {
            if (flag === true) resolve();
            else reject(message());
          })
          .catch(reject);
      }) as any;
    };

  /**
   * Validates deep equality between two values using JSON-based comparison with optional key exclusions.
   *
   * This function performs a comprehensive deep equality check, comparing all properties
   * and nested structures of the provided values. It supports excluding specific keys
   * from comparison, which is useful when dealing with timestamps, IDs, or other
   * dynamic values that should be ignored during testing.
   *
   * The function is particularly useful for validating API responses, data transformations,
   * and ensuring data integrity across different operations. When values differ,
   * it provides detailed error information including the specific differing keys
   * and the complete object structures for debugging.
   *
   * @template T - The type of values being compared
   * @param title - The title used in error messages when values are different
   * @param exception - Optional function to exclude specific keys from comparison (defaults to excluding no keys)
   * @returns A curried function that first takes the expected value, then the actual value
   * @throws {Error} When the values are not equal, including details about the differences
   *
   * @example
   * ```typescript
   * // Basic equality validation
   * const expected = { id: 1, name: "John", age: 30 };
   * const actual = { id: 1, name: "John", age: 30 };
   * TestValidator.equals("User data")(expected)(actual); // Passes
   *
   * // Validation with timestamp exclusion
   * const expectedUser = { id: 1, name: "John", createdAt: "2023-01-01" };
   * const actualUser = { id: 1, name: "John", createdAt: "2023-01-02" };
   * TestValidator.equals("User data", key => key === 'createdAt')(expectedUser)(actualUser); // Passes
   *
   * // API response validation
   * const expectedResponse = { data: [1, 2, 3], status: "success" };
   * const actualResponse = await api.functional.getData();
   * TestValidator.equals("API response")(expectedResponse)(actualResponse);
   *
   * // Nested object validation
   * const expectedOrder = {
   *   id: 123,
   *   items: [{ id: 1, name: "Item 1" }, { id: 2, name: "Item 2" }],
   *   customer: { id: 456, name: "Customer Name" }
   * };
   * TestValidator.equals("Order structure")(expectedOrder)(actualOrder);
   *
   * // Validation with multiple key exclusions
   * TestValidator.equals("User comparison", key =>
   *   ['createdAt', 'updatedAt', 'lastLogin'].includes(key)
   * )(expectedUser)(actualUser);
   * ```
   */
  export const equals =
    (title: string, exception: (key: string) => boolean = () => false) =>
    <T>(x: T) =>
    (y: T) => {
      const diff: string[] = json_equal_to(exception)(x)(y);
      if (diff.length)
        throw new Error(
          [
            `Bug on ${title}: found different values - [${diff.join(", ")}]:`,
            "\n",
            JSON.stringify({ x, y }, null, 2),
          ].join("\n"),
        );
    };

  /**
   * Validates that two values are NOT equal using JSON-based comparison with optional key exclusions.
   *
   * This function performs the inverse of the `equals` validator, ensuring that two values
   * are different in at least one property. It uses the same deep comparison logic as `equals`
   * but expects the values to differ. This is particularly useful for testing that operations
   * actually modify data, that different configurations produce different results, or that
   * transformations work as expected.
   *
   * Like the `equals` function, it supports excluding specific keys from comparison,
   * which is useful when you want to ignore timestamps, IDs, or other dynamic values
   * while ensuring that the meaningful data is actually different.
   *
   * @template T - The type of values being compared
   * @param title - The title used in error messages when values are unexpectedly equal
   * @param exception - Optional function to exclude specific keys from comparison (defaults to excluding no keys)
   * @returns A curried function that first takes the first value, then the second value
   * @throws {Error} When the values are equal (opposite of equals validator)
   *
   * @example
   * ```typescript
   * // Ensure data transformation actually changes values
   * const originalData = { id: 1, name: "John", status: "pending" };
   * const processedData = await processUserData(originalData);
   * TestValidator.notEquals("Data processing")(originalData)(processedData);
   *
   * // Verify different configurations produce different results
   * const config1 = { cacheEnabled: true, timeout: 5000 };
   * const config2 = { cacheEnabled: false, timeout: 5000 };
   * const result1 = await api.functional.getData(config1);
   * const result2 = await api.functional.getData(config2);
   * TestValidator.notEquals("Configuration impact")(result1)(result2);
   *
   * // Ensure user updates actually modify the user object
   * const userBeforeUpdate = await api.functional.getUser(123);
   * await api.functional.updateUser(123, { name: "Jane Doe" });
   * const userAfterUpdate = await api.functional.getUser(123);
   * TestValidator.notEquals("User update", key => key === 'updatedAt')(
   *   userBeforeUpdate
   * )(userAfterUpdate);
   *
   * // Verify different API versions return different response structures
   * const v1Response = await api.functional.v1.getData();
   * const v2Response = await api.functional.v2.getData();
   * TestValidator.notEquals("API version differences")(v1Response)(v2Response);
   *
   * // Test that encryption produces different output for same input with different keys
   * const data = "sensitive information";
   * const encrypted1 = encrypt(data, "key1");
   * const encrypted2 = encrypt(data, "key2");
   * TestValidator.notEquals("Encryption key differences")(encrypted1)(encrypted2);
   *
   * // Ensure different user roles have different permissions
   * const adminPermissions = await getPermissions("admin");
   * const userPermissions = await getPermissions("user");
   * TestValidator.notEquals("Role-based permissions")(adminPermissions)(userPermissions);
   *
   * // Verify A/B test variants produce different experiences
   * const variantA = await getExperience("variant_a");
   * const variantB = await getExperience("variant_b");
   * TestValidator.notEquals("A/B test variants", key =>
   *   ['sessionId', 'timestamp'].includes(key)
   * )(variantA)(variantB);
   * ```
   */
  export const notEquals =
    (title: string, exception: (key: string) => boolean = () => false) =>
    <T>(x: T) =>
    (y: T) => {
      const diff: string[] = json_equal_to(exception)(x)(y);
      if (diff.length === 0)
        throw new Error(
          [
            `Bug on ${title}: values are unexpectedly equal when they should be different:`,
            "\n",
            JSON.stringify({ x, y }, null, 2),
          ].join("\n"),
        );
    };

  /**
   * Validates that a specific error or exception is thrown during task execution.
   *
   * This function is essential for negative testing scenarios where you need to ensure
   * that invalid inputs, edge cases, or error conditions properly trigger exceptions.
   * It supports both synchronous and asynchronous tasks, automatically detecting
   * the task type and handling Promise-based errors appropriately.
   *
   * If the task executes without throwing an error, this validator will throw an exception,
   * ensuring that your error handling logic is working correctly.
   *
   * @template T - The return type of the task function
   * @param title - The title used in error messages when no exception is thrown
   * @returns A curried function that takes a task and validates that it throws an error
   * @throws {Error} When the task does not throw an exception as expected
   *
   * @example
   * ```typescript
   * // Synchronous error validation
   * TestValidator.error("Invalid JSON parsing")(() => {
   *   JSON.parse("invalid json string");
   * });
   *
   * // Asynchronous error validation
   * await TestValidator.error("Database connection failure")(async () => {
   *   await database.connect("invalid://connection/string");
   * });
   *
   * // API error validation
   * await TestValidator.error("Unauthorized access")(async () => {
   *   await api.functional.functional.deleteUser(userId, { token: "invalid_token" });
   * });
   *
   * // Input validation testing
   * TestValidator.error("Negative age validation")(() => {
   *   new User({ name: "John", age: -5 }); // Should throw validation error
   * });
   *
   * // File operation error testing
   * await TestValidator.error("File not found")(async () => {
   *   await fs.readFile("nonexistent-file.txt");
   * });
   *
   * // Business logic error validation
   * TestValidator.error("Insufficient funds")(() => {
   *   account.withdraw(1000000); // Should throw insufficient funds error
   * });
   * ```
   */
  export const error =
    (title: string) =>
    <T>(task: () => T): T extends Promise<any> ? Promise<void> : void => {
      const message = () => `Bug on ${title}: exception must be thrown.`;
      try {
        const output: T = task();
        if (is_promise(output))
          return new Promise<void>((resolve, reject) =>
            output.catch(() => resolve()).then(() => reject(message())),
          ) as any;
        else throw new Error(message());
      } catch {
        return undefined as any;
      }
    };

  /**
   * Validates that an HTTP operation throws an error with specific status codes.
   *
   * This specialized validator is designed for testing HTTP APIs and ensuring that
   * they return appropriate error status codes for various scenarios. It specifically
   * looks for HttpError objects and validates that their status codes match the expected values.
   *
   * This function is particularly useful for testing RESTful APIs, authentication flows,
   * authorization checks, and other HTTP-based error scenarios where specific status codes
   * are expected (e.g., 400 for bad requests, 401 for unauthorized, 404 for not found, etc.).
   *
   * @param title - The title used in error messages when validation fails
   * @returns A curried function that first takes expected status codes, then a task function
   * @throws {Error} When the task doesn't throw an HttpError or throws an error with unexpected status code
   *
   * @example
   * ```typescript
   * // Single status code validation
   * await TestValidator.httpError("Unauthorized access")(401)(async () => {
   *   await api.functional.getProtectedResource({ token: "invalid_token" });
   * });
   *
   * // Multiple acceptable status codes
   * await TestValidator.httpError("Client error")(400, 422)(async () => {
   *   await api.functional.createUser({ email: "invalid-email" }); // Could be 400 or 422
   * });
   *
   * // Authentication testing
   * await TestValidator.httpError("Missing authentication")(401)(async () => {
   *   await api.functional.deleteUser(123); // No auth token provided
   * });
   *
   * // Authorization testing
   * await TestValidator.httpError("Forbidden action")(403)(async () => {
   *   await api.functional.deleteUser(123, { token: "user_token" }); // User can't delete others
   * });
   *
   * // Resource not found testing
   * await TestValidator.httpError("User not found")(404)(async () => {
   *   await api.functional.getUser(999999); // Non-existent user ID
   * });
   *
   * // Bad request validation
   * await TestValidator.httpError("Invalid input")(400)(async () => {
   *   await api.functional.updateUser(123, { age: "not a number" });
   * });
   *
   * // Rate limiting testing
   * await TestValidator.httpError("Rate limit exceeded")(429)(async () => {
   *   // Make too many requests
   *   for (let i = 0; i < 1000; i++) {
   *     await api.functional.getData();
   *   }
   * });
   * ```
   */
  export const httpError =
    (title: string) =>
    (...statuses: number[]) =>
    <T>(task: () => T): T extends Promise<any> ? Promise<void> : void => {
      const message = (actual?: number) =>
        typeof actual === "number"
          ? `Bug on ${title}: status code must be ${statuses.join(
              " or ",
            )}, but ${actual}.`
          : `Bug on ${title}: status code must be ${statuses.join(
              " or ",
            )}, but succeeded.`;
      const predicate = (exp: any): Error | null =>
        typeof exp === "object" &&
        exp.constructor.name === "HttpError" &&
        statuses.some((val) => val === exp.status)
          ? null
          : new Error(
              message(
                typeof exp === "object" && exp.constructor.name === "HttpError"
                  ? exp.status
                  : undefined,
              ),
            );
      try {
        const output: T = task();
        if (is_promise(output))
          return new Promise<void>((resolve, reject) =>
            output
              .catch((exp) => {
                const res: Error | null = predicate(exp);
                if (res) reject(res);
                else resolve();
              })
              .then(() => reject(new Error(message()))),
          ) as any;
        else throw new Error(message());
      } catch (exp) {
        const res: Error | null = predicate(exp);
        if (res) throw res;
        return undefined!;
      }
    };

  /**
   * Safely executes a task and returns any error that occurs without throwing.
   *
   * This utility function is useful for testing error conditions or for scenarios
   * where you want to handle errors gracefully without using try-catch blocks.
   * It supports both synchronous and asynchronous operations, automatically
   * detecting the operation type and returning the appropriate result.
   *
   * The function returns null if the task executes successfully, or the Error object
   * if an exception occurs. This allows for fine-grained error inspection and testing.
   *
   * @param task - The task function to execute safely
   * @returns For async tasks: Promise<Error | null>, for sync tasks: Error | null
   *
   * @example
   * ```typescript
   * // Synchronous error handling
   * const error = TestValidator.proceed(() => {
   *   return JSON.parse("invalid json");
   * });
   * if (error) {
   *   console.log("Parsing failed:", error.message);
   * }
   *
   * // Asynchronous error handling
   * const asyncError = await TestValidator.proceed(async () => {
   *   return await fetch("https://invalid-url");
   * });
   * if (asyncError) {
   *   console.log("Network error:", asyncError.message);
   * }
   *
   * // Testing multiple operations
   * const operations = [
   *   () => validateEmail("invalid-email"),
   *   () => parseDate("invalid-date"),
   *   () => calculateAge(-5)
   * ];
   *
   * for (const op of operations) {
   *   const error = TestValidator.proceed(op);
   *   if (error) {
   *     console.log("Operation failed:", error.message);
   *   } else {
   *     console.log("Operation succeeded");
   *   }
   * }
   *
   * // API testing with graceful error handling
   * const apiError = await TestValidator.proceed(async () => {
   *   const response = await api.functional.createUser({ email: "test@example.com" });
   *   return response.data;
   * });
   *
   * if (apiError) {
   *   console.log("API call failed:", apiError.message);
   * } else {
   *   console.log("User created successfully");
   * }
   * ```
   */
  export function proceed(task: () => Promise<any>): Promise<Error | null>;
  export function proceed(task: () => any): Error | null;
  export function proceed(
    task: () => any,
  ): Promise<Error | null> | (Error | null) {
    try {
      const output: any = task();
      if (is_promise(output))
        return new Promise<Error | null>((resolve) =>
          output
            .catch((exp) => resolve(exp as Error))
            .then(() => resolve(null)),
        );
    } catch (exp) {
      return exp as Error;
    }
    return null;
  }

  /**
   * Validates that pagination API results match expected indexed data.
   *
   * This function is specifically designed for testing pagination APIs that return
   * indexed results. It compares the order and content of paginated results against
   * manually aggregated or expected data, ensuring that pagination logic works correctly.
   *
   * The validator works with entities that have an `id` field and compares the IDs
   * of the expected results with the actual paginated results. It's particularly useful
   * for testing database queries, search results, and any API that returns ordered data.
   *
   * The function takes into account the minimum length between expected and actual results,
   * making it robust for testing scenarios where result counts might vary slightly.
   *
   * @template Solution - Type of expected entities, must extend IEntity
   * @template Summary - Type of actual returned entities, must extend IEntity
   * @param title - The title used in error messages when validation fails
   * @returns A curried function for validating indexed results
   * @throws {Error} When the indexed results don't match expected order
   *
   * @example
   * ```typescript
   * // Basic pagination validation
   * const expectedArticles = await database.articles.findMany({
   *   orderBy: { createdAt: 'desc' },
   *   take: 10
   * });
   * const apiResults = await api.functional.getArticles({ page: 1, limit: 10 });
   *
   * TestValidator.index("Article pagination")(expectedArticles)(apiResults);
   *
   * // Search result validation
   * const expectedUsers = await database.users.findMany({
   *   where: { name: { contains: "john" } },
   *   orderBy: { id: 'asc' }
   * });
   * const searchResults = await api.functional.searchUsers({ query: "john" });
   *
   * TestValidator.index("User search results")(expectedUsers)(searchResults);
   *
   * // With debugging enabled
   * TestValidator.index("Product listing")(expectedProducts)(apiProducts, true);
   *
   * // Integration test example
   * describe("Article API", () => {
   *   it("should return articles in correct order", async () => {
   *     const manualResults = await getArticlesManually();
   *     const apiResults = await api.functional.getArticles();
   *
   *     TestValidator.index("Article order validation")(manualResults)(apiResults);
   *   });
   * });
   * ```
   *
   * @see {@link https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_search.ts} Example usage
   */
  export const index =
    (title: string) =>
    <Solution extends IEntity<any>>(expected: Solution[]) =>
    <Summary extends IEntity<any>>(
      gotten: Summary[],
      trace: boolean = false,
    ): void => {
      const length: number = Math.min(expected.length, gotten.length);
      expected = expected.slice(0, length);
      gotten = gotten.slice(0, length);

      const xIds: string[] = get_ids(expected).slice(0, length);
      const yIds: string[] = get_ids(gotten)
        .filter((id) => id >= xIds[0]!)
        .slice(0, length);

      const equals: boolean = xIds.every((x, i) => x === yIds[i]);
      if (equals === true) return;
      else if (trace === true)
        console.log({
          expected: xIds,
          gotten: yIds,
        });
      throw new Error(
        `Bug on ${title}: result of the index is different with manual aggregation.`,
      );
    };

  /**
   * Validates search functionality of pagination APIs with comprehensive testing.
   *
   * This sophisticated validator tests pagination APIs that support search options by
   * performing random sampling and comprehensive validation. It takes a total dataset,
   * randomly samples entities from it, extracts search values, filters the dataset manually,
   * calls the API with those search parameters, and validates that the API results match
   * the manual filtering results.
   *
   * This approach ensures that search functionality works correctly across different
   * search parameters and edge cases, providing robust validation for complex search APIs.
   * The random sampling approach helps discover edge cases that might not be covered
   * by deterministic tests.
   *
   * @template Entity - Type of entities being searched, must extend IEntity
   * @template Request - Type of the search request object
   * @param title - The title used in error messages when validation fails
   * @returns A complex curried function for comprehensive search validation
   * @throws {Error} When search results don't match expected filtered results
   *
   * @example
   * ```typescript
   * // Article search validation
   * const allArticles = await database.articles.findMany();
   * const searchValidator = TestValidator.search("Article search")(
   *   (req: ArticleSearchRequest) => api.searchArticles(req)
   * )(allArticles, 3); // Test with 3 random samples
   *
   * await searchValidator({
   *   fields: ["title", "content"],
   *   values: (article) => [article.title, article.content],
   *   filter: (article, [title, content]) =>
   *     article.title.includes(title) && article.content.includes(content),
   *   request: ([title, content]) => ({ title, content })
   * });
   *
   * // User search by multiple criteria
   * const allUsers = await database.users.findMany();
   * const userSearchValidator = TestValidator.search("User search")(
   *   (req: UserSearchRequest) => api.searchUsers(req)
   * )(allUsers, 5);
   *
   * await userSearchValidator({
   *   fields: ["name", "email", "role"],
   *   values: (user) => [user.name, user.email, user.role],
   *   filter: (user, [name, email, role]) =>
   *     user.name.toLowerCase().includes(name.toLowerCase()) &&
   *     user.email.includes(email) &&
   *     user.role === role,
   *   request: ([name, email, role]) => ({
   *     name_contains: name,
   *     email_contains: email,
   *     role_equals: role
   *   })
   * });
   *
   * // Product search with price range
   * const allProducts = await database.products.findMany();
   * const productSearchValidator = TestValidator.search("Product search")(
   *   (req: ProductSearchRequest) => api.searchProducts(req)
   * )(allProducts, 2);
   *
   * await productSearchValidator({
   *   fields: ["category", "minPrice", "maxPrice"],
   *   values: (product) => [product.category, product.price * 0.8, product.price * 1.2],
   *   filter: (product, [category, minPrice, maxPrice]) =>
   *     product.category === category &&
   *     product.price >= minPrice &&
   *     product.price <= maxPrice,
   *   request: ([category, minPrice, maxPrice]) => ({
   *     category,
   *     price_gte: minPrice,
   *     price_lte: maxPrice
   *   })
   * });
   * ```
   *
   * @see {@link https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_search.ts} Example usage
   */
  export const search =
    (title: string) =>
    /**
     * @param getter A pagination API function to be called
     */
    <Entity extends IEntity<any>, Request>(
      getter: (input: Request) => Promise<Entity[]>,
    ) =>
    /**
     * @param total Total entity records for comparison
     * @param sampleCount Sampling count. Default is 1
     */
    (total: Entity[], sampleCount: number = 1) =>
    /**
     * @param props Search properties
     */
    async <Values extends any[]>(
      props: ISearchProps<Entity, Values, Request>,
    ): Promise<void> => {
      const samples: Entity[] = RandomGenerator.sample(total)(sampleCount);
      for (const s of samples) {
        const values: Values = props.values(s);
        const filtered: Entity[] = total.filter((entity) =>
          props.filter(entity, values),
        );
        const gotten: Entity[] = await getter(props.request(values));

        TestValidator.index(`${title} (${props.fields.join(", ")})`)(filtered)(
          gotten,
        );
      }
    };

  /**
   * Interface defining the structure for search validation properties.
   *
   * This interface is used by the search validator to define how search operations
   * should be tested. It provides a structured way to specify field names,
   * value extraction, filtering logic, and request transformation.
   *
   * @template Entity - Type of entities being searched
   * @template Values - Tuple type representing the search values
   * @template Request - Type of the search request object
   */
  export interface ISearchProps<
    Entity extends IEntity<any>,
    Values extends any[],
    Request,
  > {
    /** Array of field names being searched (used for error reporting) */
    fields: string[];
    /** Function to extract search values from an entity */
    values(entity: Entity): Values;
    /** Function to manually filter entities based on search values */
    filter(entity: Entity, values: Values): boolean;
    /** Function to transform search values into API request format */
    request(values: Values): Request;
  }

  /**
   * Validates sorting functionality of pagination APIs with comprehensive testing.
   *
   * This advanced validator tests pagination APIs that support sorting options across
   * multiple fields and directions (ascending/descending). It validates that the API
   * correctly sorts data according to the specified criteria by comparing the results
   * with a provided comparator function.
   *
   * The function supports complex sorting scenarios including multi-field sorting,
   * custom comparators, optional filtering, and debugging capabilities. It's designed
   * to handle real-world sorting requirements where multiple fields may be involved
   * and data needs to be filtered before sorting validation.
   *
   * @template T - Type of objects being sorted
   * @template Fields - Union type of field names that can be sorted
   * @template Sortable - Array type of sorting specifications with + or - prefixes
   * @param title - The title used in error messages when validation fails
   * @returns A complex curried function for comprehensive sort validation
   * @throws {Error} When sorting results don't match expected order
   *
   * @example
   * ```typescript
   * // Basic single field sorting
   * const articleSortValidator = TestValidator.sort("Article sorting")(
   *   (sortable: Array<'+createdAt' | '-createdAt'>) => api.getArticles({ sort: sortable })
   * )('createdAt')(
   *   (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
   * );
   *
   * await articleSortValidator('+'); // Test ascending order
   * await articleSortValidator('-'); // Test descending order
   *
   * // Multi-field sorting with filtering
   * const userSortValidator = TestValidator.sort("User sorting")(
   *   (sortable: Array<'+name' | '-name' | '+age' | '-age'>) =>
   *     api.getUsers({ sort: sortable })
   * )('name', 'age')(
   *   (a, b) => a.name.localeCompare(b.name) || a.age - b.age,
   *   user => user.isActive // Only validate active users
   * );
   *
   * await userSortValidator('+', true); // Test ascending with debug output
   *
   * // Product sorting by price with complex comparator
   * const productSortValidator = TestValidator.sort("Product sorting")(
   *   (sortable: Array<'+price' | '-price' | '+rating' | '-rating'>) =>
   *     api.getProducts({ sort: sortable })
   * )('price', 'rating')(
   *   (a, b) => {
   *     const priceDiff = a.price - b.price;
   *     if (priceDiff !== 0) return priceDiff;
   *     return b.rating - a.rating; // Higher rating first for same price
   *   }
   * );
   *
   * await productSortValidator('+'); // Test ascending by price, then rating
   *
   * // Custom entity sorting
   * interface Order {
   *   id: number;
   *   total: number;
   *   status: 'pending' | 'completed' | 'cancelled';
   *   createdAt: Date;
   * }
   *
   * const orderSortValidator = TestValidator.sort("Order sorting")(
   *   (sortable: Array<'+total' | '-total' | '+createdAt' | '-createdAt'>) =>
   *     api.getOrders({ sort: sortable })
   * )('total', 'createdAt')(
   *   (a, b) => {
   *     const totalDiff = a.total - b.total;
   *     if (totalDiff !== 0) return totalDiff;
   *     return a.createdAt.getTime() - b.createdAt.getTime();
   *   },
   *   order => order.status !== 'cancelled' // Exclude cancelled orders
   * );
   *
   * await orderSortValidator('+', false); // Test without debug output
   * ```
   *
   * @see {@link https://github.com/samchon/nestia-template/blob/master/src/test/features/api/bbs/test_api_bbs_article_index_sort.ts} Example usage
   */
  export const sort =
    (title: string) =>
    /**
     * @param getter A pagination API function to be called
     */
    <
      T extends object,
      Fields extends string,
      Sortable extends Array<`-${Fields}` | `+${Fields}`> = Array<
        `-${Fields}` | `+${Fields}`
      >,
    >(
      getter: (sortable: Sortable) => Promise<T[]>,
    ) =>
    /**
     * @param fields List of fields to be sorted
     */
    (...fields: Fields[]) =>
    /**
     * @param comp Comparator function for validation
     * @param filter Filter function for data if required
     */
    (comp: (x: T, y: T) => number, filter?: (elem: T) => boolean) =>
    /**
     * @param direction "+" means ascending order, and "-" means descending order
     */
    async (direction: "+" | "-", trace: boolean = false) => {
      let data: T[] = await getter(
        fields.map((field) => `${direction}${field}` as const) as Sortable,
      );
      if (filter) data = data.filter(filter);

      const reversed: typeof comp =
        direction === "+" ? comp : (x, y) => comp(y, x);
      if (is_sorted(data, reversed) === false) {
        if (
          fields.length === 1 &&
          data.length &&
          (data as any)[0][fields[0]] !== undefined &&
          trace
        )
          console.log(data.map((elem) => (elem as any)[fields[0]]));
        throw new Error(
          `Bug on ${title}: wrong sorting on ${direction}(${fields.join(
            ", ",
          )}).`,
        );
      }
    };

  /**
   * Type alias for sortable field specifications.
   *
   * Represents an array of sorting specifications where each field can be prefixed with
   * either '+' for ascending order or '-' for descending order.
   *
   * @template Literal - The string literal type representing field names
   */
  export type Sortable<Literal extends string> = Array<
    `-${Literal}` | `+${Literal}`
  >;
}

/**
 * Interface representing an entity with an ID field.
 *
 * This interface is used throughout the TestValidator namespace to ensure
 * that entities being validated have the required id property for comparison
 * and ordering operations.
 *
 * @template Type - The type of the ID field (string, number, or bigint)
 */
interface IEntity<Type extends string | number | bigint> {
  id: Type;
}

/**
 * Extracts and sorts IDs from an array of entities.
 *
 * This utility function is used internally by validation functions to extract
 * ID values from entities and sort them for comparison purposes.
 *
 * @template Entity - Type of entities that extend IEntity
 * @param entities - Array of entities to extract IDs from
 * @returns Sorted array of string representations of the IDs
 */
function get_ids<Entity extends IEntity<any>>(entities: Entity[]): string[] {
  return entities.map((entity) => entity.id).sort((x, y) => (x < y ? -1 : 1));
}

/**
 * Checks if a value is a Promise object.
 *
 * This utility function determines whether a given value is a Promise by checking
 * for the presence of 'then' and 'catch' methods, which are characteristic of
 * Promise objects.
 *
 * @param input - The value to check
 * @returns True if the input is a Promise, false otherwise
 */
function is_promise(input: any): input is Promise<any> {
  return (
    typeof input === "object" &&
    input !== null &&
    typeof (input as any).then === "function" &&
    typeof (input as any).catch === "function"
  );
}

/**
 * Checks if an array is sorted according to a given comparator function.
 *
 * This utility function validates that an array is properly sorted by checking
 * each adjacent pair of elements using the provided comparator function.
 *
 * @template T - Type of elements in the array
 * @param data - The array to check for sorting
 * @param comp - Comparator function that returns negative, zero, or positive number
 * @returns True if the array is sorted according to the comparator, false otherwise
 */
function is_sorted<T>(data: T[], comp: (x: T, y: T) => number): boolean {
  for (let i: number = 1; i < data.length; ++i)
    if (comp(data[i - 1]!, data[i]!) > 0) return false;
  return true;
}
