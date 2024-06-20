// src/utils/localStorage.ts
export const getUserInfoFromStorage = (): { email: string; token: string } | null => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        return JSON.parse(storedUserInfo);
      } catch (error) {
        console.error("Failed to parse user info from storage", error);
        return null;
      }
    }
    return null;
  };
  