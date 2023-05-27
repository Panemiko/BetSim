import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

export async function signUp({
  email,
  password,
  username,
}: {
  email: string;
  password: string;
  username: string;
}) {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user, { displayName: username });
}
