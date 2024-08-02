type user = {
  email: string;
  password: string;
  phonenumber: string;
};

type user2 = Pick<user, 'email' | 'password'>;

type partialuser2 = Partial<user2>;

// PICK
// PARTIAL
// READONLY GENERICS
// RECORD OR MAP
// EXCLUDE
// ZOD INFER TYPES
