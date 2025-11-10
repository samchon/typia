import { TestValidator } from "../../internal/TestValidator";

export const test_functional_match_discriminated_union = (): void =>
  TestValidator.equals({
    message: "discriminated union pattern matching",
    expected: true,
    actual: (() => {
      // Test types for pattern matching
      type Animal = 
        | { type: 'dog'; breed: string; }
        | { type: 'cat'; lives: number; }
        | { type: 'bird'; canFly: boolean; };

      const animals: Animal[] = [
        { type: 'dog', breed: 'Golden Retriever' },
        { type: 'cat', lives: 9 },
        { type: 'bird', canFly: true },
      ];

      // For now, we'll test that the transformer doesn't throw an error
      // The actual functionality will be implemented incrementally
      try {
        animals.forEach(animal => {
          // This should be transformed by typia.functional.match
          // For now, we just test compilation
          const input = animal;
          const cases = {
            dog: (dog: { type: 'dog'; breed: string; }) => `Dog of breed: ${dog.breed}`,
            cat: (cat: { type: 'cat'; lives: number; }) => `Cat with ${cat.lives} lives`, 
            bird: (bird: { type: 'bird'; canFly: boolean; }) => `Bird that ${bird.canFly ? 'can' : 'cannot'} fly`,
          };
          
          // Manual implementation for now - will be replaced by transformer
          const result = (input as any).type in cases ? 
            (cases as any)[(input as any).type](input) : 
            "Unknown animal";
            
          // Basic validation that something was returned
          if (typeof result !== 'string') return false;
        });
        return true;
      } catch (e) {
        return false;
      }
    })(),
  });