// Example usage of kebab-case notation support in typia
import typia from "typia";

// Define a TypeScript interface with typical camelCase properties
interface UserProfile {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  homeAddress: {
    streetName: string;
    zipCode: number;
    countryCode: string;
  };
  personalDetails: {
    birthDate: string;
    socialSecurityNumber?: string;
  };
}

// API returns data in kebab-case format (common in some REST APIs)
const apiResponse = {
  "first-name": "John",
  "last-name": "Doe",
  "email-address": "john.doe@example.com", 
  "phone-number": "123-456-7890",
  "home-address": {
    "street-name": "Main Street",
    "zip-code": 12345,
    "country-code": "US"
  },
  "personal-details": {
    "birth-date": "1990-01-01",
    "social-security-number": "123-45-6789"
  }
};

// BEFORE kebab-case support: accessing properties was clunky
// const firstName = apiResponse["first-name"];  // string indexing required
// const streetName = apiResponse["home-address"]["street-name"];  // cumbersome

// WITH kebab-case support: clean TypeScript conversion
const userProfile = typia.notations.kebab<UserProfile>(apiResponse);

// Now you can use normal property access:
// userProfile.firstName      → "John"
// userProfile.emailAddress   → "john.doe@example.com"  
// userProfile.homeAddress.streetName → "Main Street"

// Type-safe conversion with validation
const validatedProfile = typia.notations.validateKebab<UserProfile>(apiResponse);
if (validatedProfile.success) {
  console.log("Valid profile:", validatedProfile.data.firstName);
} else {
  console.log("Validation errors:", validatedProfile.errors);
}

// Assertion with error throwing
const assertedProfile = typia.notations.assertKebab<UserProfile>(apiResponse);
console.log("Asserted profile email:", assertedProfile.emailAddress);

// Type checking without transformation  
const checkedProfile = typia.notations.isKebab<UserProfile>(apiResponse);
if (checkedProfile !== null) {
  console.log("Profile is valid:", checkedProfile.personalDetails.birthDate);
}

export {};