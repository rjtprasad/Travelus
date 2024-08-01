import axios from "axios";

export const getUserProfile = async (tokenInfo) => {
  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,

      {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: "Application/json",
        },
      }
    );
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return error;
  }
};
