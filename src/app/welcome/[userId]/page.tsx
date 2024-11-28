import { getUserNextDelivery } from "@/lib/fetch/commsApi";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const { title, message, totalPrice, freeGift } =
    await getUserNextDelivery(userId);

  return (
    <div className="flex flex-col relative">
      <h1 className="text-green-700 text-2xl font-bold">{title}</h1>
      <p className="font-light">{message}</p>
      <span className="mt-4">
        Total price:{"  "}
        {Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(totalPrice)}
      </span>
      {freeGift && (
        <div className="absolute -right-10 -top-10 rotate-12 bg-pink-200 border-2 border-purple-200 text-purple-500 p-1">
          FREE GIFT
        </div>
      )}
    </div>
  );
}
