import { authStore } from "src/store/auth/auth.store";
import { Signup } from "src/types/auth/auth.type";
import React, { useCallback, useState } from "react";

const useSignup = () => {
  const [signupInfo, setSignupInfo] = useState<Signup>({
    email: "",
    verify: "",
    password: "",
    passwordCheck: "",
  });

  const [isVeriify, setIsVerify] = useState<boolean>(false);
  const [section, setSection] = useState<string>("first");
  const storedSetSection = authStore((state) => state.setSection);

  const handleSignupInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignupInfo((prev) => ({ ...prev, [name]: value }));
    },
    [setSignupInfo],
  );

  const handleVerify = () => {
    setIsVerify((prev) => prev);
  };

  return {
    signupInfo,
    isVeriify,
    handleSignupInfo,
    handleVerify,
    setSection,
  };
};

export default useSignup;
