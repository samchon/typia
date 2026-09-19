import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_truncation_object_systematic =
  (): void => {
    // Full valid object: {"name": "John", "age": 30}
    // Test truncation at every meaningful position

    // 1. Just opening brace
    const r1 = LlmJson.parse("{");
    TestEquality.equals("t1-success", r1.success, true);
    if (r1.success) TestEquality.equals("t1-data", r1.data, {});

    // 2. Opening brace + opening quote
    const r2 = LlmJson.parse('{"');
    TestEquality.equals("t2-success", r2.success, true);
    if (r2.success) TestEquality.equals("t2-data", r2.data, {});

    // 3. Partial key
    const r3 = LlmJson.parse('{"na');
    TestEquality.equals("t3-success", r3.success, true);
    if (r3.success) TestEquality.equals("t3-data", r3.data, {});

    // 4. Complete key, no closing quote
    const r4 = LlmJson.parse('{"name');
    TestEquality.equals("t4-success", r4.success, true);
    if (r4.success) TestEquality.equals("t4-data", r4.data, {});

    // 5. Complete key with closing quote
    const r5 = LlmJson.parse('{"name"');
    TestEquality.equals("t5-success", r5.success, true);
    if (r5.success) TestEquality.equals("t5-data", r5.data, {});

    // 6. Key + colon
    const r6 = LlmJson.parse('{"name":');
    TestEquality.equals("t6-success", r6.success, true);
    if (r6.success) TestEquality.equals("t6-data", r6.data, {});

    // 7. Key + colon + space
    const r7 = LlmJson.parse('{"name": ');
    TestEquality.equals("t7-success", r7.success, true);
    if (r7.success) TestEquality.equals("t7-data", r7.data, {});

    // 8. Key + colon + opening value quote
    const r8 = LlmJson.parse('{"name": "');
    TestEquality.equals("t8-success", r8.success, true);
    if (r8.success) TestEquality.equals("t8-data", r8.data, { name: "" });

    // 9. Partial value
    const r9 = LlmJson.parse('{"name": "Jo');
    TestEquality.equals("t9-success", r9.success, true);
    if (r9.success) TestEquality.equals("t9-data", r9.data, { name: "Jo" });

    // 10. Complete value, no closing quote
    const r10 = LlmJson.parse('{"name": "John');
    TestEquality.equals("t10-success", r10.success, true);
    if (r10.success)
      TestEquality.equals("t10-data", r10.data, { name: "John" });

    // 11. Complete value with closing quote
    const r11 = LlmJson.parse('{"name": "John"');
    TestEquality.equals("t11-success", r11.success, true);
    if (r11.success)
      TestEquality.equals("t11-data", r11.data, { name: "John" });

    // 12. After comma
    const r12 = LlmJson.parse('{"name": "John",');
    TestEquality.equals("t12-success", r12.success, true);
    if (r12.success)
      TestEquality.equals("t12-data", r12.data, { name: "John" });

    // 13. Second key started
    const r13 = LlmJson.parse('{"name": "John", "');
    TestEquality.equals("t13-success", r13.success, true);
    if (r13.success)
      TestEquality.equals("t13-data", r13.data, { name: "John" });

    // 14. Second key partial
    const r14 = LlmJson.parse('{"name": "John", "ag');
    TestEquality.equals("t14-success", r14.success, true);
    if (r14.success)
      TestEquality.equals("t14-data", r14.data, { name: "John" });

    // 15. Second key complete
    const r15 = LlmJson.parse('{"name": "John", "age"');
    TestEquality.equals("t15-success", r15.success, true);
    if (r15.success)
      TestEquality.equals("t15-data", r15.data, { name: "John" });

    // 16. Second key + colon
    const r16 = LlmJson.parse('{"name": "John", "age":');
    TestEquality.equals("t16-success", r16.success, true);
    if (r16.success)
      TestEquality.equals("t16-data", r16.data, { name: "John" });

    // 17. Second key + colon + space
    const r17 = LlmJson.parse('{"name": "John", "age": ');
    TestEquality.equals("t17-success", r17.success, true);
    if (r17.success)
      TestEquality.equals("t17-data", r17.data, { name: "John" });

    // 18. Partial number value
    const r18 = LlmJson.parse('{"name": "John", "age": 3');
    TestEquality.equals("t18-success", r18.success, true);
    if (r18.success)
      TestEquality.equals("t18-data", r18.data, {
        name: "John",
        age: 3,
      });

    // 19. Complete number value
    const r19 = LlmJson.parse('{"name": "John", "age": 30');
    TestEquality.equals("t19-success", r19.success, true);
    if (r19.success)
      TestEquality.equals("t19-data", r19.data, {
        name: "John",
        age: 30,
      });

    // 20. Complete object (should use native JSON.parse)
    const r20 = LlmJson.parse('{"name": "John", "age": 30}');
    TestEquality.equals("t20-success", r20.success, true);
    if (r20.success)
      TestEquality.equals("t20-data", r20.data, {
        name: "John",
        age: 30,
      });

    // 21. Nested object truncation: value is an object being built
    const r21 = LlmJson.parse('{"user": {');
    TestEquality.equals("t21-success", r21.success, true);
    if (r21.success) TestEquality.equals("t21-data", r21.data, { user: {} });

    // 22. Nested object with partial key
    const r22 = LlmJson.parse('{"user": {"na');
    TestEquality.equals("t22-success", r22.success, true);
    if (r22.success) TestEquality.equals("t22-data", r22.data, { user: {} });

    // 23. Nested object with complete property
    const r23 = LlmJson.parse('{"user": {"name": "Jo');
    TestEquality.equals("t23-success", r23.success, true);
    if (r23.success)
      TestEquality.equals("t23-data", r23.data, {
        user: { name: "Jo" },
      });
  };
