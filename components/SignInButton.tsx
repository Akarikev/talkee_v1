"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { FC } from "react";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const { data: session } = useSession();

  console.log(session?.user);
  if (session && session.user) {
    return (
      <div>
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>sign in</button>
    </div>
  );
};

export default SignInButton;
