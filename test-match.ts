import typia from "./src";

// Test types for pattern matching
type Animal = 
  | { type: 'dog'; breed: string; }
  | { type: 'cat'; lives: number; }
  | { type: 'bird'; canFly: boolean; };

const animal: Animal = { type: 'dog', breed: 'Golden Retriever' };

// Basic test - this should compile and transform
try {
  const result = typia.functional.match(
    animal,
    {
      dog: (dog: { type: 'dog'; breed: string; }) => `Dog of breed: ${dog.breed}`,
      cat: (cat: { type: 'cat'; lives: number; }) => `Cat with ${cat.lives} lives`,
      bird: (bird: { type: 'bird'; canFly: boolean; }) => `Bird that ${bird.canFly ? 'can' : 'cannot'} fly`,
    },
    (error) => `No match found: ${JSON.stringify(error)}`,
  );
  
  console.log('Match result:', result);
} catch (e) {
  console.log('Error during match:', e);
}