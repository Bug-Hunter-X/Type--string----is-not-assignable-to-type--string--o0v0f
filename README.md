# Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript error: assigning an array of strings to a variable expecting a single string.

The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.

The error arises because the `greeter` function expects a single string as input, but the `user` variable is an array of strings.  TypeScript's type system correctly identifies this mismatch.