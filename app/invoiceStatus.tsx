import clsx from "clsx";
export default function invoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-1 text-sm",
        {
          "bg-gray-100 text-gray-500:": status === "pending",
          "bg-green-100 text-green-500": status === "paid",
        }
      )}
    ></span>
  );
}
