export const getUserNextDelivery = async (
  userId: string,
): Promise<{
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}> => {
  const commsApiBase = process.env.COMMS_API_BASE_URL;
  if (!commsApiBase)
    throw new Error("process.env.COMMS_API_BASE_URL not available");
  return fetch(`${commsApiBase}/your-next-delivery/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Invalid response from Comms API");
      }
      return response.json();
    },
  );
};
